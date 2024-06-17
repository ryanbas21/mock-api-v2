"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authorizeHandler = void 0;
var effect_1 = require("effect");
var UsernamePassword_1 = require("../responses/UsernamePassword");
var effect_http_1 = require("effect-http");
var spec_1 = require("../spec");
var api = effect_http_1.Api.make().pipe(effect_http_1.Api.addGroup(spec_1.authorizeSpec));
var authorizeHandler = effect_http_1.RouterBuilder.handler(api, 'DavinciAuthorize', function (req) {
    return effect_1.Effect.succeed(UsernamePassword_1.UsernamePassword);
});
exports.authorizeHandler = authorizeHandler;
