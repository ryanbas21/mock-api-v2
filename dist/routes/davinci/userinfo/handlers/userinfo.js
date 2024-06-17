"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userInfoHandler = void 0;
var effect_1 = require("effect");
var userinfo_1 = require("../responses/userinfo");
var effect_http_1 = require("effect-http");
var spec_1 = require("../spec");
var userInfoHandler = effect_http_1.RouterBuilder.handler(effect_http_1.Api.make().pipe(effect_http_1.Api.addGroup(spec_1.userInfoSpec)), 'UserInfo', function (req) { return effect_1.Effect.succeed(userinfo_1.userInfoSuccess); });
exports.userInfoHandler = userInfoHandler;
