import { Schema } from '@effect/schema';

const AuthenticateQueryParams = Schema.Struct({
  authIndexType: Schema.Literal('service'),
  authIndexValue: Schema.Union(
    Schema.Literal('TwoStepLogin'),
    Schema.Literal('UsernamePassword'),
    // Schema.Literal('Registration'),
  ),
});
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
const Callbacks = Schema.Array(
  Schema.Struct({
    type: Schema.Literal(
      'NameCallback',
      'PasswordCallback',
      'ConfirmationCallback',
      'ChoiceCallback',
      'TextOutputCallback',
      'HiddenValue',
      'ValidatedCreateUsernameCallback',
      'ValidatedCreatePasswordCallback',
      'ValidatedCreateEmailCallback',
      'ValidatedCreatePhoneCallback',
      'ValidatedCreateKbaCallback',
      'ValidatedCreateAddressCallback',
      'ValidatedCreateNameCallback',
      'ValidatedCreateUsernameCallback',
      'ValidatedCreatePasswordCallback',
      'StringAttributeInputCallback',
      'BooleanAttributeInputCallback',
      'NumberAttributeInputCallback',
      'KbaCreateCallback',
      'TermsAndConditionsCallback',
    ),
    output: Schema.Array(
      Schema.Union(
        Schema.Struct({
          name: Schema.String,
          value: Schema.Union(
            Schema.String,
            Schema.Boolean,
            Schema.NumberFromString,
            Schema.Struct({}),
          ),
        }),
        // Registration,
      ),
    ),
    input: Schema.Array(
      Schema.Union(
        Schema.Struct({
          name: Schema.String,
          value: Schema.Union(Schema.String.pipe(Schema.minLength(1))),
        }),
        // Registration,
      ),
    ),
  }),
);
const AuthenticateCallbacksWithStage = Schema.Struct({
  authId: Schema.String,
  header: Schema.UndefinedOr(Schema.String),
  callbacks: Callbacks,
  stage: Schema.String,
});

const AuthenticateCallbacksNoStage = AuthenticateCallbacksWithStage.pipe(
  Schema.omit('stage'),
);

const AuthenticateCallbacks = Schema.Union(
  AuthenticateCallbacksWithStage,
  AuthenticateCallbacksNoStage,
  Schema.NullOr(Schema.Struct({})),
);

const AuthenticateHeaders = Schema.Struct({
  'set-cookie': Schema.optional(Schema.Array(Schema.String)),
});

export {
  AuthenticateQueryParams,
  AuthenticateHeaders,
  AuthenticateCallbacks,
  Callbacks,
};
