"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsernamePasswordCallbackResponse = void 0;
exports.UsernamePasswordCallbackResponse = [
    {
        type: 'NameCallback',
        output: [
            {
                name: 'prompt',
                value: 'User Name',
            },
        ],
        input: [
            {
                name: 'IDToken1',
                value: '',
            },
        ],
    },
    {
        type: 'PasswordCallback',
        output: [
            {
                name: 'prompt',
                value: 'Password',
            },
        ],
        input: [
            {
                name: 'IDToken2',
                value: '',
            },
        ],
    },
];
