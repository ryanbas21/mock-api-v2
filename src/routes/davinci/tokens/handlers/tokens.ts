import { Effect } from 'effect';
import { RouterBuilder, Api } from 'effect-http';
import { tokensResponse } from '../responses/tokens';
import { tokensSpec } from '../spec';

const tokensHandler = RouterBuilder.handler(
  Api.make().pipe(Api.addGroup(tokensSpec)),
  'DavinciTokens',
  req => Effect.succeed(tokensResponse),
);

export { tokensHandler };
