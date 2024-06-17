"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var effect_http_1 = require("effect-http");
var platform_node_1 = require("@effect/platform-node");
var effect_http_node_1 = require("effect-http-node");
var spec_1 = require("./routes/healthcheck/spec");
var authorize_1 = require("./routes/davinci/authorize/handlers/authorize");
var healthcheck_1 = require("./routes/healthcheck/handlers/healthcheck");
var spec_2 = require("./routes/davinci/authorize/spec");
var spec_3 = require("./routes/davinci/userinfo/spec");
var spec_4 = require("./routes/davinci/revoke/spec");
var spec_5 = require("./routes/davinci/capabilities/spec");
var spec_6 = require("./routes/davinci/tokens/spec");
var spec_7 = require("./routes/davinci/wellknown/spec");
var wellknown_1 = require("./routes/davinci/wellknown/handlers/wellknown");
var tokens_1 = require("./routes/davinci/tokens/handlers/tokens");
var revoke_1 = require("./routes/davinci/revoke/handlers/revoke");
var userinfo_1 = require("./routes/davinci/userinfo/handlers/userinfo");
var capabilities_1 = require("./routes/davinci/capabilities/handlers/capabilities");
var authenticate_1 = require("./routes/am/authenticate/handlers/authenticate");
var spec_8 = require("./routes/am/authenticate/spec");
var Middlewares_1 = require("effect-http/Middlewares");
var api = effect_http_1.Api.make().pipe(effect_http_1.Api.addGroup(spec_8.authenticateSpec), effect_http_1.Api.addGroup(spec_2.authorizeSpec), effect_http_1.Api.addGroup(spec_3.userInfoSpec), effect_http_1.Api.addGroup(spec_4.revokeSpec), effect_http_1.Api.addGroup(spec_6.tokensSpec), effect_http_1.Api.addGroup(spec_5.capabilitiesSpec), effect_http_1.Api.addGroup(spec_7.wellKnownSpec), effect_http_1.Api.addEndpoint(spec_1.healthCheckSpec));
var app = effect_http_1.RouterBuilder.make(api).pipe(
// AM Handlers
effect_http_1.RouterBuilder.handle(authenticate_1.authenticateHandler), 
// PingOne Handlers
effect_http_1.RouterBuilder.handle(authorize_1.authorizeHandler), effect_http_1.RouterBuilder.handle(capabilities_1.capabilitiesHandler), effect_http_1.RouterBuilder.handle(userinfo_1.userInfoHandler), effect_http_1.RouterBuilder.handle(tokens_1.tokensHandler), effect_http_1.RouterBuilder.handle(revoke_1.revokeHandler), effect_http_1.RouterBuilder.handle(wellknown_1.wellKnownEndpointsHandler), effect_http_1.RouterBuilder.handle(wellknown_1.wellKnownOpenIDHandler), effect_http_1.RouterBuilder.handle(healthcheck_1.healthCheckHandler), effect_http_1.RouterBuilder.build);
app.pipe((0, Middlewares_1.cors)({
    allowedMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    credentials: true,
    allowedOrigins: ['http://localhost:8443', 'https://localhost:8443'],
}), effect_http_node_1.NodeServer.listen({ port: 3000 }), platform_node_1.NodeRuntime.runMain);
