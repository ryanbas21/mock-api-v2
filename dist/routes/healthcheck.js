"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.healthCheckGet = void 0;
var schema_1 = require("@effect/schema");
var effect_1 = require("effect");
var effect_http_1 = require("effect-http");
var HealthCheckSuccess = schema_1.Schema.Struct({ success: schema_1.Schema.Boolean });
var healthCheckGet = (0, effect_1.pipe)(effect_http_1.Api.get("HealthCheck", "/healthcheck"), effect_http_1.Api.setResponseBody(HealthCheckSuccess));
exports.healthCheckGet = healthCheckGet;
