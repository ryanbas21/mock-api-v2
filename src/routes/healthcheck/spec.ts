import { Schema } from '@effect/schema';
import { Api } from 'effect-http';

const HealthCheckSuccess = Schema.Struct({ success: Schema.Boolean });

const healthCheckSpec = Api.get('HealthCheck', '/healthcheck').pipe(
  Api.setResponseBody(HealthCheckSuccess),
);

export { healthCheckSpec };
