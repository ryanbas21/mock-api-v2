"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticateRoute = void 0;
var effect_http_1 = require("effect-http");
var authenticate_1 = require("./schemas/authenticate");
var authenticatePost = effect_http_1.Api.post('DavinciAuthenticate', '/davinci/authenticate').pipe(
// Api.setRequestQuery(DavinciAuthenticateHeaders),
effect_http_1.Api.setRequestBody(authenticate_1.DavinciAuthenticateRequestBody), effect_http_1.Api.setResponseBody(authenticate_1.DavinciAuthenticateResponseBody));
var authenticateRoute = effect_http_1.ApiGroup.make('Davinci Authorize', {
    description: 'Davinci Authenticate',
}).pipe(effect_http_1.ApiGroup.addEndpoint(authenticatePost));
exports.authenticateRoute = authenticateRoute;
