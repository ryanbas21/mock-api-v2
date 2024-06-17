import { Schema } from '@effect/schema';
import { Callbacks } from '../../schemas/authenticate';

export type Callback = Schema.Schema.Type<typeof Callbacks>[number];
