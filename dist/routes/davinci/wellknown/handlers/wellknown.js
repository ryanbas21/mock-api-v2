"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.wellKnownEndpointsHandler = exports.wellKnownOpenIDHandler = void 0;
var effect_1 = require("effect");
var effect_http_1 = require("effect-http");
var wellknown_1 = require("../responses/wellknown");
var spec_1 = require("../spec");
var api = effect_http_1.Api.make().pipe(effect_http_1.Api.addGroup(spec_1.wellKnownSpec));
var wellKnownEndpointsHandler = effect_http_1.RouterBuilder.handler(api, 'WellKnown Endpoints', function (req) { return effect_1.Effect.succeed(wellknown_1.WellKnownEndpointsResponse); });
exports.wellKnownEndpointsHandler = wellKnownEndpointsHandler;
var wellKnownOpenIDHandler = effect_http_1.RouterBuilder.handler(api, 'WellKnown OpenId Configuration', function () { return effect_1.Effect.succeed(wellknown_1.wellKnownResponse); });
exports.wellKnownOpenIDHandler = wellKnownOpenIDHandler;
