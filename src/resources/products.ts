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
   * Creates a new product
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

/**
 * Product object
 */
export interface Product {
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
   * User roles that can pay for this product
   */
  paid_by_roles: Array<Product.PaidByRole>;

  /**
   * User roles that receive payment for this product
   */
  paid_to_roles: Array<Product.PaidToRole>;

  /**
   * Version number for optimistic locking
   */
  update_version: number;

  /**
   * Workspace ID this product belongs to
   */
  workspace_id: string;

  /**
   * Description of the product
   */
  description?: string;
}

export namespace Product {
  /**
   * Role reference in product API responses.
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
   * Role reference in product API responses.
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

export interface ProductCreateResponse {
  /**
   * Product object
   */
  data: Product;
}

export interface ProductRetrieveResponse {
  /**
   * Product object
   */
  data: Product;
}

/**
 * List of products
 */
export interface ProductListResponse {
  data: Array<Product>;
}

export interface ProductCreateParams {
  /**
   * Product code (unique identifier)
   */
  code: string;

  /**
   * Description of the product
   */
  description?: string;

  /**
   * Roles that can pay for this product. Reference roles by id or name. At least one
   * of paid_by_roles or paid_to_roles must be provided.
   */
  paid_by_roles?: Array<ProductCreateParams.ID | ProductCreateParams.Name>;

  /**
   * Roles that receive payment for this product. Reference roles by id or name. At
   * least one of paid_by_roles or paid_to_roles must be provided.
   */
  paid_to_roles?: Array<ProductCreateParams.ID | ProductCreateParams.Name>;
}

export namespace ProductCreateParams {
  export interface ID {
    /**
     * The unique ID of the role
     */
    id: string;
  }

  export interface Name {
    /**
     * The name of the role
     */
    name: string;
  }

  export interface ID {
    /**
     * The unique ID of the role
     */
    id: string;
  }

  export interface Name {
    /**
     * The name of the role
     */
    name: string;
  }
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
