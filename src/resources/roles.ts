// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Roles extends APIResource {
  /**
   * Creates a new role
   *
   * @example
   * ```ts
   * const role = await client.roles.create({ role: 'admin' });
   * ```
   */
  create(body: RoleCreateParams, options?: RequestOptions): APIPromise<RoleCreateResponse> {
    return this._client.post('/roles', { body, ...options });
  }

  /**
   * Lists all roles for the workspace
   *
   * @example
   * ```ts
   * const roles = await client.roles.list();
   * ```
   */
  list(options?: RequestOptions): APIPromise<RoleListResponse> {
    return this._client.get('/roles', options);
  }
}

/**
 * Role object
 */
export interface Role {
  /**
   * Unique role ID
   */
  id: string;

  /**
   * Name of the role
   */
  role: string;
}

export interface RoleCreateResponse {
  /**
   * Role object
   */
  data: Role;
}

/**
 * List of roles
 */
export interface RoleListResponse {
  data: Array<Role>;
}

export interface RoleCreateParams {
  /**
   * Name of the role
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
