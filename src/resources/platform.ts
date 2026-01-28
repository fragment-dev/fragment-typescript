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
   * const successResponse = await client.platform.retrieve();
   * ```
   */
  retrieve(options?: RequestOptions): APIPromise<SuccessResponse> {
    return this._client.get('/platform', options);
  }

  /**
   * Updates platform details (creates if not exists)
   *
   * @example
   * ```ts
   * const successResponse = await client.platform.update({
   *   displayName: 'Acme Corp',
   * });
   * ```
   */
  update(body: PlatformUpdateParams, options?: RequestOptions): APIPromise<SuccessResponse> {
    return this._client.post('/platform', { body, ...options });
  }
}

export interface SuccessResponse {
  /**
   * Platform object
   */
  data: SuccessResponse.Data;
}

export namespace SuccessResponse {
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
  export { type SuccessResponse as SuccessResponse, type PlatformUpdateParams as PlatformUpdateParams };
}
