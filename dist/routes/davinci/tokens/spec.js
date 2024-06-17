"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tokensSpec = void 0;
var effect_http_1 = require("effect-http");
var token_1 = require("./schemas/token");
var schema_1 = require("@effect/schema");
var tokensPost = effect_http_1.Api.post('DavinciTokens', '/:envid/as/tokens').pipe(effect_http_1.Api.setRequestPath(schema_1.Schema.Struct({ envid: schema_1.Schema.String })), effect_http_1.Api.setRequestHeaders(token_1.TokensHeaderSchema), effect_http_1.Api.setResponseBody(token_1.TokensResponseSchema));
var tokensSpec = effect_http_1.ApiGroup.make('Davinci Tokens', {
    description: 'Davinci Tokens',
}).pipe(effect_http_1.ApiGroup.addEndpoint(tokensPost));
exports.tokensSpec = tokensSpec;
