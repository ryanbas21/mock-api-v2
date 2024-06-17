import { Api, ApiGroup } from 'effect-http';
import { TokensHeaderSchema, TokensResponseSchema } from './schemas/token';
import { Schema } from '@effect/schema';

const tokensPost = Api.post('DavinciTokens', '/:envid/as/tokens').pipe(
  Api.setRequestPath(Schema.Struct({ envid: Schema.String })),
  Api.setRequestHeaders(TokensHeaderSchema),
  Api.setResponseBody(TokensResponseSchema),
);

const tokensSpec = ApiGroup.make('Davinci Tokens', {
  description: 'Davinci Tokens',
}).pipe(ApiGroup.addEndpoint(tokensPost));

export { tokensSpec };
