import { Api, ApiGroup } from 'effect-http';
import {
  WellKnownEndpointsResponse,
  wellKnownResponse,
} from './responses/wellknown';
import {
  WellKnownEndpointsResponseSchema,
  WellKnownResponseSchema,
} from './schemas/well-known';
import { Schema } from '@effect/schema';

//auth.pingone.ca/02fb4743-189a-4bc7-9d6c-a919edfe6447/as/.well-known/openid-configuration
const wellKnownOpenId = Api.get(
  'WellKnown OpenId Configuration',
  '/:envid/as/.well-known/openid-configuration',
).pipe(
  Api.setRequestPath(Schema.Struct({ envid: Schema.String })),
  Api.setResponseBody(WellKnownResponseSchema),
);

const wellKnownEndpoints = Api.get(
  'WellKnown Endpoints',
  '/:envid/as/.well-known/ping-endpoints.json',
).pipe(
  Api.setRequestPath(Schema.Struct({ envid: Schema.String })),
  Api.setResponseBody(WellKnownEndpointsResponseSchema),
);

const wellKnownSpec = ApiGroup.make('WellKnown API', {
  description: 'Davinci Capabilities',
}).pipe(
  ApiGroup.addEndpoint(wellKnownOpenId),
  ApiGroup.addEndpoint(wellKnownEndpoints),
);

export { wellKnownSpec };
