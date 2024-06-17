import { Schema } from '@effect/schema';

const RevokeHeadersSchema = Schema.Struct({
  client_id: Schema.String,
  token: Schema.String,
});

export { RevokeHeadersSchema };
