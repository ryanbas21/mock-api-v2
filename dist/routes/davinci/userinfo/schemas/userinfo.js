"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserInfoSuccess = exports.UserInfoHeaders = void 0;
var schema_1 = require("@effect/schema");
var UserInfoHeaders = schema_1.Schema.Struct({
    Authorization: schema_1.Schema.String,
});
exports.UserInfoHeaders = UserInfoHeaders;
var UserInfoSuccess = schema_1.Schema.Struct({
    sub: schema_1.Schema.String,
    preferred_username: schema_1.Schema.String,
    given_name: schema_1.Schema.String,
    updated_at: schema_1.Schema.Int,
    family_name: schema_1.Schema.String,
    email: schema_1.Schema.String,
    env: schema_1.Schema.String,
    org: schema_1.Schema.String,
    'p1.region': schema_1.Schema.String,
});
exports.UserInfoSuccess = UserInfoSuccess;
