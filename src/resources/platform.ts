// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Platform extends APIResource {
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

export interface PlatformRetrieveResponse {
  /**
   * Platform object
   */
  data: PlatformRetrieveResponse.Data;
}

export namespace PlatformRetrieveResponse {
  /**
   * Platform object
   */
  export interface Data {
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
}

export interface PlatformUpdateResponse {
  /**
   * Platform object
   */
  data: PlatformUpdateResponse.Data;
}

export namespace PlatformUpdateResponse {
  /**
   * Platform object
   */
  export interface Data {
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
}

export interface PlatformUpdateParams {
  /**
   * Display name for the platform
   */
  displayName: string;
}

export declare namespace Platform {
  export {
    type PlatformRetrieveResponse as PlatformRetrieveResponse,
    type PlatformUpdateResponse as PlatformUpdateResponse,
    type PlatformUpdateParams as PlatformUpdateParams,
  };
}
