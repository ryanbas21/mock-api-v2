import { Effect } from 'effect';
import { UsernamePassword } from '../responses/UsernamePassword';
import { RouterBuilder, Api, ApiGroup } from 'effect-http';
import { authorizeSpec } from '../spec';

const api = Api.make().pipe(Api.addGroup(authorizeSpec));

const authorizeHandler = RouterBuilder.handler(api, 'DavinciAuthorize', req =>
  Effect.succeed(UsernamePassword),
);

export { authorizeHandler };
