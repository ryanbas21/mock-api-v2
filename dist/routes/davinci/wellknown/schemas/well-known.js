"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WellKnownEndpointsResponseSchema = exports.WellKnownResponseSchema = void 0;
var schema_1 = require("@effect/schema");
var WellKnownResponseSchema = schema_1.Schema.Struct({
    issuer: schema_1.Schema.String,
    authorization_endpoint: schema_1.Schema.String,
    pushed_authorization_request_endpoint: schema_1.Schema.String,
    token_endpoint: schema_1.Schema.String,
    userinfo_endpoint: schema_1.Schema.String,
    jwks_uri: schema_1.Schema.String,
    end_session_endpoint: schema_1.Schema.String,
    introspection_endpoint: schema_1.Schema.String,
    revocation_endpoint: schema_1.Schema.String,
    device_authorization_endpoint: schema_1.Schema.String,
    claims_parameter_supported: schema_1.Schema.Boolean,
    request_parameter_supported: schema_1.Schema.Boolean,
    request_uri_parameter_supported: schema_1.Schema.Boolean,
    require_pushed_authorization_requests: schema_1.Schema.Boolean,
    scopes_supported: schema_1.Schema.Array(schema_1.Schema.String),
    response_types_supported: schema_1.Schema.Array(schema_1.Schema.String),
    response_modes_supported: schema_1.Schema.Array(schema_1.Schema.String),
    grant_types_supported: schema_1.Schema.Array(schema_1.Schema.String),
    subject_types_supported: schema_1.Schema.Array(schema_1.Schema.String),
    id_token_signing_alg_values_supported: schema_1.Schema.Array(schema_1.Schema.String),
    userinfo_signing_alg_values_supported: schema_1.Schema.Array(schema_1.Schema.String),
    request_object_signing_alg_values_supported: schema_1.Schema.Array(schema_1.Schema.String),
    token_endpoint_auth_methods_supported: schema_1.Schema.Array(schema_1.Schema.String),
    token_endpoint_auth_signing_alg_values_supported: schema_1.Schema.Array(schema_1.Schema.String),
    claim_types_supported: schema_1.Schema.Array(schema_1.Schema.String),
    claims_supported: schema_1.Schema.Array(schema_1.Schema.String),
    code_challenge_methods_supported: schema_1.Schema.Array(schema_1.Schema.String),
});
exports.WellKnownResponseSchema = WellKnownResponseSchema;
var WellKnownEndpointsResponseSchema = schema_1.Schema.Struct({
    uploadUrl: schema_1.Schema.String,
    apiUrl: schema_1.Schema.String,
    authUrl: schema_1.Schema.String,
    assetsUrl: schema_1.Schema.String,
});
exports.WellKnownEndpointsResponseSchema = WellKnownEndpointsResponseSchema;
