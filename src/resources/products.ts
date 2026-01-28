// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as PlatformAPI from './platform';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Products extends APIResource {
  /**
   * Creates a new product
   *
   * @example
   * ```ts
   * const productSuccess = await client.products.create({
   *   code: 'PROD_001',
   *   description: 'Premium subscription service',
   *   seller: { soldByPlatform: true },
   * });
   * ```
   */
  create(body: ProductCreateParams, options?: RequestOptions): APIPromise<ProductSuccess> {
    return this._client.post('/products', { body, ...options });
  }

  /**
   * Gets a product by code
   *
   * @example
   * ```ts
   * const productSuccess = await client.products.retrieve(
   *   'PROD_001',
   * );
   * ```
   */
  retrieve(code: string, options?: RequestOptions): APIPromise<ProductSuccess> {
    return this._client.get(path`/products/${code}`, options);
  }

  /**
   * Lists all products for the workspace
   *
   * @example
   * ```ts
   * const productList = await client.products.list();
   * ```
   */
  list(options?: RequestOptions): APIPromise<ProductList> {
    return this._client.get('/products', options);
  }
}

/**
 * Request body for creating a product
 */
export interface CreateProductRequest {
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
  seller: PlatformAPI.PlatformSeller | CreateProductRequest.CounterpartySeller;
}

export namespace CreateProductRequest {
  export interface CounterpartySeller {
    /**
     * Type of the counterparty seller
     */
    counterpartyType: string;

    /**
     * Indicates the product is sold by a counterparty
     */
    soldByPlatform: false;
  }
}

/**
 * Product object
 */
export interface Product {
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
  seller: PlatformAPI.PlatformSeller | Product.CounterpartySeller;

  /**
   * Version number for optimistic locking
   */
  updateVersion: number;

  /**
   * Workspace ID this product belongs to
   */
  workspaceId: string;
}

export namespace Product {
  export interface CounterpartySeller {
    /**
     * Type of the counterparty seller
     */
    counterpartyType: string;

    /**
     * Indicates the product is sold by a counterparty
     */
    soldByPlatform: false;
  }
}

/**
 * List of products
 */
export interface ProductList {
  data: Array<Product>;
}

export interface ProductSuccess {
  /**
   * Product object
   */
  data: Product;
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
  seller: PlatformAPI.PlatformSeller | ProductCreateParams.CounterpartySeller;
}

export namespace ProductCreateParams {
  export interface CounterpartySeller {
    /**
     * Type of the counterparty seller
     */
    counterpartyType: string;

    /**
     * Indicates the product is sold by a counterparty
     */
    soldByPlatform: false;
  }
}

export declare namespace Products {
  export {
    type CreateProductRequest as CreateProductRequest,
    type Product as Product,
    type ProductList as ProductList,
    type ProductSuccess as ProductSuccess,
    type ProductCreateParams as ProductCreateParams,
  };
}
