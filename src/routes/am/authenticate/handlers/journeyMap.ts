import { Array } from 'effect';
import { Schema } from '@effect/schema';
import { type Callback } from '../responses/types/callback';
import { UsernamePasswordCallbackResponse } from '../responses/UsernamePassword';
import { AuthenticateCallbacks } from '../schemas/authenticate';
import { UsernameCallbackResponse } from '../responses/UsernameCallback';
import { PasswordCallbackResponse } from '../responses/PasswordCallback';
// import { RegistrationCallback } from '../responses/RegistrationCallback';
import { authId } from '../responses/authid';

type Responses = Schema.Schema.Type<typeof AuthenticateCallbacks>;
type JourneyNames = 'TwoStepLogin' | 'UsernamePassword'; // 'Registration';

function makeStep(callbacks: Callback[] | Callback): Responses {
  return {
    ...authId,
    callbacks: Array.isArray(callbacks) ? callbacks : [callbacks],
  };
}

/*
 * Define Journey nodes in array in order.
 * The journeyIndex cookie will increment through
 * Apply `makeStep` to create a full step.
 */

const journeyMap = {
  UsernamePassword: [UsernamePasswordCallbackResponse].map(makeStep),
  TwoStepLogin: [UsernameCallbackResponse, PasswordCallbackResponse].map(
    makeStep,
  ),
  // Registration: Array.make(RegistrationCallback).map(makeStep),
};

export type { JourneyNames, Responses };

export { journeyMap };
