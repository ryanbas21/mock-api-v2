import { Callback } from './types/callback';

export const UsernamePasswordCallbackResponse = [
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
] as Callback[];
