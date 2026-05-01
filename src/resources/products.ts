// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

/**
 * Product management operations
 */
export class Products extends APIResource {
  /**
   * Creates a product.
   *
   * @example
   * ```ts
   * const product = await client.products.create({
   *   code: 'PROD_001',
   * });
   * ```
   */
  create(body: ProductCreateParams, options?: RequestOptions): APIPromise<ProductCreateResponse> {
    return this._client.post('/products', { body, ...options });
  }

  /**
   * Retrieves a product by code.
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
   * Lists all products.
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

/**
 * Product object.
 */
export interface Product {
  /**
   * FRAGMENT generated unique ID.
   */
  id: string;

  /**
   * Product code.
   */
  code: string;

  /**
   * Timestamp when the product was created. Uses ISO 8601 format.
   */
  created: string;

  /**
   * Current version of the product.
   */
  update_version: number;

  /**
   * Workspace ID of the product.
   */
  workspace_id: string;

  /**
   * Product description.
   */
  description?: string;
}

export interface ProductCreateResponse {
  /**
   * Product object.
   */
  data: Product;
}

export interface ProductRetrieveResponse {
  /**
   * Product object.
   */
  data: Product;
}

export interface ProductListResponse {
  /**
   * List of products.
   */
  data: Array<Product>;
}

export interface ProductCreateParams {
  /**
   * Unique product code.
   */
  code: string;

  /**
   * Product description.
   */
  description?: string;
}

export declare namespace Products {
  export {
    type Product as Product,
    type ProductCreateResponse as ProductCreateResponse,
    type ProductRetrieveResponse as ProductRetrieveResponse,
    type ProductListResponse as ProductListResponse,
    type ProductCreateParams as ProductCreateParams,
  };
}
