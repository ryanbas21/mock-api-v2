"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DavinciAuthorizeSuccess = exports.DavinciAuthorizeHeaders = void 0;
var schema_1 = require("@effect/schema");
var DavinciAuthorizeHeaders = schema_1.Schema.Struct({
    response_mode: schema_1.Schema.String,
    client_id: schema_1.Schema.String,
    redirect_uri: schema_1.Schema.String,
    response_type: schema_1.Schema.String,
    scope: schema_1.Schema.String,
    state: schema_1.Schema.String,
    code: schema_1.Schema.String,
    code_challenge: schema_1.Schema.String,
    code_challenge_method: schema_1.Schema.String,
});
exports.DavinciAuthorizeHeaders = DavinciAuthorizeHeaders;
var createBrand = function (id) { return schema_1.Schema.String; }; //.pipe(Schema.brand(id))
var DavinciAuthorizeSuccess = schema_1.Schema.Struct({
    interactionId: createBrand("InteractionId"),
    "connectorId": createBrand("ConnectorId"),
    "interactionToken": createBrand("interactionToken"),
    "success": schema_1.Schema.Boolean,
    "startUiSubFlow": schema_1.Schema.Boolean,
    "_links": schema_1.Schema.Struct({
        "next": schema_1.Schema.Struct({
            "href": createBrand("NextHref"),
        })
    }),
    "eventName": schema_1.Schema.String,
    "isResponseCompatibleWithMobileAndWebSdks": schema_1.Schema.Boolean,
    "id": createBrand("id"),
    "companyId": createBrand('companyId'),
    "flowId": createBrand("flowId"),
    "connectionId": createBrand("connectionId"),
    "capabilityName": createBrand('capabilityName'),
    "formData": schema_1.Schema.Struct({
        "value": schema_1.Schema.Struct({
            "protectsdk": schema_1.Schema.String,
        })
    }),
    "form": schema_1.Schema.Struct({
        "name": schema_1.Schema.String,
        "description": schema_1.Schema.String,
        "category": createBrand('formCategory'),
        "components": schema_1.Schema.Struct({
            "fields": schema_1.Schema.Array(schema_1.Schema.Struct({
                "type": schema_1.Schema.String,
                "key": schema_1.Schema.String,
                "label": schema_1.Schema.String,
            }))
        })
    })
});
exports.DavinciAuthorizeSuccess = DavinciAuthorizeSuccess;
