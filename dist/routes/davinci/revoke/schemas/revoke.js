"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RevokeHeadersSchema = void 0;
var schema_1 = require("@effect/schema");
var RevokeHeadersSchema = schema_1.Schema.Struct({
    client_id: schema_1.Schema.String,
    token: schema_1.Schema.String,
});
exports.RevokeHeadersSchema = RevokeHeadersSchema;
