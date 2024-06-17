import { Effect } from 'effect';
import { RouterBuilder, Api } from 'effect-http';
import { revokeSpec } from '../spec';

const revokeHandler = RouterBuilder.handler(
  Api.make().pipe(Api.addGroup(revokeSpec)),
  'DavinciRevoke',
  req => Effect.succeed({}),
);

export { revokeHandler };
