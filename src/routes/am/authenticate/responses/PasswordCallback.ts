import { Callback } from './types/callback';

export const PasswordCallbackResponse = {
  type: 'PasswordCallback',
  output: [
    {
      name: 'prompt',
      value: 'Password',
    },
  ],
  input: [
    {
      name: 'IDToken1',
      value: '',
    },
  ],
} as Callback;
