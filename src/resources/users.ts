// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

/**
 * User management operations
 */
export class Users extends APIResource {
  /**
   * Creates a user.
   *
   * @example
   * ```ts
   * const user = await client.users.create({
   *   external_id: 'user_ext_123',
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
   * Tags for the user.
   */
  tags: Array<User.Tag>;
}

export namespace User {
  /**
   * A key-value tag pair.
   */
  export interface Tag {
    /**
     * Tag key.
     */
    key: string;

    /**
     * Tag value.
     */
    value: string;
  }
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
  /**
   * List of users.
   */
  data: Array<User>;
}

export interface UserCreateParams {
  /**
   * User-provided unique ID.
   */
  external_id: string;

  /**
   * Tags for the user.
   */
  tags?: Array<UserCreateParams.Tag>;
}

export namespace UserCreateParams {
  /**
   * A key-value tag pair for metadata.
   */
  export interface Tag {
    /**
     * Tag key. Must not contain #, /, or :. Max 50 characters.
     */
    key: string;

    /**
     * Tag value. Must not contain #, /, or :. Max 200 characters.
     */
    value: string;
  }
}

export declare namespace Users {
  export {
    type User as User,
    type UserCreateResponse as UserCreateResponse,
    type UserListResponse as UserListResponse,
    type UserCreateParams as UserCreateParams,
  };
}
