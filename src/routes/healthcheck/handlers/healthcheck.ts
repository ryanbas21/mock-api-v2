import { Effect, pipe } from 'effect';
import { RouterBuilder, Api } from 'effect-http';
import { healthCheckSpec } from '../spec';

const healthCheckHandler = RouterBuilder.handler(
  Api.make().pipe(Api.addEndpoint(healthCheckSpec)),
  'HealthCheck',
  req => Effect.succeed({ success: true }),
);

export { healthCheckHandler };
