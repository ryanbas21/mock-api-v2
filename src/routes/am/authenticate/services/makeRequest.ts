// import { Schema } from '@effect/schema';
// import { Effect, Context, pipe, Layer } from 'effect';
// import {
//   AuthenticateCallbacks,
//   AuthenticateHeaders,
//   AuthenticateQueryParams,
// } from '../schemas/authenticate';
// import { JourneyNames, journeyMap } from '../handlers/journeyMap';
// import { MappingJourneyError } from '../errors';
// import { HttpClient, HttpServer } from '@effect/platform';

// type RRequest = {
//   query: Schema.Schema.Type<typeof AuthenticateQueryParams>;
//   headers: Schema.Schema.Type<typeof AuthenticateHeaders>;
//   body: Schema.Schema.Type<typeof AuthenticateCallbacks>;
// };

// interface AMRequestService {
//   readonly fetch: (
//     req: RRequest,
//   ) => Effect.Effect<
//     ReturnType<typeof mapJourneyToResponse>,
//     MappingJourneyError,
//     never
//   >;
// }

// const AMRequestService =
//   Context.GenericTag<AMRequestService>('AMRequestService');

// const AMRequestServiceTest = Layer.effect(
//   AMRequestService,
//   Effect.map(AMRequestService, () =>
//     AMRequestService.of({
//       fetch: req =>
//         pipe(
//           checkForSetCookie(req),
//           Effect.flatMap(index =>
//             mapJourneyToResponse(req.query.authIndexValue, index),
//           ),
//         ),
//     }),
//   ),
// );

// const callbacksToResponse = (
//   callbacks: Schema.Schema.Type<typeof AuthenticateCallbacks>[],
//   index: number,
// ) => {
//   const body = callbacks[index];
//   return {
//     status: 200 as const,
//     body,
//     headers: {
//       'set-cookie': HttpClient.cookies.serializeCookie(
//         HttpClient.cookies.unsafeMakeCookie(
//           'journeyStepIndex',
//           (index + 1).toString(),
//           {
//             httpOnly: true,
//             sameSite: 'strict',
//             secure: true,
//             path: '/',
//           },
//         ),
//       ),
//     },
//   };
// };
// const checkForSetCookie = req =>
//   Effect.sync(() => {
//     /*
//      * This is a terrible function for prototyping using a cookie to manage
//      * the journey step index.
//      */
//     const headersArray = req.headers['set-cookie'] ?? [];
//     console.log(headersArray);
//     if (headersArray.length === 0) {
//       return 0;
//     }
//     const cookiesParsed = HttpServer.cookies.parseHeader(headersArray[0]);
//     return parseInt(cookiesParsed['journeyStepIndex']);
//   });

// function mapJourneyToResponse(journeyName: JourneyNames, index: number = 0) {
//   const step = journeyMap[journeyName];

//   return Effect.try({
//     try: () => callbacksToResponse(step, index),
//     catch: () => new MappingJourneyError(),
//   });
// }

// export { AMRequestServiceTest, AMRequestService };
