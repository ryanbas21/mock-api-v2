import { Schema } from '@effect/schema';
import { Api, ApiGroup } from 'effect-http';

import {
  DavinciAuthorizeHeaders,
  DavinciAuthorizeSuccess,
} from './schemas/authorize';

const authorizePost = Api.post(
  'DavinciAuthorize',
  '/:envid/as/authorize?params',
).pipe(
  Api.setRequestPath(Schema.Struct({ envid: Schema.String })),
  Api.setRequestQuery(Schema.Struct({ params: DavinciAuthorizeHeaders })),
  // Api.setRequestQuery(DavinciAuthorizeHeaders),
  Api.setResponseBody(DavinciAuthorizeSuccess),
);

const authorizeSpec = ApiGroup.make('Davinci Authorize', {
  description: 'Davinci Authorize',
}).pipe(ApiGroup.addEndpoint(authorizePost));

export { authorizeSpec };
