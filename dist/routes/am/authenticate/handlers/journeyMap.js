"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.journeyMap = void 0;
var effect_1 = require("effect");
var UsernamePassword_1 = require("../responses/UsernamePassword");
var UsernameCallback_1 = require("../responses/UsernameCallback");
var PasswordCallback_1 = require("../responses/PasswordCallback");
// import { RegistrationCallback } from '../responses/RegistrationCallback';
var authid_1 = require("../responses/authid");
function makeStep(callbacks) {
    return __assign(__assign({}, authid_1.authId), { callbacks: effect_1.Array.isArray(callbacks) ? callbacks : [callbacks] });
}
/*
 * Define Journey nodes in array in order.
 * The journeyIndex cookie will increment through
 * Apply `makeStep` to create a full step.
 */
var journeyMap = {
    UsernamePassword: [UsernamePassword_1.UsernamePasswordCallbackResponse].map(makeStep),
    TwoStepLogin: [UsernameCallback_1.UsernameCallbackResponse, PasswordCallback_1.PasswordCallbackResponse].map(makeStep),
    // Registration: Array.make(RegistrationCallback).map(makeStep),
};
exports.journeyMap = journeyMap;
