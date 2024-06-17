"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.capabilitiesHandler = void 0;
var spec_1 = require("../spec");
var effect_http_1 = require("effect-http");
var effect_1 = require("effect");
var capabilities_1 = require("../responses/capabilities");
var effect_http_2 = require("effect-http");
var capabilitiesApi = effect_http_2.Api.make().pipe(effect_http_2.Api.addGroup(spec_1.capabilitiesSpec));
var capabilitiesHandler = effect_http_1.RouterBuilder.handler(capabilitiesApi, 'Capabilities', function (req) { return effect_1.Effect.succeed(capabilities_1.capabilitiesSuccess); });
exports.capabilitiesHandler = capabilitiesHandler;
