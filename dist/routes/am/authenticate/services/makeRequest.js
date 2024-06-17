"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AMRequestService = exports.AMRequestServiceTest = void 0;
var effect_1 = require("effect");
var journeyMap_1 = require("../handlers/journeyMap");
var errors_1 = require("../errors");
var platform_1 = require("@effect/platform");
var AMRequestService = effect_1.Context.GenericTag('AMRequestService');
exports.AMRequestService = AMRequestService;
var AMRequestServiceTest = effect_1.Layer.effect(AMRequestService, effect_1.Effect.map(AMRequestService, function () {
    return AMRequestService.of({
        fetch: function (req) {
            return (0, effect_1.pipe)(checkForSetCookie(req), effect_1.Effect.flatMap(function (index) {
                return mapJourneyToResponse(req.query.authIndexValue, index);
            }));
        },
    });
}));
exports.AMRequestServiceTest = AMRequestServiceTest;
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
function mapJourneyToResponse(journeyName, index) {
    if (index === void 0) { index = 0; }
    var step = journeyMap_1.journeyMap[journeyName];
    return effect_1.Effect.try({
        try: function () { return callbacksToResponse(step, index); },
        catch: function () { return new errors_1.MappingJourneyError(); },
    });
}
