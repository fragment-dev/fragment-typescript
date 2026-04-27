// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * Payment flow operations
 */
export class PaymentFlows extends APIResource {
  /**
   * Creates a new payment flow.
   *
   * @example
   * ```ts
   * const paymentFlow =
   *   await client.experimental.paymentFlows.create({
   *     external_id: 'pf_123',
   *     invoice: { id: 'inv_abc123' },
   *     type: 'single_invoice_settlement',
   *   });
   * ```
   */
  create(body: PaymentFlowCreateParams, options?: RequestOptions): APIPromise<PaymentFlowCreateResponse> {
    return this._client.post('/payment-flows', { body, ...options });
  }

  /**
   * Gets a payment flow by ID or external ID.
   *
   * @example
   * ```ts
   * const paymentFlow =
   *   await client.experimental.paymentFlows.retrieve(
   *     'pf_abc123',
   *   );
   * ```
   */
  retrieve(paymentFlowRef: string, options?: RequestOptions): APIPromise<PaymentFlowRetrieveResponse> {
    return this._client.get(path`/payment-flows/${paymentFlowRef}`, options);
  }

  /**
   * Searches payment flows.
   *
   * @example
   * ```ts
   * const response =
   *   await client.experimental.paymentFlows.search();
   * ```
   */
  search(
    body: PaymentFlowSearchParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PaymentFlowSearchResponse> {
    return this._client.post('/payment-flows/search', { body, ...options });
  }
}

/**
 * Payment flow object.
 */
export interface PaymentFlow {
  /**
   * FRAGMENT generated unique ID.
   */
  id: string;

  /**
   * Timestamp when the payment flow was created.
   */
  created: string;

  /**
   * User-provided unique external ID.
   */
  external_id: string;

  /**
   * Invoice being settled.
   */
  invoice: PaymentFlow.Invoice;

  /**
   * Timestamp when the payment flow was last modified.
   */
  modified: string;

  /**
   * Payment plan for UI rendering.
   */
  payment_plan: PaymentFlow.PaymentPlan;

  /**
   * Status of the payment flow.
   */
  status: string;

  /**
   * Type of payment flow.
   */
  type: string;
}

export namespace PaymentFlow {
  /**
   * Invoice being settled.
   */
  export interface Invoice {
    /**
     * Invoice identifier.
     */
    id: string;

    /**
     * Invoice external ID.
     */
    external_id?: string;
  }

  /**
   * Payment plan for UI rendering.
   */
  export interface PaymentPlan {
    /**
     * Payment batches.
     */
    batches: Array<PaymentPlan.Batch>;

    /**
     * When the plan was generated.
     */
    generated_at: string;

    /**
     * Invoice identifier.
     */
    invoice_id: string;

    /**
     * Plan version.
     */
    version: number;
  }

  export namespace PaymentPlan {
    export interface Batch {
      /**
       * Batch identifier.
       */
      batch_id: string;

      /**
       * Batches this one depends on.
       */
      depends_on: Array<string>;

      /**
       * Human-readable batch label.
       */
      label: string;

      /**
       * Payments in this batch.
       */
      payments: Array<Batch.Payment>;

      /**
       * Batch status.
       */
      status: string;
    }

    export namespace Batch {
      export interface Payment {
        /**
         * Amount in smallest currency unit.
         */
        amount: string;

        /**
         * Currency code.
         */
        currency: string;

        /**
         * Direction of the payment.
         */
        direction: string;

        /**
         * FRAGMENT generated unique ID.
         */
        payment_id: string;

        /**
         * Status of the payment.
         */
        status: string;

        /**
         * User associated with the payment.
         */
        user: Payment.User;
      }

      export namespace Payment {
        /**
         * User associated with the payment.
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
        }
      }
    }
  }
}

export interface PaymentFlowCreateResponse {
  /**
   * Payment flow object.
   */
  data: PaymentFlow;
}

export interface PaymentFlowRetrieveResponse {
  /**
   * Payment flow object.
   */
  data: PaymentFlow;
}

/**
 * List of payment flows.
 */
export interface PaymentFlowSearchResponse {
  data: Array<PaymentFlow>;
}

export interface PaymentFlowCreateParams {
  /**
   * User-provided unique external ID.
   */
  external_id: string;

  /**
   * Invoice to settle.
   */
  invoice: PaymentFlowCreateParams.ID | PaymentFlowCreateParams.ExternalID;

  /**
   * Type of payment flow.
   */
  type: 'single_invoice_settlement';
}

export namespace PaymentFlowCreateParams {
  export interface ID {
    /**
     * Fragment invoice ID.
     */
    id: string;
  }

  export interface ExternalID {
    /**
     * Invoice external ID.
     */
    external_id: string;
  }
}

export interface PaymentFlowSearchParams {
  /**
   * Filter by invoice ID.
   */
  invoice_id?: string;

  /**
   * Pagination parameters.
   */
  page_info?: PaymentFlowSearchParams.PageInfo;
}

export namespace PaymentFlowSearchParams {
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

export declare namespace PaymentFlows {
  export {
    type PaymentFlow as PaymentFlow,
    type PaymentFlowCreateResponse as PaymentFlowCreateResponse,
    type PaymentFlowRetrieveResponse as PaymentFlowRetrieveResponse,
    type PaymentFlowSearchResponse as PaymentFlowSearchResponse,
    type PaymentFlowCreateParams as PaymentFlowCreateParams,
    type PaymentFlowSearchParams as PaymentFlowSearchParams,
  };
}
