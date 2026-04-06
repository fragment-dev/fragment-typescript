// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Users extends APIResource {
  /**
   * Creates a user.
   *
   * @example
   * ```ts
   * const user = await client.users.create({
   *   external_id: 'user_ext_123',
   *   role: 'admin',
   * });
   * ```
   */
  create(body: UserCreateParams, options?: RequestOptions): APIPromise<UserCreateResponse> {
    return this._client.post('/users', { body, ...options });
  }

  /**
   * Lists all users.
   *
   * @example
   * ```ts
   * const users = await client.users.list();
   * ```
   */
  list(options?: RequestOptions): APIPromise<UserListResponse> {
    return this._client.get('/users', options);
  }
}

/**
 * User object.
 */
export interface User {
  /**
   * FRAGMENT generated unique ID.
   */
  id: string;

  /**
   * User-provided unique ID.
   */
  external_id: string;

  /**
   * Name of the user's role.
   */
  role: string;
}

export interface UserCreateResponse {
  /**
   * User object.
   */
  data: User;
}

/**
 * List of users.
 */
export interface UserListResponse {
  data: Array<User>;
}

export interface UserCreateParams {
  /**
   * User-provided unique ID.
   */
  external_id: string;

  /**
   * Name of the role to assign. Must match an existing role.
   */
  role: string;
}

export declare namespace Users {
  export {
    type User as User,
    type UserCreateResponse as UserCreateResponse,
    type UserListResponse as UserListResponse,
    type UserCreateParams as UserCreateParams,
  };
}
