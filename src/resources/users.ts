// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

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
   * Updates a user.
   *
   * @example
   * ```ts
   * const user = await client.users.update(
   *   'user_dXNyX2ZyYWdfMDAx',
   *   { tags: {} },
   * );
   * ```
   */
  update(userRef: string, body: UserUpdateParams, options?: RequestOptions): APIPromise<UserUpdateResponse> {
    return this._client.patch(path`/users/${userRef}`, { body, ...options });
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

export interface UserUpdateResponse {
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

export interface UserUpdateParams {
  /**
   * Tag updates.
   */
  tags: UserUpdateParams.Tags;
}

export namespace UserUpdateParams {
  /**
   * Tag updates.
   */
  export interface Tags {
    /**
     * Tags to create. The tag key must not already exist.
     */
    create?: Array<Tags.Create>;

    /**
     * Tags to remove.
     */
    delete?: Array<Tags.Delete>;

    /**
     * Tags to set. Creates a new tag or updates an existing tag.
     */
    set?: Array<Tags.Set>;

    /**
     * Tags to update. The tag key must already exist.
     */
    update?: Array<Tags.Update>;
  }

  export namespace Tags {
    /**
     * A key-value tag pair for metadata.
     */
    export interface Create {
      /**
       * Tag key. Must not contain #, /, or :. Max 50 characters.
       */
      key: string;

      /**
       * Tag value. Must not contain #, /, or :. Max 200 characters.
       */
      value: string;
    }

    export interface Delete {
      /**
       * Tag key to delete.
       */
      key: string;
    }

    /**
     * A key-value tag pair for metadata.
     */
    export interface Set {
      /**
       * Tag key. Must not contain #, /, or :. Max 50 characters.
       */
      key: string;

      /**
       * Tag value. Must not contain #, /, or :. Max 200 characters.
       */
      value: string;
    }

    /**
     * A key-value tag pair for metadata.
     */
    export interface Update {
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
}

export declare namespace Users {
  export {
    type User as User,
    type UserCreateResponse as UserCreateResponse,
    type UserUpdateResponse as UserUpdateResponse,
    type UserListResponse as UserListResponse,
    type UserCreateParams as UserCreateParams,
    type UserUpdateParams as UserUpdateParams,
  };
}
