import { Console, Effect, Layer, pipe } from 'effect';
import { RouterBuilder, Api, ApiRequest } from 'effect-http';
import { authenticateSpec } from '../spec';
import { JourneyNames, journeyMap } from './journeyMap';
import { AuthenticateCallbacks, Callbacks } from '../schemas/authenticate';
import { Schema } from '@effect/schema';
import { HttpClient, HttpServer } from '@effect/platform';
import { Callback } from '../responses/types/callback';
import { MappingJourneyError } from '../errors';

const api = Api.make().pipe(Api.addGroup(authenticateSpec));

const callbacksToResponse = (
  callbacks: Schema.Schema.Type<typeof AuthenticateCallbacks>[],
  index: number,
) => {
  const body = callbacks[index];
  return {
    status: 200 as const,
    body,
    headers: {
      'set-cookie': HttpClient.cookies.serializeCookie(
        HttpClient.cookies.unsafeMakeCookie(
          'journeyStepIndex',
          (index + 1).toString(),
          {
            httpOnly: true,
            sameSite: 'strict',
            secure: true,
            path: '/',
          },
        ),
      ),
    },
  };
};

function mapJourneyToResponse(journeyName: JourneyNames, index: number = 0) {
  const step = journeyMap[journeyName];

  return Effect.try({
    try: () => callbacksToResponse(step, index),
    catch: () => new MappingJourneyError(),
  });
}

const checkForSetCookie = req =>
  Effect.sync(() => {
    /*
     * This is a terrible function for prototyping using a cookie to manage
     * the journey step index.
     */
    const headersArray = req.headers['set-cookie'] ?? [];
    console.log(headersArray);
    if (headersArray.length === 0) {
      return 0;
    }
    const cookiesParsed = HttpServer.cookies.parseHeader(headersArray[0]);
    return parseInt(cookiesParsed['journeyStepIndex']);
  });

const authenticateHandler = RouterBuilder.handler(api, 'AMAuthenticate', req =>
  pipe(
    checkForSetCookie(req),
    Effect.flatMap(index =>
      mapJourneyToResponse(req.query.authIndexValue, index),
    ),
  ),
);

export { authenticateHandler };
