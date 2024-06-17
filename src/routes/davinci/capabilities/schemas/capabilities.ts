import { Schema } from '@effect/schema';

const CapabilitiesRequestBody = Schema.Struct({
  id: Schema.String,
  eventName: Schema.String,
  interactionId: Schema.String,
  parameters: Schema.Struct({
    eventType: Schema.String,
    data: Schema.Struct({
      actionKey: Schema.String,
      formData: Schema.Struct({
        username: Schema.String,
        password: Schema.String,
      }),
    }),
  }),
});

const CapabilitiesResponseBody = Schema.Union(
  Schema.Struct({
    id: Schema.String,
    eventName: Schema.String,
    interactionId: Schema.String,
    parameters: Schema.Struct({
      eventType: Schema.String,
      data: Schema.Struct({
        actionKey: Schema.String,
        formData: Schema.Struct({
          username: Schema.String,
          password: Schema.String,
        }),
      }),
    }),
  }),
  Schema.Struct({ test: Schema.String }),
);

const CapabilitiesSuccessBody = Schema.Struct({
  interactionId: Schema.String,
  companyId: Schema.String,
  connectionId: Schema.String,
  connectorId: Schema.String,
  id: Schema.String,
  capabilityName: Schema.String,
  environment: Schema.Struct({
    id: Schema.String,
  }),
  session: Schema.Struct({
    id: Schema.String,
  }),
  status: Schema.String,
  authorizeResponse: Schema.Struct({
    code: Schema.String,
    state: Schema.String,
  }),
  isResponseCompatibleWithMobileAndWebSdks: Schema.Boolean,
  success: Schema.Boolean,
  resetCookie: Schema.Boolean,
  interactionToken: Schema.String,
  subFlowSettings: Schema.Struct({
    reactSkUrl: Schema.String,
    cssUrl: Schema.NullOr(Schema.String),
    cssLinks: Schema.Array(Schema.String),
    jsLinks: Schema.Array(Schema.String),
    loadingScreenSettings: Schema.String,
  }),
});

const CapabilitiesResponses = Schema.Union(
  CapabilitiesResponseBody,
  CapabilitiesSuccessBody,
);
export { CapabilitiesRequestBody, CapabilitiesResponses };
