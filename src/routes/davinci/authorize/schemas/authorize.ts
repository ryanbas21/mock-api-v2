import { Schema } from '@effect/schema';

const DavinciAuthorizeHeaders = Schema.Struct({
  response_mode: Schema.String,
  client_id: Schema.String,
  redirect_uri: Schema.String,
  response_type: Schema.String,
  scope: Schema.String,
  state: Schema.String,
  code: Schema.String,
  code_challenge: Schema.String,
  code_challenge_method: Schema.String,
});

const createBrand = (id: string) => Schema.String; //.pipe(Schema.brand(id))

const DavinciAuthorizeSuccess = Schema.Struct({
  interactionId: createBrand('InteractionId'),
  connectorId: createBrand('ConnectorId'),
  interactionToken: createBrand('interactionToken'),
  success: Schema.Boolean,
  startUiSubFlow: Schema.Boolean,
  _links: Schema.Struct({
    next: Schema.Struct({
      href: createBrand('NextHref'),
    }),
  }),
  eventName: Schema.String,
  isResponseCompatibleWithMobileAndWebSdks: Schema.Boolean,
  id: createBrand('id'),
  companyId: createBrand('companyId'),
  flowId: createBrand('flowId'),
  connectionId: createBrand('connectionId'),
  capabilityName: createBrand('capabilityName'),
  formData: Schema.Struct({
    value: Schema.Struct({
      protectsdk: Schema.String,
    }),
  }),
  form: Schema.Struct({
    name: Schema.String,
    description: Schema.String,
    category: createBrand('formCategory'),
    components: Schema.Struct({
      fields: Schema.Array(
        Schema.Struct({
          type: Schema.String,
          key: Schema.String,
          label: Schema.String,
        }),
      ),
    }),
  }),
});

export { DavinciAuthorizeHeaders, DavinciAuthorizeSuccess };
