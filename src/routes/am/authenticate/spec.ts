import { Schema } from '@effect/schema';
import { Api, ApiGroup, ApiResponse, Security } from 'effect-http';

import {
  AuthenticateQueryParams,
  AuthenticateCallbacks,
  AuthenticateHeaders,
} from './schemas/authenticate';

const authenticatePost = Api.post(
  'AMAuthenticate',
  '/am/json/realms/root/realms/:realm/authenticate',
).pipe(
  // setup request
  Api.setRequestBody(AuthenticateCallbacks),
  Api.setRequestHeaders(AuthenticateHeaders),
  Api.setRequestPath(Schema.Struct({ realm: Schema.String })),

  // setup response
  Api.setResponseHeaders(
    Schema.Struct({
      'set-cookie': Schema.UndefinedOr(Schema.String),
    }),
  ),
  Api.setRequestQuery(AuthenticateQueryParams),
  Api.setResponseBody(AuthenticateCallbacks),
);

const authenticateSpec = ApiGroup.make('AM Authenticate', {
  description: 'Authenticate Endpoint from AM',
}).pipe(ApiGroup.addEndpoint(authenticatePost));

export { authenticatePost, authenticateSpec };
