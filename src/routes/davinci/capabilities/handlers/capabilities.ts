import { capabilitiesSpec } from '../spec';
import { Route, RouterBuilder } from 'effect-http';
import { Effect } from 'effect';
import { capabilitiesSuccess } from '../responses/capabilities';
import { Api } from 'effect-http';

const capabilitiesApi = Api.make().pipe(Api.addGroup(capabilitiesSpec));

const capabilitiesHandler = RouterBuilder.handler(
  capabilitiesApi,
  'Capabilities',
  req => Effect.succeed(capabilitiesSuccess),
);

export { capabilitiesHandler };
