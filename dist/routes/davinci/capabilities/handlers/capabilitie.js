"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.capabilitiesHandler = void 0;
var effect_1 = require("effect");
var spec_1 = require("../spec");
var capabilitiesHandler = function () {
    return effect_1.Effect.succeed(spec_1.capabilitiesSpec);
};
exports.capabilitiesHandler = capabilitiesHandler;
