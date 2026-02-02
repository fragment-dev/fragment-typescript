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
   *   seller: { soldByPlatform: true },
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
     * Product code (unique identifier)
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
     * Seller information
     */
    seller: Data.PlatformSeller | Data.UserSeller;

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
    export interface PlatformSeller {
      /**
       * Indicates the product is sold by the platform
       */
      soldByPlatform: true;
    }

    export interface UserSeller {
      /**
       * Role of the user
       */
      role: string;

      /**
       * Indicates the product is sold by a user
       */
      soldByPlatform: false;
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
     * Product code (unique identifier)
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
     * Seller information
     */
    seller: Data.PlatformSeller | Data.UserSeller;

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
    export interface PlatformSeller {
      /**
       * Indicates the product is sold by the platform
       */
      soldByPlatform: true;
    }

    export interface UserSeller {
      /**
       * Role of the user
       */
      role: string;

      /**
       * Indicates the product is sold by a user
       */
      soldByPlatform: false;
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
     * Product code (unique identifier)
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
     * Seller information
     */
    seller: Data.PlatformSeller | Data.UserSeller;

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
    export interface PlatformSeller {
      /**
       * Indicates the product is sold by the platform
       */
      soldByPlatform: true;
    }

    export interface UserSeller {
      /**
       * Role of the user
       */
      role: string;

      /**
       * Indicates the product is sold by a user
       */
      soldByPlatform: false;
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
   * Seller information
   */
  seller: ProductCreateParams.PlatformSeller | ProductCreateParams.UserSeller;
}

export namespace ProductCreateParams {
  export interface PlatformSeller {
    /**
     * Indicates the product is sold by the platform
     */
    soldByPlatform: true;
  }

  export interface UserSeller {
    /**
     * Role of the user
     */
    role: string;

    /**
     * Indicates the product is sold by a user
     */
    soldByPlatform: false;
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
