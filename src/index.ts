import { RouterBuilder, Api } from 'effect-http';
import { NodeRuntime } from '@effect/platform-node';
import { NodeServer } from 'effect-http-node';
import { healthCheckSpec } from './routes/healthcheck/spec';
import { authorizeHandler } from './routes/davinci/authorize/handlers/authorize';
import { healthCheckHandler } from './routes/healthcheck/handlers/healthcheck';
import { authorizeSpec } from './routes/davinci/authorize/spec';
import { userInfoSpec } from './routes/davinci/userinfo/spec';
import { revokeSpec } from './routes/davinci/revoke/spec';
import { capabilitiesSpec } from './routes/davinci/capabilities/spec';
import { tokensSpec } from './routes/davinci/tokens/spec';
import { wellKnownSpec } from './routes/davinci/wellknown/spec';
import {
  wellKnownEndpointsHandler,
  wellKnownOpenIDHandler,
} from './routes/davinci/wellknown/handlers/wellknown';
import { tokensHandler } from './routes/davinci/tokens/handlers/tokens';
import { revokeHandler } from './routes/davinci/revoke/handlers/revoke';
import { userInfoHandler } from './routes/davinci/userinfo/handlers/userinfo';
import { capabilitiesHandler } from './routes/davinci/capabilities/handlers/capabilities';
import { authenticateHandler } from './routes/am/authenticate/handlers/authenticate';
import { authenticateSpec } from './routes/am/authenticate/spec';
import { HttpServer } from '@effect/platform';
import { Effect } from 'effect';
import { cors } from 'effect-http/Middlewares';

const api = Api.make().pipe(
  Api.addGroup(authenticateSpec),
  Api.addGroup(authorizeSpec),
  Api.addGroup(userInfoSpec),
  Api.addGroup(revokeSpec),
  Api.addGroup(tokensSpec),
  Api.addGroup(capabilitiesSpec),
  Api.addGroup(wellKnownSpec),
  Api.addEndpoint(healthCheckSpec),
);
const app = RouterBuilder.make(api).pipe(
  // AM Handlers
  RouterBuilder.handle(authenticateHandler),

  // PingOne Handlers
  RouterBuilder.handle(authorizeHandler),
  RouterBuilder.handle(capabilitiesHandler),
  RouterBuilder.handle(userInfoHandler),
  RouterBuilder.handle(tokensHandler),
  RouterBuilder.handle(revokeHandler),
  RouterBuilder.handle(wellKnownEndpointsHandler),
  RouterBuilder.handle(wellKnownOpenIDHandler),
  RouterBuilder.handle(healthCheckHandler),
  RouterBuilder.build,
);

app.pipe(
  cors({
    allowedMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    credentials: true,
    allowedOrigins: ['http://localhost:8443', 'https://localhost:8443'],
  }),
  NodeServer.listen({ port: 3000 }),
  NodeRuntime.runMain,
);
