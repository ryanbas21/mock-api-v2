"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.revokeSpec = void 0;
var effect_http_1 = require("effect-http");
var revoke_1 = require("./schemas/revoke");
var schema_1 = require("@effect/schema");
var RevokePost = effect_http_1.Api.post('DavinciRevoke', '/:envid/as/revoke').pipe(effect_http_1.Api.setRequestPath(schema_1.Schema.Struct({ envid: schema_1.Schema.String })), effect_http_1.Api.setRequestHeaders(revoke_1.RevokeHeadersSchema));
var revokeSpec = effect_http_1.ApiGroup.make('Davinci Revoke', {
    description: 'Davinci Revoke',
}).pipe(effect_http_1.ApiGroup.addEndpoint(RevokePost));
exports.revokeSpec = revokeSpec;
