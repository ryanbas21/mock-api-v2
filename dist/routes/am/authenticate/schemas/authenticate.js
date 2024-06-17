"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Callbacks = exports.AuthenticateCallbacks = exports.AuthenticateHeaders = exports.AuthenticateQueryParams = void 0;
var schema_1 = require("@effect/schema");
var AuthenticateQueryParams = schema_1.Schema.Struct({
    authIndexType: schema_1.Schema.Literal('service'),
    authIndexValue: schema_1.Schema.Union(schema_1.Schema.Literal('TwoStepLogin'), schema_1.Schema.Literal('UsernamePassword')),
});
exports.AuthenticateQueryParams = AuthenticateQueryParams;
// const Registration = Schema.Struct({
//   name: Schema.String,
//   value: Schema.Struct({
//     policyRequirements: Schema.Array(
//       Schema.Union(
//         Schema.Literal('REQUIRED'),
//         Schema.Literal('MIN_LENGTH'),
//         Schema.Literal('VALID_TYPE'),
//         Schema.Literal('VALID_USERNAME'),
//         Schema.Literal('CANNOT_CONTAIN_CHARACTERS'),
//         Schema.Literal('MAX_LENGTH'),
//       ),
//     ),
//     fallbackPolicies: Schema.NullOr(
//       Schema.Array(
//         Schema.Union(
//           Schema.Literal('REQUIRED'),
//           Schema.Literal('MIN_LENGTH'),
//           Schema.Literal('VALID_TYPE'),
//           Schema.Literal('VALID_USERNAME'),
//           Schema.Literal('CANNOT_CONTAIN_CHARACTERS'),
//           Schema.Literal('MAX_LENGTH'),
//         ),
//       ),
//     ),
//     policies: Schema.Array(
//       Schema.Struct({
//         policyRequirements: Schema.UndefinedOr(
//           Schema.Array(
//             Schema.Union(
//               Schema.Literal('REQUIRED'),
//               Schema.Literal('MIN_LENGTH'),
//               Schema.Literal('VALID_TYPE'),
//               Schema.Literal('VALID_USERNAME'),
//               Schema.Literal('CANNOT_CONTAIN_CHARACTERS'),
//               Schema.Literal('MAX_LENGTH'),
//             ),
//           ),
//         ),
//         policyId: Schema.Union(
//           Schema.Literal('required'),
//           Schema.Literal('minimum-length'),
//           Schema.Literal('not-empty'),
//           Schema.Literal('valid-type'),
//           Schema.Literal('valid-username'),
//           Schema.Literal('cannot-contain-characters'),
//           Schema.Literal('maximum-length'),
//         ),
//         params: Schema.UndefinedOr(
//           Schema.Struct({
//             minLength: Schema.NumberFromString,
//           }),
//         ),
//       }),
//     ),
//   }),
// });
var Callbacks = schema_1.Schema.Array(schema_1.Schema.Struct({
    type: schema_1.Schema.Literal('NameCallback', 'PasswordCallback', 'ConfirmationCallback', 'ChoiceCallback', 'TextOutputCallback', 'HiddenValue', 'ValidatedCreateUsernameCallback', 'ValidatedCreatePasswordCallback', 'ValidatedCreateEmailCallback', 'ValidatedCreatePhoneCallback', 'ValidatedCreateKbaCallback', 'ValidatedCreateAddressCallback', 'ValidatedCreateNameCallback', 'ValidatedCreateUsernameCallback', 'ValidatedCreatePasswordCallback', 'StringAttributeInputCallback', 'BooleanAttributeInputCallback', 'NumberAttributeInputCallback', 'KbaCreateCallback', 'TermsAndConditionsCallback'),
    output: schema_1.Schema.Array(schema_1.Schema.Union(schema_1.Schema.Struct({
        name: schema_1.Schema.String,
        value: schema_1.Schema.Union(schema_1.Schema.String, schema_1.Schema.Boolean, schema_1.Schema.NumberFromString, schema_1.Schema.Struct({})),
    }))),
    input: schema_1.Schema.Array(schema_1.Schema.Union(schema_1.Schema.Struct({
        name: schema_1.Schema.String,
        value: schema_1.Schema.Union(schema_1.Schema.String.pipe(schema_1.Schema.minLength(1))),
    }))),
}));
exports.Callbacks = Callbacks;
var AuthenticateCallbacksWithStage = schema_1.Schema.Struct({
    authId: schema_1.Schema.String,
    header: schema_1.Schema.UndefinedOr(schema_1.Schema.String),
    callbacks: Callbacks,
    stage: schema_1.Schema.String,
});
var AuthenticateCallbacksNoStage = AuthenticateCallbacksWithStage.pipe(schema_1.Schema.omit('stage'));
var AuthenticateCallbacks = schema_1.Schema.Union(AuthenticateCallbacksWithStage, AuthenticateCallbacksNoStage, schema_1.Schema.NullOr(schema_1.Schema.Struct({})));
exports.AuthenticateCallbacks = AuthenticateCallbacks;
var AuthenticateHeaders = schema_1.Schema.Struct({
    'set-cookie': schema_1.Schema.optional(schema_1.Schema.Array(schema_1.Schema.String)),
});
exports.AuthenticateHeaders = AuthenticateHeaders;
