"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.healthCheckHandler = void 0;
var effect_1 = require("effect");
var effect_http_1 = require("effect-http");
var spec_1 = require("../spec");
var healthCheckHandler = effect_http_1.RouterBuilder.handler(effect_http_1.Api.make().pipe(effect_http_1.Api.addEndpoint(spec_1.healthCheckSpec)), 'HealthCheck', function (req) { return effect_1.Effect.succeed({ success: true }); });
exports.healthCheckHandler = healthCheckHandler;
