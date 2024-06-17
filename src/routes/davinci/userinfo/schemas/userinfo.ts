import { Schema } from '@effect/schema';

const UserInfoHeaders = Schema.Struct({
  Authorization: Schema.String,
});

const UserInfoSuccess = Schema.Struct({
  sub: Schema.String,
  preferred_username: Schema.String,
  given_name: Schema.String,
  updated_at: Schema.Int,
  family_name: Schema.String,
  email: Schema.String,
  env: Schema.String,
  org: Schema.String,
  'p1.region': Schema.String,
});

export { UserInfoHeaders, UserInfoSuccess };
