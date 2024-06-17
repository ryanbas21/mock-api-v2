"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.wellKnownSpec = void 0;
var effect_http_1 = require("effect-http");
var well_known_1 = require("./schemas/well-known");
var schema_1 = require("@effect/schema");
//auth.pingone.ca/02fb4743-189a-4bc7-9d6c-a919edfe6447/as/.well-known/openid-configuration
var wellKnownOpenId = effect_http_1.Api.get('WellKnown OpenId Configuration', '/:envid/as/.well-known/openid-configuration').pipe(effect_http_1.Api.setRequestPath(schema_1.Schema.Struct({ envid: schema_1.Schema.String })), effect_http_1.Api.setResponseBody(well_known_1.WellKnownResponseSchema));
var wellKnownEndpoints = effect_http_1.Api.get('WellKnown Endpoints', '/:envid/as/.well-known/ping-endpoints.json').pipe(effect_http_1.Api.setRequestPath(schema_1.Schema.Struct({ envid: schema_1.Schema.String })), effect_http_1.Api.setResponseBody(well_known_1.WellKnownEndpointsResponseSchema));
var wellKnownSpec = effect_http_1.ApiGroup.make('WellKnown API', {
    description: 'Davinci Capabilities',
}).pipe(effect_http_1.ApiGroup.addEndpoint(wellKnownOpenId), effect_http_1.ApiGroup.addEndpoint(wellKnownEndpoints));
exports.wellKnownSpec = wellKnownSpec;
