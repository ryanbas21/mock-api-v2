"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.capabilitiesSpec = void 0;
var schema_1 = require("@effect/schema");
var effect_http_1 = require("effect-http");
var capabilities_1 = require("./schemas/capabilities");
var capabilitiesPost = effect_http_1.Api.post('Capabilities', '/:envid/davinci/connections/:policyid/capabilities/customHTMLTemplate').pipe(effect_http_1.Api.setRequestPath(schema_1.Schema.Struct({ envid: schema_1.Schema.String, policyid: schema_1.Schema.String })), effect_http_1.Api.setRequestBody(capabilities_1.CapabilitiesRequestBody), effect_http_1.Api.setResponseBody(capabilities_1.CapabilitiesResponses));
var capabilitiesSpec = effect_http_1.ApiGroup.make('Davinci Capabilities', {
    description: 'Davinci Capabilities',
}).pipe(effect_http_1.ApiGroup.addEndpoint(capabilitiesPost));
exports.capabilitiesSpec = capabilitiesSpec;
