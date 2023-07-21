/**
 * Generated by Orval
 * Do not edit manually.
 * See `gen:api` script in package.json
 */

/**
 * Data related to a user having seen a splash screen.
 */
export interface SplashRequestSchema {
    /** The ID of the user that was shown the splash screen. */
    userId: number;
    /** The ID of the splash screen that was shown. */
    splashId: string;
}