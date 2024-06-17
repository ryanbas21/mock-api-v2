"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.healthCheckSpec = void 0;
var schema_1 = require("@effect/schema");
var effect_http_1 = require("effect-http");
var HealthCheckSuccess = schema_1.Schema.Struct({ success: schema_1.Schema.Boolean });
var healthCheckSpec = effect_http_1.Api.get('HealthCheck', '/healthcheck').pipe(effect_http_1.Api.setResponseBody(HealthCheckSuccess));
exports.healthCheckSpec = healthCheckSpec;
