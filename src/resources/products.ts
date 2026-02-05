// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Products extends APIResource {
  /**
   * Creates a new product
   *
   * @example
   * ```ts
   * const product = await client.products.create({
   *   code: 'PROD_001',
   *   description: 'Premium subscription service',
   * });
   * ```
   */
  create(body: ProductCreateParams, options?: RequestOptions): APIPromise<ProductCreateResponse> {
    return this._client.post('/products', { body, ...options });
  }

  /**
   * Gets a product by code
   *
   * @example
   * ```ts
   * const product = await client.products.retrieve('PROD_001');
   * ```
   */
  retrieve(code: string, options?: RequestOptions): APIPromise<ProductRetrieveResponse> {
    return this._client.get(path`/products/${code}`, options);
  }

  /**
   * Lists all products for the workspace
   *
   * @example
   * ```ts
   * const products = await client.products.list();
   * ```
   */
  list(options?: RequestOptions): APIPromise<ProductListResponse> {
    return this._client.get('/products', options);
  }
}

export interface ProductCreateResponse {
  /**
   * Product object
   */
  data: ProductCreateResponse.Data;
}

export namespace ProductCreateResponse {
  /**
   * Product object
   */
  export interface Data {
    /**
     * Unique identifier for the product
     */
    id: string;

    /**
     * User-defined product identifier.
     */
    code: string;

    /**
     * ISO 8601 timestamp when the product was created
     */
    created: string;

    /**
     * Description of the product
     */
    description: string;

    /**
     * User roles that can pay for this product
     */
    paid_by_roles: Array<Data.PaidByRole>;

    /**
     * User roles that receive payment for this product
     */
    paid_to_roles: Array<Data.PaidToRole>;

    /**
     * Version number for optimistic locking
     */
    updateVersion: number;

    /**
     * Workspace ID this product belongs to
     */
    workspaceId: string;
  }

  export namespace Data {
    /**
     * Reference to a role by its unique ID
     */
    export interface PaidByRole {
      /**
       * The unique ID of the role
       */
      id: string;

      /**
       * The name of the role
       */
      name: string;
    }

    /**
     * Reference to a role by its unique ID
     */
    export interface PaidToRole {
      /**
       * The unique ID of the role
       */
      id: string;

      /**
       * The name of the role
       */
      name: string;
    }
  }
}

export interface ProductRetrieveResponse {
  /**
   * Product object
   */
  data: ProductRetrieveResponse.Data;
}

export namespace ProductRetrieveResponse {
  /**
   * Product object
   */
  export interface Data {
    /**
     * Unique identifier for the product
     */
    id: string;

    /**
     * User-defined product identifier.
     */
    code: string;

    /**
     * ISO 8601 timestamp when the product was created
     */
    created: string;

    /**
     * Description of the product
     */
    description: string;

    /**
     * User roles that can pay for this product
     */
    paid_by_roles: Array<Data.PaidByRole>;

    /**
     * User roles that receive payment for this product
     */
    paid_to_roles: Array<Data.PaidToRole>;

    /**
     * Version number for optimistic locking
     */
    updateVersion: number;

    /**
     * Workspace ID this product belongs to
     */
    workspaceId: string;
  }

  export namespace Data {
    /**
     * Reference to a role by its unique ID
     */
    export interface PaidByRole {
      /**
       * The unique ID of the role
       */
      id: string;

      /**
       * The name of the role
       */
      name: string;
    }

    /**
     * Reference to a role by its unique ID
     */
    export interface PaidToRole {
      /**
       * The unique ID of the role
       */
      id: string;

      /**
       * The name of the role
       */
      name: string;
    }
  }
}

/**
 * List of products
 */
export interface ProductListResponse {
  data: Array<ProductListResponse.Data>;
}

export namespace ProductListResponse {
  /**
   * Product object
   */
  export interface Data {
    /**
     * Unique identifier for the product
     */
    id: string;

    /**
     * User-defined product identifier.
     */
    code: string;

    /**
     * ISO 8601 timestamp when the product was created
     */
    created: string;

    /**
     * Description of the product
     */
    description: string;

    /**
     * User roles that can pay for this product
     */
    paid_by_roles: Array<Data.PaidByRole>;

    /**
     * User roles that receive payment for this product
     */
    paid_to_roles: Array<Data.PaidToRole>;

    /**
     * Version number for optimistic locking
     */
    updateVersion: number;

    /**
     * Workspace ID this product belongs to
     */
    workspaceId: string;
  }

  export namespace Data {
    /**
     * Reference to a role by its unique ID
     */
    export interface PaidByRole {
      /**
       * The unique ID of the role
       */
      id: string;

      /**
       * The name of the role
       */
      name: string;
    }

    /**
     * Reference to a role by its unique ID
     */
    export interface PaidToRole {
      /**
       * The unique ID of the role
       */
      id: string;

      /**
       * The name of the role
       */
      name: string;
    }
  }
}

export interface ProductCreateParams {
  /**
   * Product code (unique identifier)
   */
  code: string;

  /**
   * Description of the product
   */
  description: string;

  /**
   * Roles that can pay for this product. Reference roles by id or name. At least one
   * of paid_by_roles or paid_to_roles must be provided.
   */
  paid_by_roles?: Array<ProductCreateParams.RoleMatchByID | ProductCreateParams.RoleMatchByName>;

  /**
   * Roles that receive payment for this product. Reference roles by id or name. At
   * least one of paid_by_roles or paid_to_roles must be provided.
   */
  paid_to_roles?: Array<ProductCreateParams.RoleMatchByID | ProductCreateParams.RoleMatchByName>;
}

export namespace ProductCreateParams {
  export interface RoleMatchByID {
    /**
     * The unique ID of the role
     */
    id: string;
  }

  export interface RoleMatchByName {
    /**
     * The name of the role
     */
    name: string;
  }

  export interface RoleMatchByID {
    /**
     * The unique ID of the role
     */
    id: string;
  }

  export interface RoleMatchByName {
    /**
     * The name of the role
     */
    name: string;
  }
}

export declare namespace Products {
  export {
    type ProductCreateResponse as ProductCreateResponse,
    type ProductRetrieveResponse as ProductRetrieveResponse,
    type ProductListResponse as ProductListResponse,
    type ProductCreateParams as ProductCreateParams,
  };
}
