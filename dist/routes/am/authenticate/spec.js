"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticateSpec = exports.authenticatePost = void 0;
var schema_1 = require("@effect/schema");
var effect_http_1 = require("effect-http");
var authenticate_1 = require("./schemas/authenticate");
var authenticatePost = effect_http_1.Api.post('AMAuthenticate', '/am/json/realms/root/realms/:realm/authenticate').pipe(
// setup request
effect_http_1.Api.setRequestBody(authenticate_1.AuthenticateCallbacks), effect_http_1.Api.setRequestHeaders(authenticate_1.AuthenticateHeaders), effect_http_1.Api.setRequestPath(schema_1.Schema.Struct({ realm: schema_1.Schema.String })), 
// setup response
effect_http_1.Api.setResponseHeaders(schema_1.Schema.Struct({
    'set-cookie': schema_1.Schema.UndefinedOr(schema_1.Schema.String),
})), effect_http_1.Api.setRequestQuery(authenticate_1.AuthenticateQueryParams), effect_http_1.Api.setResponseBody(authenticate_1.AuthenticateCallbacks));
exports.authenticatePost = authenticatePost;
var authenticateSpec = effect_http_1.ApiGroup.make('AM Authenticate', {
    description: 'Authenticate Endpoint from AM',
}).pipe(effect_http_1.ApiGroup.addEndpoint(authenticatePost));
exports.authenticateSpec = authenticateSpec;
