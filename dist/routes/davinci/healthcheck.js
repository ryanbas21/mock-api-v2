"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.healthcheck = void 0;
var schema_1 = require("@effect/schema");
var effect_1 = require("effect");
var effect_http_1 = require("effect-http");
var HealthCheckSuccess = schema_1.Schema.Struct({ success: schema_1.Schema.Boolean });
var healthcheck = (0, effect_1.pipe)(effect_http_1.ApiGroup.make("Server Health", {
    description: "Server Health Check",
}), effect_http_1.ApiGroup.addEndpoint((0, effect_1.pipe)(effect_http_1.Api.post("Davinci HealthCheck", "/healthcheck"), effect_http_1.Api.setResponseBody(HealthCheckSuccess))));
exports.healthcheck = healthcheck;
