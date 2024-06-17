"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authorizeRoute = void 0;
var effect_http_1 = require("effect-http");
var authorize_1 = require("./schemas/authorize");
var authorizePost = effect_http_1.Api.post('DavinciAuthorize', '/davinci/authorize').pipe(effect_http_1.Api.setRequestQuery(authorize_1.DavinciAuthorizeHeaders), effect_http_1.Api.setResponseBody(authorize_1.DavinciAuthorizeSuccess));
var authorizeRoute = effect_http_1.ApiGroup.make('Davinci Authorize', {
    description: 'Davinci Authorize',
}).pipe(effect_http_1.ApiGroup.addEndpoint(authorizePost));
exports.authorizeRoute = authorizeRoute;
