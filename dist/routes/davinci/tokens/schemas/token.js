"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokensResponseSchema = exports.TokensHeaderSchema = void 0;
var schema_1 = require("@effect/schema");
var TokensHeaderSchema = schema_1.Schema.Struct({
    client_id: schema_1.Schema.String,
    code: schema_1.Schema.String,
    grant_type: schema_1.Schema.String,
    redirect_uri: schema_1.Schema.String,
    code_verifier: schema_1.Schema.String,
});
exports.TokensHeaderSchema = TokensHeaderSchema;
var TokensResponseSchema = schema_1.Schema.Struct({
    access_token: schema_1.Schema.String,
    token_type: schema_1.Schema.String,
    expires_in: schema_1.Schema.Int,
    refresh_token: schema_1.Schema.String,
    scope: schema_1.Schema.String,
    id_token: schema_1.Schema.String,
});
exports.TokensResponseSchema = TokensResponseSchema;
