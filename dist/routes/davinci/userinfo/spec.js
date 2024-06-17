"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userInfoSpec = void 0;
var effect_http_1 = require("effect-http");
var userinfo_1 = require("./schemas/userinfo");
var schema_1 = require("@effect/schema");
var UserInfoGet = effect_http_1.Api.get('UserInfo', '/:envid/as/userinfo').pipe(effect_http_1.Api.setRequestPath(schema_1.Schema.Struct({ envid: schema_1.Schema.String })), effect_http_1.Api.setRequestHeaders(userinfo_1.UserInfoHeaders), effect_http_1.Api.setResponseBody(userinfo_1.UserInfoSuccess));
var userInfoSpec = effect_http_1.ApiGroup.make('User Info Routes', {
    description: 'User Info Routes',
}).pipe(effect_http_1.ApiGroup.addEndpoint(UserInfoGet));
exports.userInfoSpec = userInfoSpec;
