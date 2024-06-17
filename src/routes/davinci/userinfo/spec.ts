import { Api, ApiGroup } from 'effect-http';
import { UserInfoHeaders, UserInfoSuccess } from './schemas/userinfo';
import { Schema } from '@effect/schema';

const UserInfoGet = Api.get('UserInfo', '/:envid/as/userinfo').pipe(
  Api.setRequestPath(Schema.Struct({ envid: Schema.String })),
  Api.setRequestHeaders(UserInfoHeaders),
  Api.setResponseBody(UserInfoSuccess),
);

const userInfoSpec = ApiGroup.make('User Info Routes', {
  description: 'User Info Routes',
}).pipe(ApiGroup.addEndpoint(UserInfoGet));

export { userInfoSpec };
