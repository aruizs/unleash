/**
 * Generated by orval v6.10.3 🍺
 * Do not edit manually.
 * Unleash API
 * OpenAPI spec version: 4.20.0-beta.2
 */
import type { EventSchemaData } from './eventSchemaData';
import type { EventSchemaPreData } from './eventSchemaPreData';
import type { TagSchema } from './tagSchema';

export interface EventSchema {
    id: number;
    createdAt: string;
    type: string;
    createdBy: string;
    environment?: string | null;
    project?: string | null;
    featureName?: string | null;
    data?: EventSchemaData;
    preData?: EventSchemaPreData;
    tags?: TagSchema[] | null;
}