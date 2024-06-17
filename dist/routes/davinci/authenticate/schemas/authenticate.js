"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DavinciAuthenticateResponseBody = exports.DavinciAuthenticateRequestBody = void 0;
var schema_1 = require("@effect/schema");
var DavinciAuthenticateRequestBody = schema_1.Schema.Struct({
    id: schema_1.Schema.String,
    eventName: schema_1.Schema.String,
    interactionId: schema_1.Schema.String,
    parameters: schema_1.Schema.Struct({
        eventType: schema_1.Schema.String,
        data: schema_1.Schema.Struct({
            actionKey: schema_1.Schema.String,
            formData: schema_1.Schema.Struct({
                protectsdk: schema_1.Schema.String,
            }),
        }),
    }),
});
exports.DavinciAuthenticateRequestBody = DavinciAuthenticateRequestBody;
var DavinciAuthenticateResponseBody = schema_1.Schema.Struct({
    interactionId: schema_1.Schema.String,
    interactionToken: schema_1.Schema.String,
    _links: schema_1.Schema.Struct({
        next: schema_1.Schema.Struct({
            href: schema_1.Schema.String,
        }),
    }),
    eventName: schema_1.Schema.String,
    isResponseCompatibleWithMobileAndWebSdks: schema_1.Schema.Boolean,
    id: schema_1.Schema.String,
    companyId: schema_1.Schema.String,
    flowId: schema_1.Schema.String,
    connectionId: schema_1.Schema.String,
    capabilityName: schema_1.Schema.String,
    formData: schema_1.Schema.Struct({
        value: schema_1.Schema.Struct({
            username: schema_1.Schema.String,
            password: schema_1.Schema.String,
        }),
    }),
    form: schema_1.Schema.Struct({
        name: schema_1.Schema.String,
        description: schema_1.Schema.String,
        category: schema_1.Schema.String,
        components: schema_1.Schema.Struct({
            fields: schema_1.Schema.Array(schema_1.Schema.Struct({
                type: schema_1.Schema.String,
                key: schema_1.Schema.String,
                label: schema_1.Schema.String,
            })),
        }),
    }),
});
exports.DavinciAuthenticateResponseBody = DavinciAuthenticateResponseBody;
var DavinciAuthenticateRequest = schema_1.Schema.Struct({
    interactionId: schema_1.Schema.String,
    interactionToken: schema_1.Schema.String,
    _links: schema_1.Schema.Struct({
        next: schema_1.Schema.Struct({
            href: schema_1.Schema.String,
        }),
    }),
    eventName: schema_1.Schema.String,
    isResponseCompatibleWithMobileAndWebSdks: schema_1.Schema.Boolean,
    id: schema_1.Schema.String,
    companyId: schema_1.Schema.String,
    flowId: schema_1.Schema.String,
    connectionId: schema_1.Schema.String,
    capabilityName: schema_1.Schema.String,
    formData: schema_1.Schema.Struct({
        value: schema_1.Schema.Struct({
            username: schema_1.Schema.String,
            password: schema_1.Schema.String,
        }),
    }),
    form: schema_1.Schema.Struct({
        name: schema_1.Schema.String,
        description: schema_1.Schema.String,
        category: schema_1.Schema.String,
        components: schema_1.Schema.Struct({
            fields: schema_1.Schema.Array(schema_1.Schema.Struct({
                type: schema_1.Schema.String,
                key: schema_1.Schema.String,
                label: schema_1.Schema.String,
            })),
        }),
    }),
});
