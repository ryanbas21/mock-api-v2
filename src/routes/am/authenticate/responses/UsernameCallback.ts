import { Callback } from './types/callback';

export const UsernameCallbackResponse = {
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
} as Callback;
