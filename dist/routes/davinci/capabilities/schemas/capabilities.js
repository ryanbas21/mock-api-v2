"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CapabilitiesResponses = exports.CapabilitiesRequestBody = void 0;
var schema_1 = require("@effect/schema");
var CapabilitiesRequestBody = schema_1.Schema.Struct({
    id: schema_1.Schema.String,
    eventName: schema_1.Schema.String,
    interactionId: schema_1.Schema.String,
    parameters: schema_1.Schema.Struct({
        eventType: schema_1.Schema.String,
        data: schema_1.Schema.Struct({
            actionKey: schema_1.Schema.String,
            formData: schema_1.Schema.Struct({
                username: schema_1.Schema.String,
                password: schema_1.Schema.String,
            }),
        }),
    }),
});
exports.CapabilitiesRequestBody = CapabilitiesRequestBody;
var CapabilitiesResponseBody = schema_1.Schema.Union(schema_1.Schema.Struct({
    id: schema_1.Schema.String,
    eventName: schema_1.Schema.String,
    interactionId: schema_1.Schema.String,
    parameters: schema_1.Schema.Struct({
        eventType: schema_1.Schema.String,
        data: schema_1.Schema.Struct({
            actionKey: schema_1.Schema.String,
            formData: schema_1.Schema.Struct({
                username: schema_1.Schema.String,
                password: schema_1.Schema.String,
            }),
        }),
    }),
}), schema_1.Schema.Struct({ test: schema_1.Schema.String }));
var CapabilitiesSuccessBody = schema_1.Schema.Struct({
    interactionId: schema_1.Schema.String,
    companyId: schema_1.Schema.String,
    connectionId: schema_1.Schema.String,
    connectorId: schema_1.Schema.String,
    id: schema_1.Schema.String,
    capabilityName: schema_1.Schema.String,
    environment: schema_1.Schema.Struct({
        id: schema_1.Schema.String,
    }),
    session: schema_1.Schema.Struct({
        id: schema_1.Schema.String,
    }),
    status: schema_1.Schema.String,
    authorizeResponse: schema_1.Schema.Struct({
        code: schema_1.Schema.String,
        state: schema_1.Schema.String,
    }),
    isResponseCompatibleWithMobileAndWebSdks: schema_1.Schema.Boolean,
    success: schema_1.Schema.Boolean,
    resetCookie: schema_1.Schema.Boolean,
    interactionToken: schema_1.Schema.String,
    subFlowSettings: schema_1.Schema.Struct({
        reactSkUrl: schema_1.Schema.String,
        cssUrl: schema_1.Schema.NullOr(schema_1.Schema.String),
        cssLinks: schema_1.Schema.Array(schema_1.Schema.String),
        jsLinks: schema_1.Schema.Array(schema_1.Schema.String),
        loadingScreenSettings: schema_1.Schema.String,
    }),
});
var CapabilitiesResponses = schema_1.Schema.Union(CapabilitiesResponseBody, CapabilitiesSuccessBody);
exports.CapabilitiesResponses = CapabilitiesResponses;
