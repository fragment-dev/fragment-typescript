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
   * const platform = await client.platform.retrieve();
   * ```
   */
  retrieve(options?: RequestOptions): APIPromise<PlatformRetrieveResponse> {
    return this._client.get('/platform', options);
  }

  /**
   * Updates platform details (creates if not exists)
   *
   * @example
   * ```ts
   * const platform = await client.platform.update({
   *   displayName: 'Acme Corp',
   * });
   * ```
   */
  update(body: PlatformUpdateParams, options?: RequestOptions): APIPromise<PlatformUpdateResponse> {
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

export interface PlatformRetrieveResponse {
  /**
   * Platform object
   */
  data: Platform;
}

export interface PlatformUpdateResponse {
  /**
   * Platform object
   */
  data: Platform;
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
    type PlatformRetrieveResponse as PlatformRetrieveResponse,
    type PlatformUpdateResponse as PlatformUpdateResponse,
    type PlatformUpdateParams as PlatformUpdateParams,
  };
}
