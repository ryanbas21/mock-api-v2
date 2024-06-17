import { Api, ApiGroup } from 'effect-http';
import { RevokeHeadersSchema } from './schemas/revoke';
import { Schema } from '@effect/schema';

const RevokePost = Api.post('DavinciRevoke', '/:envid/as/revoke').pipe(
  Api.setRequestPath(Schema.Struct({ envid: Schema.String })),
  Api.setRequestHeaders(RevokeHeadersSchema),
);

const revokeSpec = ApiGroup.make('Davinci Revoke', {
  description: 'Davinci Revoke',
}).pipe(ApiGroup.addEndpoint(RevokePost));

export { revokeSpec };
