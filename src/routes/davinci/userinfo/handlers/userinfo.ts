import { Effect } from 'effect';
import { userInfoSuccess } from '../responses/userinfo';
import { RouterBuilder, Api } from 'effect-http';
import { userInfoSpec } from '../spec';

const userInfoHandler = RouterBuilder.handler(
  Api.make().pipe(Api.addGroup(userInfoSpec)),
  'UserInfo',
  req => Effect.succeed(userInfoSuccess),
);
export { userInfoHandler };
