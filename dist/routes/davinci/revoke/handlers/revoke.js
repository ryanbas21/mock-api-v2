"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.revokeHandler = void 0;
var effect_1 = require("effect");
var effect_http_1 = require("effect-http");
var spec_1 = require("../spec");
var revokeHandler = effect_http_1.RouterBuilder.handler(effect_http_1.Api.make().pipe(effect_http_1.Api.addGroup(spec_1.revokeSpec)), 'DavinciRevoke', function (req) { return effect_1.Effect.succeed({}); });
exports.revokeHandler = revokeHandler;
