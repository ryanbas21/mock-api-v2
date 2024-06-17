// import { Callback } from './types/callback';
// export const RegistrationCallback = [
//   {
//     type: 'ValidatedCreateUsernameCallback',
//     output: [
//       {
//         name: 'policies',
//         value: {
//           policyRequirements: [
//             'REQUIRED',
//             'MIN_LENGTH',
//             'VALID_TYPE',
//             'VALID_USERNAME',
//             'CANNOT_CONTAIN_CHARACTERS',
//             'MAX_LENGTH',
//           ],
//           fallbackPolicies: null,
//           name: 'userName',
//           policies: [
//             {
//               policyRequirements: ['REQUIRED'],
//               policyId: 'required',
//             },
//             {
//               policyRequirements: ['REQUIRED'],
//               policyId: 'not-empty',
//             },
//             {
//               policyRequirements: ['MIN_LENGTH'],
//               policyId: 'minimum-length',
//               params: {
//                 minLength: 1,
//               },
//             },
//             {
//               policyRequirements: ['VALID_TYPE'],
//               policyId: 'valid-type',
//               params: {
//                 types: ['string'],
//               },
//             },
//             {
//               policyId: 'valid-username',
//               policyRequirements: ['VALID_USERNAME'],
//             },
//             {
//               params: {
//                 forbiddenChars: ['/'],
//               },
//               policyId: 'cannot-contain-characters',
//               policyRequirements: ['CANNOT_CONTAIN_CHARACTERS'],
//             },
//             {
//               params: {
//                 minLength: 1,
//               },
//               policyId: 'minimum-length',
//               policyRequirements: ['MIN_LENGTH'],
//             },
//             {
//               params: {
//                 maxLength: 255,
//               },
//               policyId: 'maximum-length',
//               policyRequirements: ['MAX_LENGTH'],
//             },
//           ],
//           conditionalPolicies: null,
//         },
//       },
//       {
//         name: 'failedPolicies',
//         value: [
//           '{ "policyRequirement": "REQUIRED" }',
//           '{ "params": { "minLength": 1 }, "policyRequirement": "MIN_LENGTH" }',
//           '{ "params": { "minLength": 1 }, "policyRequirement": "MIN_LENGTH" }',
//           '{ "params": { "maxLength": 255 }, "policyRequirement": "MAX_LENGTH" }',
//         ],
//       },
//       {
//         name: 'validateOnly',
//         value: false,
//       },
//       {
//         name: 'prompt',
//         value: 'Username',
//       },
//     ],
//     input: [
//       {
//         name: 'IDToken1',
//         value: '',
//       },
//       {
//         name: 'IDToken1validateOnly',
//         value: false,
//       },
//     ],
//     _id: 10,
//   },
//   {
//     type: 'StringAttributeInputCallback',
//     output: [
//       {
//         name: 'name',
//         value: 'givenName',
//       },
//       {
//         name: 'prompt',
//         value: 'First Name',
//       },
//       {
//         name: 'required',
//         value: true,
//       },
//       {
//         name: 'policies',
//         value: {
//           policyRequirements: ['REQUIRED', 'VALID_TYPE'],
//           fallbackPolicies: null,
//           name: 'givenName',
//           policies: [
//             {
//               policyRequirements: ['REQUIRED'],
//               policyId: 'required',
//             },
//             {
//               policyRequirements: ['VALID_TYPE'],
//               policyId: 'valid-type',
//               params: {
//                 types: ['string'],
//               },
//             },
//           ],
//           conditionalPolicies: null,
//         },
//       },
//       {
//         name: 'failedPolicies',
//         value: [],
//       },
//       {
//         name: 'validateOnly',
//         value: false,
//       },
//       {
//         name: 'value',
//         value: '',
//       },
//     ],
//     input: [
//       {
//         name: 'IDToken2',
//         value: '',
//       },
//       {
//         name: 'IDToken2validateOnly',
//         value: false,
//       },
//     ],
//     _id: 11,
//   },
//   {
//     type: 'StringAttributeInputCallback',
//     output: [
//       {
//         name: 'name',
//         value: 'sn',
//       },
//       {
//         name: 'prompt',
//         value: 'Last Name',
//       },
//       {
//         name: 'required',
//         value: true,
//       },
//       {
//         name: 'policies',
//         value: {
//           policyRequirements: ['REQUIRED', 'VALID_TYPE'],
//           fallbackPolicies: null,
//           name: 'sn',
//           policies: [
//             {
//               policyRequirements: ['REQUIRED'],
//               policyId: 'required',
//             },
//             {
//               policyRequirements: ['VALID_TYPE'],
//               policyId: 'valid-type',
//               params: {
//                 types: ['string'],
//               },
//             },
//           ],
//           conditionalPolicies: null,
//         },
//       },
//       {
//         name: 'failedPolicies',
//         value: [],
//       },
//       {
//         name: 'validateOnly',
//         value: false,
//       },
//       {
//         name: 'value',
//         value: '',
//       },
//     ],
//     input: [
//       {
//         name: 'IDToken3',
//         value: '',
//       },
//       {
//         name: 'IDToken3validateOnly',
//         value: false,
//       },
//     ],
//     _id: 12,
//   },
//   {
//     type: 'StringAttributeInputCallback',
//     output: [
//       {
//         name: 'name',
//         value: 'mail',
//       },
//       {
//         name: 'prompt',
//         value: 'Email Address',
//       },
//       {
//         name: 'required',
//         value: true,
//       },
//       {
//         name: 'policies',
//         value: {
//           policyRequirements: [
//             'REQUIRED',
//             'VALID_TYPE',
//             'VALID_EMAIL_ADDRESS_FORMAT',
//           ],
//           fallbackPolicies: null,
//           name: 'mail',
//           policies: [
//             {
//               policyRequirements: ['REQUIRED'],
//               policyId: 'required',
//             },
//             {
//               policyRequirements: ['VALID_TYPE'],
//               policyId: 'valid-type',
//               params: {
//                 types: ['string'],
//               },
//             },
//             {
//               policyId: 'valid-email-address-format',
//               policyRequirements: ['VALID_EMAIL_ADDRESS_FORMAT'],
//             },
//           ],
//           conditionalPolicies: null,
//         },
//       },
//       {
//         name: 'failedPolicies',
//         value: [],
//       },
//       {
//         name: 'validateOnly',
//         value: false,
//       },
//       {
//         name: 'value',
//         value: '',
//       },
//     ],
//     input: [
//       {
//         name: 'IDToken4',
//         value: '',
//       },
//       {
//         name: 'IDToken4validateOnly',
//         value: false,
//       },
//     ],
//     _id: 13,
//   },
//   {
//     type: 'BooleanAttributeInputCallback',
//     output: [
//       {
//         name: 'name',
//         value: 'preferences/marketing',
//       },
//       {
//         name: 'prompt',
//         value: 'Send me special offers and services',
//       },
//       {
//         name: 'required',
//         value: true,
//       },
//       {
//         name: 'policies',
//         value: {},
//       },
//       {
//         name: 'failedPolicies',
//         value: [],
//       },
//       {
//         name: 'validateOnly',
//         value: false,
//       },
//       {
//         name: 'value',
//         value: false,
//       },
//     ],
//     input: [
//       {
//         name: 'IDToken5',
//         value: false,
//       },
//       {
//         name: 'IDToken5validateOnly',
//         value: false,
//       },
//     ],
//     _id: 14,
//   },
//   {
//     type: 'BooleanAttributeInputCallback',
//     output: [
//       {
//         name: 'name',
//         value: 'preferences/updates',
//       },
//       {
//         name: 'prompt',
//         value: 'Send me news and updates',
//       },
//       {
//         name: 'required',
//         value: true,
//       },
//       {
//         name: 'policies',
//         value: {},
//       },
//       {
//         name: 'failedPolicies',
//         value: [],
//       },
//       {
//         name: 'validateOnly',
//         value: false,
//       },
//       {
//         name: 'value',
//         value: false,
//       },
//     ],
//     input: [
//       {
//         name: 'IDToken6',
//         value: false,
//       },
//       {
//         name: 'IDToken6validateOnly',
//         value: false,
//       },
//     ],
//     _id: 15,
//   },
//   {
//     type: 'ValidatedCreatePasswordCallback',
//     output: [
//       {
//         name: 'echoOn',
//         value: false,
//       },
//       {
//         name: 'policies',
//         value: {
//           policyRequirements: ['VALID_TYPE'],
//           fallbackPolicies: null,
//           name: 'password',
//           policies: [
//             {
//               policyRequirements: ['VALID_TYPE'],
//               policyId: 'valid-type',
//               params: {
//                 types: ['string'],
//               },
//             },
//           ],
//           conditionalPolicies: null,
//         },
//       },
//       {
//         name: 'failedPolicies',
//         value: [
//           '{ "policyRequirement": "LENGTH_BASED", "params": { "max-password-length": 0, "min-password-length": 4 } }',
//         ],
//       },
//       {
//         name: 'validateOnly',
//         value: true,
//       },
//       {
//         name: 'prompt',
//         value: 'Password',
//       },
//     ],
//     input: [
//       {
//         name: 'IDToken7',
//         value: '',
//       },
//       {
//         name: 'IDToken7validateOnly',
//         value: true,
//       },
//     ],
//   },
//   {
//     type: 'KbaCreateCallback',
//     output: [
//       {
//         name: 'prompt',
//         value: 'Select a security question',
//       },
//       {
//         name: 'predefinedQuestions',
//         value: ["What's your favorite color?", 'Who was your first employer?'],
//       },
//       {
//         name: 'allowUserDefinedQuestions',
//         value: true,
//       },
//     ],
//     input: [
//       {
//         name: 'IDToken8question',
//         value: '',
//       },
//       {
//         name: 'IDToken8answer',
//         value: '',
//       },
//     ],
//   },
//   {
//     type: 'KbaCreateCallback',
//     output: [
//       {
//         name: 'prompt',
//         value: 'Select a security question',
//       },
//       {
//         name: 'predefinedQuestions',
//         value: ["What's your favorite color?", 'Who was your first employer?'],
//       },
//       {
//         name: 'allowUserDefinedQuestions',
//         value: true,
//       },
//     ],
//     input: [
//       {
//         name: 'IDToken9question',
//         value: '',
//       },
//       {
//         name: 'IDToken9answer',
//         value: '',
//       },
//     ],
//   },
//   {
//     type: 'TermsAndConditionsCallback',
//     output: [
//       {
//         name: 'version',
//         value: '0.0',
//       },
//       {
//         name: 'terms',
//         value:
//           'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
//       },
//       {
//         name: 'createDate',
//         value: '2019-10-28T04:20:11.320Z',
//       },
//     ],
//     input: [
//       {
//         name: 'IDToken10',
//         value: false,
//       },
//     ],
//   },
// ] as Callback;
