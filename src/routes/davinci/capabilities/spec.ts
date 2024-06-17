import { Schema } from '@effect/schema';
import { Effect, pipe } from 'effect';
import { Api, RouterBuilder, ApiGroup } from 'effect-http';
import {
  CapabilitiesRequestBody,
  CapabilitiesResponses,
} from './schemas/capabilities';

const capabilitiesPost = Api.post(
  'Capabilities',
  '/:envid/davinci/connections/:policyid/capabilities/customHTMLTemplate',
).pipe(
  Api.setRequestPath(
    Schema.Struct({ envid: Schema.String, policyid: Schema.String }),
  ),
  Api.setRequestBody(CapabilitiesRequestBody),
  Api.setResponseBody(CapabilitiesResponses),
);

const capabilitiesSpec = ApiGroup.make('Davinci Capabilities', {
  description: 'Davinci Capabilities',
}).pipe(ApiGroup.addEndpoint(capabilitiesPost));

export { capabilitiesSpec };
