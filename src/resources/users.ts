// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Users extends APIResource {
  /**
   * Creates a new user
   *
   * @example
   * ```ts
   * const user = await client.users.create({
   *   externalId: 'user_ext_123',
   *   role: 'admin',
   * });
   * ```
   */
  create(body: UserCreateParams, options?: RequestOptions): APIPromise<UserCreateResponse> {
    return this._client.post('/users', { body, ...options });
  }

  /**
   * Lists all users for the workspace
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
 * User object
 */
export interface User {
  /**
   * Unique user ID
   */
  id: string;

  /**
   * External ID for the user
   */
  externalId: string;

  /**
   * Role of the user
   */
  role: string;
}

export interface UserCreateResponse {
  /**
   * User object
   */
  data: User;
}

/**
 * List of users
 */
export interface UserListResponse {
  data: Array<User>;
}

export interface UserCreateParams {
  /**
   * External ID for the user
   */
  externalId: string;

  /**
   * Role of the user
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
