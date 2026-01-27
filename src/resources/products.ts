// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

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
  seller: Seller;

  /**
   * Version number for optimistic locking
   */
  updateVersion: number;

  /**
   * Workspace ID this product belongs to
   */
  workspaceId: string;
}

export interface ProductSuccess {
  /**
   * Product object
   */
  data: Product;
}

/**
 * Seller information
 */
export type Seller = Seller.PlatformSeller | Seller.CounterpartySeller;

export namespace Seller {
  export interface PlatformSeller {
    /**
     * Indicates the product is sold by the platform
     */
    soldByPlatform: true;
  }

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
  description: string;

  /**
   * Seller information
   */
  seller: Seller;
}

export declare namespace Products {
  export {
    type Product as Product,
    type ProductSuccess as ProductSuccess,
    type Seller as Seller,
    type ProductListResponse as ProductListResponse,
    type ProductCreateParams as ProductCreateParams,
  };
}
