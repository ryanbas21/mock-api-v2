"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authorizeSpec = void 0;
var schema_1 = require("@effect/schema");
var effect_http_1 = require("effect-http");
var authorize_1 = require("./schemas/authorize");
var authorizePost = effect_http_1.Api.post('DavinciAuthorize', '/:envid/as/authorize?params').pipe(effect_http_1.Api.setRequestPath(schema_1.Schema.Struct({ envid: schema_1.Schema.String })), effect_http_1.Api.setRequestQuery(schema_1.Schema.Struct({ params: authorize_1.DavinciAuthorizeHeaders })), 
// Api.setRequestQuery(DavinciAuthorizeHeaders),
effect_http_1.Api.setResponseBody(authorize_1.DavinciAuthorizeSuccess));
var authorizeSpec = effect_http_1.ApiGroup.make('Davinci Authorize', {
    description: 'Davinci Authorize',
}).pipe(effect_http_1.ApiGroup.addEndpoint(authorizePost));
exports.authorizeSpec = authorizeSpec;
