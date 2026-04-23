// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

/**
 * Role management operations
 */
export class Roles extends APIResource {
  /**
   * Creates a role. Deprecated, use user tags instead.
   *
   * @deprecated
   */
  create(body: RoleCreateParams, options?: RequestOptions): APIPromise<RoleCreateResponse> {
    return this._client.post('/roles', { body, ...options });
  }

  /**
   * Lists all roles. Deprecated, use user tags instead.
   *
   * @deprecated
   */
  list(options?: RequestOptions): APIPromise<RoleListResponse> {
    return this._client.get('/roles', options);
  }
}

/**
 * @deprecated Role object. Deprecated, use user tags instead.
 */
export interface Role {
  /**
   * @deprecated FRAGMENT generated unique ID. Deprecated.
   */
  id: string;

  /**
   * @deprecated Name of the role. Deprecated, use user tags instead.
   */
  role: string;
}

/**
 * @deprecated
 */
export interface RoleCreateResponse {
  /**
   * @deprecated Role object. Deprecated, use user tags instead.
   */
  data: Role;
}

/**
 * @deprecated List of roles. Deprecated, use user tags instead.
 */
export interface RoleListResponse {
  /**
   * @deprecated List of roles. Deprecated, use user tags instead.
   */
  data: Array<Role>;
}

export interface RoleCreateParams {
  /**
   * @deprecated Name of the role. Deprecated, use user tags instead.
   */
  role: string;
}

export declare namespace Roles {
  export {
    type Role as Role,
    type RoleCreateResponse as RoleCreateResponse,
    type RoleListResponse as RoleListResponse,
    type RoleCreateParams as RoleCreateParams,
  };
}
