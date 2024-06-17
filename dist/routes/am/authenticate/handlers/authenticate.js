"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticateHandler = void 0;
var effect_1 = require("effect");
var effect_http_1 = require("effect-http");
var spec_1 = require("../spec");
var journeyMap_1 = require("./journeyMap");
var platform_1 = require("@effect/platform");
var errors_1 = require("../errors");
var api = effect_http_1.Api.make().pipe(effect_http_1.Api.addGroup(spec_1.authenticateSpec));
var callbacksToResponse = function (callbacks, index) {
    var body = callbacks[index];
    return {
        status: 200,
        body: body,
        headers: {
            'set-cookie': platform_1.HttpClient.cookies.serializeCookie(platform_1.HttpClient.cookies.unsafeMakeCookie('journeyStepIndex', (index + 1).toString(), {
                httpOnly: true,
                sameSite: 'strict',
                secure: true,
                path: '/',
            })),
        },
    };
};
function mapJourneyToResponse(journeyName, index) {
    if (index === void 0) { index = 0; }
    var step = journeyMap_1.journeyMap[journeyName];
    return effect_1.Effect.try({
        try: function () { return callbacksToResponse(step, index); },
        catch: function () { return new errors_1.MappingJourneyError(); },
    });
}
var checkForSetCookie = function (req) {
    return effect_1.Effect.sync(function () {
        var _a;
        /*
         * This is a terrible function for prototyping using a cookie to manage
         * the journey step index.
         */
        var headersArray = (_a = req.headers['set-cookie']) !== null && _a !== void 0 ? _a : [];
        console.log(headersArray);
        if (headersArray.length === 0) {
            return 0;
        }
        var cookiesParsed = platform_1.HttpServer.cookies.parseHeader(headersArray[0]);
        return parseInt(cookiesParsed['journeyStepIndex']);
    });
};
var authenticateHandler = effect_http_1.RouterBuilder.handler(api, 'AMAuthenticate', function (req) {
    return (0, effect_1.pipe)(checkForSetCookie(req), effect_1.Effect.flatMap(function (index) {
        return mapJourneyToResponse(req.query.authIndexValue, index);
    }));
});
exports.authenticateHandler = authenticateHandler;
