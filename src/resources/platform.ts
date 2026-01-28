// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class PlatformResource extends APIResource {
  /**
   * Gets platform details for the workspace
   *
   * @example
   * ```ts
   * const platformSuccess = await client.platform.retrieve();
   * ```
   */
  retrieve(options?: RequestOptions): APIPromise<PlatformSuccess> {
    return this._client.get('/platform', options);
  }

  /**
   * Updates platform details (creates if not exists)
   *
   * @example
   * ```ts
   * const platformSuccess = await client.platform.update({
   *   displayName: 'Acme Corp',
   * });
   * ```
   */
  update(body: PlatformUpdateParams, options?: RequestOptions): APIPromise<PlatformSuccess> {
    return this._client.post('/platform', { body, ...options });
  }
}

/**
 * Platform object
 */
export interface Platform {
  /**
   * ISO 8601 timestamp when the platform was created
   */
  created: string;

  /**
   * Display name for the platform
   */
  displayName: string;

  /**
   * Workspace ID this platform belongs to
   */
  workspaceId: string;

  /**
   * ISO 8601 timestamp when the platform was last modified
   */
  modified?: string;
}

export interface PlatformPayout {
  /**
   * Set to true for platform payout
   */
  platform: true;
}

export interface PlatformSeller {
  /**
   * Indicates the product is sold by the platform
   */
  soldByPlatform: true;
}

export interface PlatformSuccess {
  /**
   * Platform object
   */
  data: Platform;
}

/**
 * Request body for updating platform details
 */
export interface UpdatePlatformDetailsRequest {
  /**
   * Display name for the platform
   */
  displayName: string;
}

export interface PlatformUpdateParams {
  /**
   * Display name for the platform
   */
  displayName: string;
}

export declare namespace PlatformResource {
  export {
    type Platform as Platform,
    type PlatformPayout as PlatformPayout,
    type PlatformSeller as PlatformSeller,
    type PlatformSuccess as PlatformSuccess,
    type UpdatePlatformDetailsRequest as UpdatePlatformDetailsRequest,
    type PlatformUpdateParams as PlatformUpdateParams,
  };
}
