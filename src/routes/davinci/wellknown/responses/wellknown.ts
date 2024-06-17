import { Schema } from '@effect/schema';

const WellKnownEndpointsResponse = {
  uploadUrl:
    'https://uploads.pingone.ca/environments/02fb4743-189a-4bc7-9d6c-a919edfe6447',
  apiUrl:
    'https://api.pingone.ca/v1/environments/02fb4743-189a-4bc7-9d6c-a919edfe6447',
  authUrl: 'https://auth.pingone.ca/02fb4743-189a-4bc7-9d6c-a919edfe6447',
  assetsUrl: 'https://assets.pingone.ca',
};

const wellKnownResponse = {
  issuer: 'https://auth.pingone.ca/02fb4743-189a-4bc7-9d6c-a919edfe6447/as',
  authorization_endpoint:
    'https://auth.pingone.ca/02fb4743-189a-4bc7-9d6c-a919edfe6447/as/authorize',
  pushed_authorization_request_endpoint:
    'https://auth.pingone.ca/02fb4743-189a-4bc7-9d6c-a919edfe6447/as/par',
  token_endpoint:
    'https://auth.pingone.ca/02fb4743-189a-4bc7-9d6c-a919edfe6447/as/token',
  userinfo_endpoint:
    'https://auth.pingone.ca/02fb4743-189a-4bc7-9d6c-a919edfe6447/as/userinfo',
  jwks_uri:
    'https://auth.pingone.ca/02fb4743-189a-4bc7-9d6c-a919edfe6447/as/jwks',
  end_session_endpoint:
    'https://auth.pingone.ca/02fb4743-189a-4bc7-9d6c-a919edfe6447/as/signoff',
  introspection_endpoint:
    'https://auth.pingone.ca/02fb4743-189a-4bc7-9d6c-a919edfe6447/as/introspect',
  revocation_endpoint:
    'https://auth.pingone.ca/02fb4743-189a-4bc7-9d6c-a919edfe6447/as/revoke',
  device_authorization_endpoint:
    'https://auth.pingone.ca/02fb4743-189a-4bc7-9d6c-a919edfe6447/as/device_authorization',
  claims_parameter_supported: false,
  request_parameter_supported: true,
  request_uri_parameter_supported: false,
  require_pushed_authorization_requests: false,
  scopes_supported: ['openid', 'profile', 'email', 'address', 'phone'],
  response_types_supported: [
    'code',
    'id_token',
    'token id_token',
    'code id_token',
    'code token',
    'code token id_token',
  ],
  response_modes_supported: ['pi.flow', 'query', 'fragment', 'form_post'],
  grant_types_supported: [
    'authorization_code',
    'implicit',
    'client_credentials',
    'refresh_token',
    'urn:ietf:params:oauth:grant-type:device_code',
  ],
  subject_types_supported: ['public'],
  id_token_signing_alg_values_supported: ['RS256'],
  userinfo_signing_alg_values_supported: ['none'],
  request_object_signing_alg_values_supported: [
    'none',
    'HS256',
    'HS384',
    'HS512',
    'RS256',
    'RS384',
    'RS512',
  ],
  token_endpoint_auth_methods_supported: [
    'client_secret_basic',
    'client_secret_post',
    'client_secret_jwt',
    'private_key_jwt',
  ],
  token_endpoint_auth_signing_alg_values_supported: [
    'HS256',
    'HS384',
    'HS512',
    'RS256',
    'RS384',
    'RS512',
  ],
  claim_types_supported: ['normal'],
  claims_supported: [
    'sub',
    'iss',
    'auth_time',
    'acr',
    'name',
    'given_name',
    'family_name',
    'middle_name',
    'preferred_username',
    'profile',
    'picture',
    'zoneinfo',
    'phone_number',
    'updated_at',
    'address',
    'email',
    'locale',
  ],
  code_challenge_methods_supported: ['plain', 'S256'],
};

export { wellKnownResponse, WellKnownEndpointsResponse };
