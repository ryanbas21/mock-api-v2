"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authorize = void 0;
var schema_1 = require("@effect/schema");
var effect_1 = require("effect");
var effect_http_1 = require("effect-http");
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
var DavinciAuthorizeSuccess = schema_1.Schema.Struct({}, {
    "interactionId": "1708b388-e20a-476e-b7a2-2dbcf1eea460",
    "connectorId": "api",
    "interactionToken": "95329134ad148a4376bb09d569ef3abc52e000e456674ea2ab42e2161b0d6ef073899a43653e63fb8ca73166849365b4615854834cff52b4a78006e33a9d96f9e465f86c9a8c7ed688cf349b311ae24d983dcd2aa17309886cb0ad47433ddd4a6c05434475eef98c76b6fa9cc964f7fb1a9db001824c31c54f0ed516fec08023",
    "success": true,
    "startUiSubFlow": true,
    "_links": {
        "next": {
            "href": "https://auth.pingone.ca/02fb4743-189a-4bc7-9d6c-a919edfe6447/davinci/connections/867ed4363b2bc21c860085ad2baa817d/capabilities/customHTMLTemplate"
        }
    },
    "eventName": "continue",
    "isResponseCompatibleWithMobileAndWebSdks": true,
    "id": "tavl3e1h2q",
    "companyId": "02fb4743-189a-4bc7-9d6c-a919edfe6447",
    "flowId": "f17221dd5a67fef0382db1e77791d436",
    "connectionId": "867ed4363b2bc21c860085ad2baa817d",
    "capabilityName": "customHTMLTemplate",
    "formData": {
        "value": {
            "protectsdk": ""
        }
    },
    "form": {
        "name": "Start Node",
        "description": "",
        "category": "CUSTOM_HTML",
        "components": {
            "fields": [{
                    "type": "TEXT",
                    "key": "protectsdk",
                    "label": "Protect Payload"
                }]
        }
    }
});
;
var authorize = (0, effect_1.pipe)(effect_http_1.ApiGroup.addEndpoint((0, effect_1.pipe)(effect_http_1.Api.post("DavinciAuthorize", "/davinci/authorize"), effect_http_1.Api.setRequestQuery(DavinciAuthorizeHeaders), effect_http_1.Api.setResponseBody(DavinciAuthorizeSuccess))));
exports.authorize = authorize;
