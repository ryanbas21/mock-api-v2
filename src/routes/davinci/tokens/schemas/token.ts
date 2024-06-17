import { Schema } from '@effect/schema';

const TokensHeaderSchema = Schema.Struct({
  client_id: Schema.String,
  code: Schema.String,
  grant_type: Schema.String,
  redirect_uri: Schema.String,
  code_verifier: Schema.String,
});

const TokensResponseSchema = Schema.Struct({
  access_token: Schema.String,
  token_type: Schema.String,
  expires_in: Schema.Int,
  refresh_token: Schema.String,
  scope: Schema.String,
  id_token: Schema.String,
});
export { TokensHeaderSchema, TokensResponseSchema };
