/**
 * Generated by Orval
 * Do not edit manually.
 * See `gen:api` script in package.json
 */
import type { ChangeRequestStateSchemaOneOfState } from './changeRequestStateSchemaOneOfState';

export type ChangeRequestStateSchemaOneOf = {
    /** The new desired state for the change request */
    state: ChangeRequestStateSchemaOneOfState;
    /** Any comments accompanying the state changed. Used when sending a draft to review. */
    comment?: string;
};