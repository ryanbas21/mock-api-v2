import { Effect } from 'effect';
import { Api, RouterBuilder } from 'effect-http';
import {
  WellKnownEndpointsResponse,
  wellKnownResponse,
} from '../responses/wellknown';
import { wellKnownSpec } from '../spec';

const api = Api.make().pipe(Api.addGroup(wellKnownSpec));

const wellKnownEndpointsHandler = RouterBuilder.handler(
  api,
  'WellKnown Endpoints',
  req => Effect.succeed(WellKnownEndpointsResponse),
);

const wellKnownOpenIDHandler = RouterBuilder.handler(
  api,
  'WellKnown OpenId Configuration',
  () => Effect.succeed(wellKnownResponse),
);

export { wellKnownOpenIDHandler, wellKnownEndpointsHandler };
