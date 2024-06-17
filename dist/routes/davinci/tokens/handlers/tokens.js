"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tokensHandler = void 0;
var effect_1 = require("effect");
var effect_http_1 = require("effect-http");
var tokens_1 = require("../responses/tokens");
var spec_1 = require("../spec");
var tokensHandler = effect_http_1.RouterBuilder.handler(effect_http_1.Api.make().pipe(effect_http_1.Api.addGroup(spec_1.tokensSpec)), 'DavinciTokens', function (req) { return effect_1.Effect.succeed(tokens_1.tokensResponse); });
exports.tokensHandler = tokensHandler;
