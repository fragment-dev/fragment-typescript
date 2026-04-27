// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * Payment operations
 */
export class Payments extends APIResource {
  /**
   * Gets a payment by ID or external ID.
   *
   * @example
   * ```ts
   * const payment = await client.experimental.payments.retrieve(
   *   'pmt_abc123',
   * );
   * ```
   */
  retrieve(paymentRef: string, options?: RequestOptions): APIPromise<PaymentRetrieveResponse> {
    return this._client.get(path`/payments/${paymentRef}`, options);
  }

  /**
   * Searches payments.
   *
   * @example
   * ```ts
   * const response =
   *   await client.experimental.payments.search();
   * ```
   */
  search(
    body: PaymentSearchParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PaymentSearchResponse> {
    return this._client.post('/payments/search', { body, ...options });
  }
}

/**
 * Payment object.
 */
export interface Payment {
  /**
   * FRAGMENT generated unique ID.
   */
  id: string;

  /**
   * Amount in smallest currency unit.
   */
  amount: string;

  /**
   * Timestamp when the payment was created.
   */
  created: string;

  /**
   * Currency code.
   */
  currency: string;

  /**
   * Direction of the payment.
   */
  direction: string;

  /**
   * Timestamp when the payment was last modified.
   */
  modified: string;

  /**
   * Payment account ID.
   */
  payment_account_id: string;

  /**
   * Payment flow ID.
   */
  payment_flow_id: string;

  /**
   * Status of the payment.
   */
  status: string;

  /**
   * Associated transaction IDs.
   */
  transaction_ids: Array<string>;

  /**
   * User-provided unique ID when the payment was created with one.
   */
  external_id?: string;
}

export interface PaymentRetrieveResponse {
  /**
   * Payment object.
   */
  data: Payment;
}

/**
 * List of payments.
 */
export interface PaymentSearchResponse {
  data: Array<Payment>;
}

export interface PaymentSearchParams {
  /**
   * Pagination parameters.
   */
  page_info?: PaymentSearchParams.PageInfo;

  /**
   * Filter by payment flow ID.
   */
  payment_flow_id?: string;
}

export namespace PaymentSearchParams {
  /**
   * Pagination parameters.
   */
  export interface PageInfo {
    /**
     * Pagination cursor.
     */
    after?: string;

    /**
     * Maximum number of results.
     */
    limit?: number;
  }
}

export declare namespace Payments {
  export {
    type Payment as Payment,
    type PaymentRetrieveResponse as PaymentRetrieveResponse,
    type PaymentSearchResponse as PaymentSearchResponse,
    type PaymentSearchParams as PaymentSearchParams,
  };
}
