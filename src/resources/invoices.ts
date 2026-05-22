// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as InvoicesAPI from './invoices';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

/**
 * Invoice management operations
 */
export class Invoices extends APIResource {
  /**
   * Creates an invoice.
   *
   * @example
   * ```ts
   * const invoice = await client.invoices.create({
   *   invoice_id: 'invoice_2024_001',
   *   line_items: [
   *     {
   *       description: 'Professional services for January 2026',
   *       product_id: 'prod_1234567890',
   *       type: 'payout',
   *       user: { id: 'user_abc123' },
   *     },
   *   ],
   * });
   * ```
   */
  create(body: InvoiceCreateParams, options?: RequestOptions): APIPromise<InvoiceCreateResponse> {
    return this._client.post('/invoices', { body, ...options });
  }

  /**
   * Retrieves an invoice.
   *
   * @example
   * ```ts
   * const invoice = await client.invoices.retrieve(
   *   'inv_1234567890',
   * );
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<InvoiceRetrieveResponse> {
    return this._client.get(path`/invoices/${id}`, options);
  }

  /**
   * Updates an invoice.
   *
   * @example
   * ```ts
   * const invoice = await client.invoices.update(
   *   'inv_1234567890',
   *   { current_invoice_version: 3 },
   * );
   * ```
   */
  update(id: string, body: InvoiceUpdateParams, options?: RequestOptions): APIPromise<InvoiceUpdateResponse> {
    return this._client.patch(path`/invoices/${id}`, { body, ...options });
  }

  /**
   * Lists all invoices.
   *
   * @example
   * ```ts
   * const invoices = await client.invoices.list();
   * ```
   */
  list(options?: RequestOptions): APIPromise<InvoiceListResponse> {
    return this._client.get('/invoices', options);
  }

  /**
   * Retrieves multiple invoices.
   *
   * @example
   * ```ts
   * const response = await client.invoices.createBatchGet({
   *   ids: ['string'],
   * });
   * ```
   */
  createBatchGet(
    body: InvoiceCreateBatchGetParams,
    options?: RequestOptions,
  ): APIPromise<InvoiceCreateBatchGetResponse> {
    return this._client.post('/invoices/batch-get', { body, ...options });
  }

  /**
   * Retrieves the version history of an invoice.
   *
   * @example
   * ```ts
   * const response = await client.invoices.listHistory(
   *   'inv_1234567890',
   * );
   * ```
   */
  listHistory(id: string, options?: RequestOptions): APIPromise<InvoiceListHistoryResponse> {
    return this._client.get(path`/invoices/${id}/history`, options);
  }

  /**
   * Searches invoices.
   *
   * @example
   * ```ts
   * const response = await client.invoices.search({
   *   filter: {},
   * });
   * ```
   */
  search(body: InvoiceSearchParams, options?: RequestOptions): APIPromise<InvoiceSearchResponse> {
    return this._client.post('/invoices/search', { body, ...options });
  }
}

/**
 * Invoice object.
 */
export interface Invoice {
  /**
   * Unique invoice ID.
   */
  id: string;

  /**
   * Timestamp when the invoice was created. Uses ISO 8601 format.
   */
  created: string;

  /**
   * @deprecated Status of the invoice. Deprecated.
   */
  status: 'active';

  /**
   * Tags for the invoice.
   */
  tags: Array<Invoice.Tag>;

  /**
   * Current version of the invoice.
   */
  version: number;

  /**
   * Workspace the invoice belongs to.
   */
  workspace_id: string;

  /**
   * Line items for the invoice.
   */
  line_items?: Array<Invoice.LineItem>;

  /**
   * Timestamp when the invoice was last modified. Uses ISO 8601 format.
   */
  modified?: string;
}

export namespace Invoice {
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

  /**
   * Invoice line item.
   */
  export interface LineItem {
    /**
     * FRAGMENT generated unique ID.
     */
    id: string;

    /**
     * @deprecated Total amount as a string in the smallest currency unit, such as
     * cents for USD. Deprecated, use price.amount instead.
     */
    amount: string;

    /**
     * ISO 4217 or crypto currency code.
     */
    currency_code:
      | 'ADA'
      | 'BTC'
      | 'DAI'
      | 'ETH'
      | 'SOL'
      | 'USDC'
      | 'USDT'
      | 'USDG'
      | 'EURC'
      | 'CADC'
      | 'CADT'
      | 'XLM'
      | 'UNI'
      | 'BCH'
      | 'LTC'
      | 'AAVE'
      | 'LINK'
      | 'MATIC'
      | 'PTS'
      | 'AED'
      | 'AFN'
      | 'ALL'
      | 'AMD'
      | 'ANG'
      | 'AOA'
      | 'ARS'
      | 'AUD'
      | 'AWG'
      | 'AZN'
      | 'BAM'
      | 'BBD'
      | 'BDT'
      | 'BGN'
      | 'BHD'
      | 'BIF'
      | 'BMD'
      | 'BND'
      | 'BOB'
      | 'BRL'
      | 'BSD'
      | 'BTN'
      | 'BWP'
      | 'BYR'
      | 'BZD'
      | 'CAD'
      | 'CDF'
      | 'CHF'
      | 'CLP'
      | 'CNY'
      | 'COP'
      | 'CRC'
      | 'CUC'
      | 'CUP'
      | 'CVE'
      | 'CZK'
      | 'DJF'
      | 'DKK'
      | 'DOP'
      | 'DZD'
      | 'EGP'
      | 'ERN'
      | 'ETB'
      | 'EUR'
      | 'FJD'
      | 'FKP'
      | 'GBP'
      | 'GEL'
      | 'GGP'
      | 'GHS'
      | 'GIP'
      | 'GMD'
      | 'GNF'
      | 'GTQ'
      | 'GYD'
      | 'HKD'
      | 'HNL'
      | 'HRK'
      | 'HTG'
      | 'HUF'
      | 'IDR'
      | 'ILS'
      | 'IMP'
      | 'INR'
      | 'IQD'
      | 'IRR'
      | 'ISK'
      | 'JMD'
      | 'JOD'
      | 'JPY'
      | 'KES'
      | 'KGS'
      | 'KHR'
      | 'KMF'
      | 'KPW'
      | 'KRW'
      | 'KWD'
      | 'KYD'
      | 'KZT'
      | 'LAK'
      | 'LBP'
      | 'LKR'
      | 'LRD'
      | 'LSL'
      | 'LYD'
      | 'MAD'
      | 'MDL'
      | 'MGA'
      | 'MKD'
      | 'MMK'
      | 'MNT'
      | 'MOP'
      | 'MUR'
      | 'MVR'
      | 'MWK'
      | 'MXN'
      | 'MYR'
      | 'MZN'
      | 'NAD'
      | 'NGN'
      | 'NIO'
      | 'NOK'
      | 'NPR'
      | 'NZD'
      | 'OMR'
      | 'PAB'
      | 'PEN'
      | 'PGK'
      | 'PHP'
      | 'PKR'
      | 'PLN'
      | 'PYG'
      | 'QAR'
      | 'RON'
      | 'RSD'
      | 'RUB'
      | 'RWF'
      | 'SAR'
      | 'SBD'
      | 'SCR'
      | 'SDG'
      | 'SEK'
      | 'SGD'
      | 'SHP'
      | 'SLL'
      | 'SOS'
      | 'SPL'
      | 'SRD'
      | 'SVC'
      | 'SYP'
      | 'STN'
      | 'SZL'
      | 'THB'
      | 'TJS'
      | 'TMT'
      | 'TND'
      | 'TOP'
      | 'TRY'
      | 'TTD'
      | 'TVD'
      | 'TWD'
      | 'TZS'
      | 'UAH'
      | 'UGX'
      | 'USD'
      | 'UYU'
      | 'UZS'
      | 'VEF'
      | 'VND'
      | 'VUV'
      | 'WST'
      | 'XAF'
      | 'XCD'
      | 'XOF'
      | 'XPF'
      | 'YER'
      | 'ZAR'
      | 'ZMW'
      | 'LOGICAL'
      | 'CUSTOM';

    /**
     * Description of the line item.
     */
    description: string;

    /**
     * Price breakdown.
     */
    price: LineItem.Price;

    /**
     * Unique identifier for the product.
     */
    product_id: string;

    /**
     * Tags for the line item.
     */
    tags: Array<LineItem.Tag>;

    /**
     * Type of the line item.
     */
    type: 'payin' | 'payout';

    /**
     * User-provided unique external ID.
     */
    user_id: string;
  }

  export namespace LineItem {
    /**
     * Price breakdown.
     */
    export interface Price {
      /**
       * Total amount as a string in the smallest currency unit, such as cents for USD.
       */
      amount: string;

      /**
       * Number of units.
       */
      quantity: number;

      /**
       * Unit price as a string in the smallest currency unit, such as cents for USD.
       */
      unit_price: string;
    }

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
}

export interface InvoiceCreateResponse {
  /**
   * Invoice object.
   */
  data: Invoice;
}

export interface InvoiceRetrieveResponse {
  /**
   * Invoice with balance details.
   */
  data: InvoiceRetrieveResponse.Data;
}

export namespace InvoiceRetrieveResponse {
  /**
   * Invoice with balance details.
   */
  export interface Data extends InvoicesAPI.Invoice {
    /**
     * Invoice-level balances by currency.
     */
    balances: Array<Data.Balance>;

    /**
     * Payments allocated to the invoice.
     */
    payments: Array<Data.Payment>;

    /**
     * Users involved in the invoice.
     */
    users: Array<Data.User>;
  }

  export namespace Data {
    export interface Balance {
      /**
       * ISO 4217 or crypto currency code.
       */
      currency: string;

      /**
       * Net balance breakdown.
       */
      net: Balance.Net;

      /**
       * Payins balance breakdown.
       */
      payins: Balance.Payins;

      /**
       * Payouts balance breakdown.
       */
      payouts: Balance.Payouts;
    }

    export namespace Balance {
      /**
       * Net balance breakdown.
       */
      export interface Net {
        /**
         * Actual amount as a string in the smallest currency unit, such as cents for USD.
         */
        actual: string;

        /**
         * Expected amount as a string in the smallest currency unit, such as cents for
         * USD.
         */
        expected: string;

        /**
         * Remaining amount as a string in the smallest currency unit, such as cents for
         * USD.
         */
        remaining: string;
      }

      /**
       * Payins balance breakdown.
       */
      export interface Payins {
        /**
         * Actual amount as a string in the smallest currency unit, such as cents for USD.
         */
        actual: string;

        /**
         * Expected amount as a string in the smallest currency unit, such as cents for
         * USD.
         */
        expected: string;

        /**
         * Remaining amount as a string in the smallest currency unit, such as cents for
         * USD.
         */
        remaining: string;
      }

      /**
       * Payouts balance breakdown.
       */
      export interface Payouts {
        /**
         * Actual amount as a string in the smallest currency unit, such as cents for USD.
         */
        actual: string;

        /**
         * Expected amount as a string in the smallest currency unit, such as cents for
         * USD.
         */
        expected: string;

        /**
         * Remaining amount as a string in the smallest currency unit, such as cents for
         * USD.
         */
        remaining: string;
      }
    }

    /**
     * A payment allocated to the invoice.
     */
    export interface Payment {
      /**
       * Amount allocated as a string in the smallest currency unit, such as cents for
       * USD.
       */
      amount: string;

      /**
       * ISO 4217 or crypto currency code.
       */
      currency:
        | 'ADA'
        | 'BTC'
        | 'DAI'
        | 'ETH'
        | 'SOL'
        | 'USDC'
        | 'USDT'
        | 'USDG'
        | 'EURC'
        | 'CADC'
        | 'CADT'
        | 'XLM'
        | 'UNI'
        | 'BCH'
        | 'LTC'
        | 'AAVE'
        | 'LINK'
        | 'MATIC'
        | 'PTS'
        | 'AED'
        | 'AFN'
        | 'ALL'
        | 'AMD'
        | 'ANG'
        | 'AOA'
        | 'ARS'
        | 'AUD'
        | 'AWG'
        | 'AZN'
        | 'BAM'
        | 'BBD'
        | 'BDT'
        | 'BGN'
        | 'BHD'
        | 'BIF'
        | 'BMD'
        | 'BND'
        | 'BOB'
        | 'BRL'
        | 'BSD'
        | 'BTN'
        | 'BWP'
        | 'BYR'
        | 'BZD'
        | 'CAD'
        | 'CDF'
        | 'CHF'
        | 'CLP'
        | 'CNY'
        | 'COP'
        | 'CRC'
        | 'CUC'
        | 'CUP'
        | 'CVE'
        | 'CZK'
        | 'DJF'
        | 'DKK'
        | 'DOP'
        | 'DZD'
        | 'EGP'
        | 'ERN'
        | 'ETB'
        | 'EUR'
        | 'FJD'
        | 'FKP'
        | 'GBP'
        | 'GEL'
        | 'GGP'
        | 'GHS'
        | 'GIP'
        | 'GMD'
        | 'GNF'
        | 'GTQ'
        | 'GYD'
        | 'HKD'
        | 'HNL'
        | 'HRK'
        | 'HTG'
        | 'HUF'
        | 'IDR'
        | 'ILS'
        | 'IMP'
        | 'INR'
        | 'IQD'
        | 'IRR'
        | 'ISK'
        | 'JMD'
        | 'JOD'
        | 'JPY'
        | 'KES'
        | 'KGS'
        | 'KHR'
        | 'KMF'
        | 'KPW'
        | 'KRW'
        | 'KWD'
        | 'KYD'
        | 'KZT'
        | 'LAK'
        | 'LBP'
        | 'LKR'
        | 'LRD'
        | 'LSL'
        | 'LYD'
        | 'MAD'
        | 'MDL'
        | 'MGA'
        | 'MKD'
        | 'MMK'
        | 'MNT'
        | 'MOP'
        | 'MUR'
        | 'MVR'
        | 'MWK'
        | 'MXN'
        | 'MYR'
        | 'MZN'
        | 'NAD'
        | 'NGN'
        | 'NIO'
        | 'NOK'
        | 'NPR'
        | 'NZD'
        | 'OMR'
        | 'PAB'
        | 'PEN'
        | 'PGK'
        | 'PHP'
        | 'PKR'
        | 'PLN'
        | 'PYG'
        | 'QAR'
        | 'RON'
        | 'RSD'
        | 'RUB'
        | 'RWF'
        | 'SAR'
        | 'SBD'
        | 'SCR'
        | 'SDG'
        | 'SEK'
        | 'SGD'
        | 'SHP'
        | 'SLL'
        | 'SOS'
        | 'SPL'
        | 'SRD'
        | 'SVC'
        | 'SYP'
        | 'STN'
        | 'SZL'
        | 'THB'
        | 'TJS'
        | 'TMT'
        | 'TND'
        | 'TOP'
        | 'TRY'
        | 'TTD'
        | 'TVD'
        | 'TWD'
        | 'TZS'
        | 'UAH'
        | 'UGX'
        | 'USD'
        | 'UYU'
        | 'UZS'
        | 'VEF'
        | 'VND'
        | 'VUV'
        | 'WST'
        | 'XAF'
        | 'XCD'
        | 'XOF'
        | 'XPF'
        | 'YER'
        | 'ZAR'
        | 'ZMW'
        | 'LOGICAL'
        | 'CUSTOM';

      /**
       * Timestamp when the parent transaction was posted. Uses ISO 8601 format.
       */
      posted: string;

      /**
       * Transaction the payment is applied to.
       */
      transaction: Payment.Transaction;

      /**
       * Type of the payment.
       */
      type: 'payin' | 'payout';

      /**
       * User associated with the payment.
       */
      user: Payment.User;
    }

    export namespace Payment {
      /**
       * Transaction the payment is applied to.
       */
      export interface Transaction {
        /**
         * FRAGMENT generated unique ID.
         */
        id: string;

        /**
         * User-provided unique ID.
         */
        external_id: string;

        /**
         * Tags from the parent transaction.
         */
        tags: Array<Transaction.Tag>;
      }

      export namespace Transaction {
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

    export interface User {
      /**
       * User-provided unique external ID.
       */
      id: string;

      /**
       * Per-currency balance breakdown for the user.
       */
      balances: Array<User.Balance>;

      /**
       * User-provided unique ID.
       */
      external_id: string;
    }

    export namespace User {
      export interface Balance {
        /**
         * ISO 4217 or crypto currency code.
         */
        currency: string;

        /**
         * Net balance breakdown.
         */
        net: Balance.Net;

        /**
         * Payins balance breakdown.
         */
        payins: Balance.Payins;

        /**
         * Payouts balance breakdown.
         */
        payouts: Balance.Payouts;
      }

      export namespace Balance {
        /**
         * Net balance breakdown.
         */
        export interface Net {
          /**
           * Actual amount as a string in the smallest currency unit, such as cents for USD.
           */
          actual: string;

          /**
           * Expected amount as a string in the smallest currency unit, such as cents for
           * USD.
           */
          expected: string;

          /**
           * Remaining amount as a string in the smallest currency unit, such as cents for
           * USD.
           */
          remaining: string;
        }

        /**
         * Payins balance breakdown.
         */
        export interface Payins {
          /**
           * Actual amount as a string in the smallest currency unit, such as cents for USD.
           */
          actual: string;

          /**
           * Expected amount as a string in the smallest currency unit, such as cents for
           * USD.
           */
          expected: string;

          /**
           * Remaining amount as a string in the smallest currency unit, such as cents for
           * USD.
           */
          remaining: string;
        }

        /**
         * Payouts balance breakdown.
         */
        export interface Payouts {
          /**
           * Actual amount as a string in the smallest currency unit, such as cents for USD.
           */
          actual: string;

          /**
           * Expected amount as a string in the smallest currency unit, such as cents for
           * USD.
           */
          expected: string;

          /**
           * Remaining amount as a string in the smallest currency unit, such as cents for
           * USD.
           */
          remaining: string;
        }
      }
    }
  }
}

export interface InvoiceUpdateResponse {
  /**
   * Invoice object.
   */
  data: Invoice;
}

export interface InvoiceListResponse {
  /**
   * List of invoices.
   */
  data: Array<Invoice>;
}

/**
 * Result of a batch invoice retrieval.
 */
export interface InvoiceCreateBatchGetResponse {
  /**
   * Result of a batch invoice retrieval.
   */
  data: InvoiceCreateBatchGetResponse.Data;
}

export namespace InvoiceCreateBatchGetResponse {
  /**
   * Result of a batch invoice retrieval.
   */
  export interface Data {
    /**
     * Invoices that were found, in request order.
     */
    invoices: Array<Data.Invoice>;

    /**
     * Ids from the request that did not match any invoice.
     */
    not_found: Array<string>;
  }

  export namespace Data {
    /**
     * Invoice with balance details.
     */
    export interface Invoice extends InvoicesAPI.Invoice {
      /**
       * Invoice-level balances by currency.
       */
      balances: Array<Invoice.Balance>;

      /**
       * Payments allocated to the invoice.
       */
      payments: Array<Invoice.Payment>;

      /**
       * Users involved in the invoice.
       */
      users: Array<Invoice.User>;
    }

    export namespace Invoice {
      export interface Balance {
        /**
         * ISO 4217 or crypto currency code.
         */
        currency: string;

        /**
         * Net balance breakdown.
         */
        net: Balance.Net;

        /**
         * Payins balance breakdown.
         */
        payins: Balance.Payins;

        /**
         * Payouts balance breakdown.
         */
        payouts: Balance.Payouts;
      }

      export namespace Balance {
        /**
         * Net balance breakdown.
         */
        export interface Net {
          /**
           * Actual amount as a string in the smallest currency unit, such as cents for USD.
           */
          actual: string;

          /**
           * Expected amount as a string in the smallest currency unit, such as cents for
           * USD.
           */
          expected: string;

          /**
           * Remaining amount as a string in the smallest currency unit, such as cents for
           * USD.
           */
          remaining: string;
        }

        /**
         * Payins balance breakdown.
         */
        export interface Payins {
          /**
           * Actual amount as a string in the smallest currency unit, such as cents for USD.
           */
          actual: string;

          /**
           * Expected amount as a string in the smallest currency unit, such as cents for
           * USD.
           */
          expected: string;

          /**
           * Remaining amount as a string in the smallest currency unit, such as cents for
           * USD.
           */
          remaining: string;
        }

        /**
         * Payouts balance breakdown.
         */
        export interface Payouts {
          /**
           * Actual amount as a string in the smallest currency unit, such as cents for USD.
           */
          actual: string;

          /**
           * Expected amount as a string in the smallest currency unit, such as cents for
           * USD.
           */
          expected: string;

          /**
           * Remaining amount as a string in the smallest currency unit, such as cents for
           * USD.
           */
          remaining: string;
        }
      }

      /**
       * A payment allocated to the invoice.
       */
      export interface Payment {
        /**
         * Amount allocated as a string in the smallest currency unit, such as cents for
         * USD.
         */
        amount: string;

        /**
         * ISO 4217 or crypto currency code.
         */
        currency:
          | 'ADA'
          | 'BTC'
          | 'DAI'
          | 'ETH'
          | 'SOL'
          | 'USDC'
          | 'USDT'
          | 'USDG'
          | 'EURC'
          | 'CADC'
          | 'CADT'
          | 'XLM'
          | 'UNI'
          | 'BCH'
          | 'LTC'
          | 'AAVE'
          | 'LINK'
          | 'MATIC'
          | 'PTS'
          | 'AED'
          | 'AFN'
          | 'ALL'
          | 'AMD'
          | 'ANG'
          | 'AOA'
          | 'ARS'
          | 'AUD'
          | 'AWG'
          | 'AZN'
          | 'BAM'
          | 'BBD'
          | 'BDT'
          | 'BGN'
          | 'BHD'
          | 'BIF'
          | 'BMD'
          | 'BND'
          | 'BOB'
          | 'BRL'
          | 'BSD'
          | 'BTN'
          | 'BWP'
          | 'BYR'
          | 'BZD'
          | 'CAD'
          | 'CDF'
          | 'CHF'
          | 'CLP'
          | 'CNY'
          | 'COP'
          | 'CRC'
          | 'CUC'
          | 'CUP'
          | 'CVE'
          | 'CZK'
          | 'DJF'
          | 'DKK'
          | 'DOP'
          | 'DZD'
          | 'EGP'
          | 'ERN'
          | 'ETB'
          | 'EUR'
          | 'FJD'
          | 'FKP'
          | 'GBP'
          | 'GEL'
          | 'GGP'
          | 'GHS'
          | 'GIP'
          | 'GMD'
          | 'GNF'
          | 'GTQ'
          | 'GYD'
          | 'HKD'
          | 'HNL'
          | 'HRK'
          | 'HTG'
          | 'HUF'
          | 'IDR'
          | 'ILS'
          | 'IMP'
          | 'INR'
          | 'IQD'
          | 'IRR'
          | 'ISK'
          | 'JMD'
          | 'JOD'
          | 'JPY'
          | 'KES'
          | 'KGS'
          | 'KHR'
          | 'KMF'
          | 'KPW'
          | 'KRW'
          | 'KWD'
          | 'KYD'
          | 'KZT'
          | 'LAK'
          | 'LBP'
          | 'LKR'
          | 'LRD'
          | 'LSL'
          | 'LYD'
          | 'MAD'
          | 'MDL'
          | 'MGA'
          | 'MKD'
          | 'MMK'
          | 'MNT'
          | 'MOP'
          | 'MUR'
          | 'MVR'
          | 'MWK'
          | 'MXN'
          | 'MYR'
          | 'MZN'
          | 'NAD'
          | 'NGN'
          | 'NIO'
          | 'NOK'
          | 'NPR'
          | 'NZD'
          | 'OMR'
          | 'PAB'
          | 'PEN'
          | 'PGK'
          | 'PHP'
          | 'PKR'
          | 'PLN'
          | 'PYG'
          | 'QAR'
          | 'RON'
          | 'RSD'
          | 'RUB'
          | 'RWF'
          | 'SAR'
          | 'SBD'
          | 'SCR'
          | 'SDG'
          | 'SEK'
          | 'SGD'
          | 'SHP'
          | 'SLL'
          | 'SOS'
          | 'SPL'
          | 'SRD'
          | 'SVC'
          | 'SYP'
          | 'STN'
          | 'SZL'
          | 'THB'
          | 'TJS'
          | 'TMT'
          | 'TND'
          | 'TOP'
          | 'TRY'
          | 'TTD'
          | 'TVD'
          | 'TWD'
          | 'TZS'
          | 'UAH'
          | 'UGX'
          | 'USD'
          | 'UYU'
          | 'UZS'
          | 'VEF'
          | 'VND'
          | 'VUV'
          | 'WST'
          | 'XAF'
          | 'XCD'
          | 'XOF'
          | 'XPF'
          | 'YER'
          | 'ZAR'
          | 'ZMW'
          | 'LOGICAL'
          | 'CUSTOM';

        /**
         * Timestamp when the parent transaction was posted. Uses ISO 8601 format.
         */
        posted: string;

        /**
         * Transaction the payment is applied to.
         */
        transaction: Payment.Transaction;

        /**
         * Type of the payment.
         */
        type: 'payin' | 'payout';

        /**
         * User associated with the payment.
         */
        user: Payment.User;
      }

      export namespace Payment {
        /**
         * Transaction the payment is applied to.
         */
        export interface Transaction {
          /**
           * FRAGMENT generated unique ID.
           */
          id: string;

          /**
           * User-provided unique ID.
           */
          external_id: string;

          /**
           * Tags from the parent transaction.
           */
          tags: Array<Transaction.Tag>;
        }

        export namespace Transaction {
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

      export interface User {
        /**
         * User-provided unique external ID.
         */
        id: string;

        /**
         * Per-currency balance breakdown for the user.
         */
        balances: Array<User.Balance>;

        /**
         * User-provided unique ID.
         */
        external_id: string;
      }

      export namespace User {
        export interface Balance {
          /**
           * ISO 4217 or crypto currency code.
           */
          currency: string;

          /**
           * Net balance breakdown.
           */
          net: Balance.Net;

          /**
           * Payins balance breakdown.
           */
          payins: Balance.Payins;

          /**
           * Payouts balance breakdown.
           */
          payouts: Balance.Payouts;
        }

        export namespace Balance {
          /**
           * Net balance breakdown.
           */
          export interface Net {
            /**
             * Actual amount as a string in the smallest currency unit, such as cents for USD.
             */
            actual: string;

            /**
             * Expected amount as a string in the smallest currency unit, such as cents for
             * USD.
             */
            expected: string;

            /**
             * Remaining amount as a string in the smallest currency unit, such as cents for
             * USD.
             */
            remaining: string;
          }

          /**
           * Payins balance breakdown.
           */
          export interface Payins {
            /**
             * Actual amount as a string in the smallest currency unit, such as cents for USD.
             */
            actual: string;

            /**
             * Expected amount as a string in the smallest currency unit, such as cents for
             * USD.
             */
            expected: string;

            /**
             * Remaining amount as a string in the smallest currency unit, such as cents for
             * USD.
             */
            remaining: string;
          }

          /**
           * Payouts balance breakdown.
           */
          export interface Payouts {
            /**
             * Actual amount as a string in the smallest currency unit, such as cents for USD.
             */
            actual: string;

            /**
             * Expected amount as a string in the smallest currency unit, such as cents for
             * USD.
             */
            expected: string;

            /**
             * Remaining amount as a string in the smallest currency unit, such as cents for
             * USD.
             */
            remaining: string;
          }
        }
      }
    }
  }
}

export interface InvoiceListHistoryResponse {
  /**
   * Version history of the invoice.
   */
  data: Array<Invoice>;
}

/**
 * Search results for invoices.
 */
export interface InvoiceSearchResponse {
  /**
   * Search results for invoices.
   */
  data: InvoiceSearchResponse.Data;
}

export namespace InvoiceSearchResponse {
  /**
   * Search results for invoices.
   */
  export interface Data {
    /**
     * Invoices matching the search criteria.
     */
    invoices: Array<Data.Invoice>;

    /**
     * Pagination cursors.
     */
    page_info: Data.PageInfo;
  }

  export namespace Data {
    /**
     * Invoice with balance details.
     */
    export interface Invoice extends InvoicesAPI.Invoice {
      /**
       * Invoice-level balances by currency.
       */
      balances: Array<Invoice.Balance>;

      /**
       * Payments allocated to the invoice.
       */
      payments: Array<Invoice.Payment>;

      /**
       * Users involved in the invoice.
       */
      users: Array<Invoice.User>;
    }

    export namespace Invoice {
      export interface Balance {
        /**
         * ISO 4217 or crypto currency code.
         */
        currency: string;

        /**
         * Net balance breakdown.
         */
        net: Balance.Net;

        /**
         * Payins balance breakdown.
         */
        payins: Balance.Payins;

        /**
         * Payouts balance breakdown.
         */
        payouts: Balance.Payouts;
      }

      export namespace Balance {
        /**
         * Net balance breakdown.
         */
        export interface Net {
          /**
           * Actual amount as a string in the smallest currency unit, such as cents for USD.
           */
          actual: string;

          /**
           * Expected amount as a string in the smallest currency unit, such as cents for
           * USD.
           */
          expected: string;

          /**
           * Remaining amount as a string in the smallest currency unit, such as cents for
           * USD.
           */
          remaining: string;
        }

        /**
         * Payins balance breakdown.
         */
        export interface Payins {
          /**
           * Actual amount as a string in the smallest currency unit, such as cents for USD.
           */
          actual: string;

          /**
           * Expected amount as a string in the smallest currency unit, such as cents for
           * USD.
           */
          expected: string;

          /**
           * Remaining amount as a string in the smallest currency unit, such as cents for
           * USD.
           */
          remaining: string;
        }

        /**
         * Payouts balance breakdown.
         */
        export interface Payouts {
          /**
           * Actual amount as a string in the smallest currency unit, such as cents for USD.
           */
          actual: string;

          /**
           * Expected amount as a string in the smallest currency unit, such as cents for
           * USD.
           */
          expected: string;

          /**
           * Remaining amount as a string in the smallest currency unit, such as cents for
           * USD.
           */
          remaining: string;
        }
      }

      /**
       * A payment allocated to the invoice.
       */
      export interface Payment {
        /**
         * Amount allocated as a string in the smallest currency unit, such as cents for
         * USD.
         */
        amount: string;

        /**
         * ISO 4217 or crypto currency code.
         */
        currency:
          | 'ADA'
          | 'BTC'
          | 'DAI'
          | 'ETH'
          | 'SOL'
          | 'USDC'
          | 'USDT'
          | 'USDG'
          | 'EURC'
          | 'CADC'
          | 'CADT'
          | 'XLM'
          | 'UNI'
          | 'BCH'
          | 'LTC'
          | 'AAVE'
          | 'LINK'
          | 'MATIC'
          | 'PTS'
          | 'AED'
          | 'AFN'
          | 'ALL'
          | 'AMD'
          | 'ANG'
          | 'AOA'
          | 'ARS'
          | 'AUD'
          | 'AWG'
          | 'AZN'
          | 'BAM'
          | 'BBD'
          | 'BDT'
          | 'BGN'
          | 'BHD'
          | 'BIF'
          | 'BMD'
          | 'BND'
          | 'BOB'
          | 'BRL'
          | 'BSD'
          | 'BTN'
          | 'BWP'
          | 'BYR'
          | 'BZD'
          | 'CAD'
          | 'CDF'
          | 'CHF'
          | 'CLP'
          | 'CNY'
          | 'COP'
          | 'CRC'
          | 'CUC'
          | 'CUP'
          | 'CVE'
          | 'CZK'
          | 'DJF'
          | 'DKK'
          | 'DOP'
          | 'DZD'
          | 'EGP'
          | 'ERN'
          | 'ETB'
          | 'EUR'
          | 'FJD'
          | 'FKP'
          | 'GBP'
          | 'GEL'
          | 'GGP'
          | 'GHS'
          | 'GIP'
          | 'GMD'
          | 'GNF'
          | 'GTQ'
          | 'GYD'
          | 'HKD'
          | 'HNL'
          | 'HRK'
          | 'HTG'
          | 'HUF'
          | 'IDR'
          | 'ILS'
          | 'IMP'
          | 'INR'
          | 'IQD'
          | 'IRR'
          | 'ISK'
          | 'JMD'
          | 'JOD'
          | 'JPY'
          | 'KES'
          | 'KGS'
          | 'KHR'
          | 'KMF'
          | 'KPW'
          | 'KRW'
          | 'KWD'
          | 'KYD'
          | 'KZT'
          | 'LAK'
          | 'LBP'
          | 'LKR'
          | 'LRD'
          | 'LSL'
          | 'LYD'
          | 'MAD'
          | 'MDL'
          | 'MGA'
          | 'MKD'
          | 'MMK'
          | 'MNT'
          | 'MOP'
          | 'MUR'
          | 'MVR'
          | 'MWK'
          | 'MXN'
          | 'MYR'
          | 'MZN'
          | 'NAD'
          | 'NGN'
          | 'NIO'
          | 'NOK'
          | 'NPR'
          | 'NZD'
          | 'OMR'
          | 'PAB'
          | 'PEN'
          | 'PGK'
          | 'PHP'
          | 'PKR'
          | 'PLN'
          | 'PYG'
          | 'QAR'
          | 'RON'
          | 'RSD'
          | 'RUB'
          | 'RWF'
          | 'SAR'
          | 'SBD'
          | 'SCR'
          | 'SDG'
          | 'SEK'
          | 'SGD'
          | 'SHP'
          | 'SLL'
          | 'SOS'
          | 'SPL'
          | 'SRD'
          | 'SVC'
          | 'SYP'
          | 'STN'
          | 'SZL'
          | 'THB'
          | 'TJS'
          | 'TMT'
          | 'TND'
          | 'TOP'
          | 'TRY'
          | 'TTD'
          | 'TVD'
          | 'TWD'
          | 'TZS'
          | 'UAH'
          | 'UGX'
          | 'USD'
          | 'UYU'
          | 'UZS'
          | 'VEF'
          | 'VND'
          | 'VUV'
          | 'WST'
          | 'XAF'
          | 'XCD'
          | 'XOF'
          | 'XPF'
          | 'YER'
          | 'ZAR'
          | 'ZMW'
          | 'LOGICAL'
          | 'CUSTOM';

        /**
         * Timestamp when the parent transaction was posted. Uses ISO 8601 format.
         */
        posted: string;

        /**
         * Transaction the payment is applied to.
         */
        transaction: Payment.Transaction;

        /**
         * Type of the payment.
         */
        type: 'payin' | 'payout';

        /**
         * User associated with the payment.
         */
        user: Payment.User;
      }

      export namespace Payment {
        /**
         * Transaction the payment is applied to.
         */
        export interface Transaction {
          /**
           * FRAGMENT generated unique ID.
           */
          id: string;

          /**
           * User-provided unique ID.
           */
          external_id: string;

          /**
           * Tags from the parent transaction.
           */
          tags: Array<Transaction.Tag>;
        }

        export namespace Transaction {
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

      export interface User {
        /**
         * User-provided unique external ID.
         */
        id: string;

        /**
         * Per-currency balance breakdown for the user.
         */
        balances: Array<User.Balance>;

        /**
         * User-provided unique ID.
         */
        external_id: string;
      }

      export namespace User {
        export interface Balance {
          /**
           * ISO 4217 or crypto currency code.
           */
          currency: string;

          /**
           * Net balance breakdown.
           */
          net: Balance.Net;

          /**
           * Payins balance breakdown.
           */
          payins: Balance.Payins;

          /**
           * Payouts balance breakdown.
           */
          payouts: Balance.Payouts;
        }

        export namespace Balance {
          /**
           * Net balance breakdown.
           */
          export interface Net {
            /**
             * Actual amount as a string in the smallest currency unit, such as cents for USD.
             */
            actual: string;

            /**
             * Expected amount as a string in the smallest currency unit, such as cents for
             * USD.
             */
            expected: string;

            /**
             * Remaining amount as a string in the smallest currency unit, such as cents for
             * USD.
             */
            remaining: string;
          }

          /**
           * Payins balance breakdown.
           */
          export interface Payins {
            /**
             * Actual amount as a string in the smallest currency unit, such as cents for USD.
             */
            actual: string;

            /**
             * Expected amount as a string in the smallest currency unit, such as cents for
             * USD.
             */
            expected: string;

            /**
             * Remaining amount as a string in the smallest currency unit, such as cents for
             * USD.
             */
            remaining: string;
          }

          /**
           * Payouts balance breakdown.
           */
          export interface Payouts {
            /**
             * Actual amount as a string in the smallest currency unit, such as cents for USD.
             */
            actual: string;

            /**
             * Expected amount as a string in the smallest currency unit, such as cents for
             * USD.
             */
            expected: string;

            /**
             * Remaining amount as a string in the smallest currency unit, such as cents for
             * USD.
             */
            remaining: string;
          }
        }
      }
    }

    /**
     * Pagination cursors.
     */
    export interface PageInfo {
      /**
       * Cursor to fetch the next page of results.
       */
      next_cursor?: string;
    }
  }
}

export interface InvoiceCreateParams {
  /**
   * Unique ID for the invoice.
   */
  invoice_id: string;

  /**
   * Line items to create with the invoice.
   */
  line_items: Array<InvoiceCreateParams.LineItem>;

  /**
   * Tags for the invoice.
   */
  tags?: Array<InvoiceCreateParams.Tag>;
}

export namespace InvoiceCreateParams {
  /**
   * Data to create a line item.
   */
  export interface LineItem {
    /**
     * Description of the line item.
     */
    description: string;

    /**
     * Unique identifier for the product.
     */
    product_id: string;

    /**
     * Type of the line item.
     */
    type: 'payin' | 'payout';

    /**
     * Identifies a user by `id` or `external_id`.
     */
    user: LineItem.ID | LineItem.ExternalID;

    /**
     * @deprecated Total amount as a string in the smallest currency unit, such as
     * cents for USD. Deprecated, use price instead.
     */
    amount?: string;

    /**
     * ISO 4217 or crypto currency code.
     */
    currency_code?:
      | 'ADA'
      | 'BTC'
      | 'DAI'
      | 'ETH'
      | 'SOL'
      | 'USDC'
      | 'USDT'
      | 'USDG'
      | 'EURC'
      | 'CADC'
      | 'CADT'
      | 'XLM'
      | 'UNI'
      | 'BCH'
      | 'LTC'
      | 'AAVE'
      | 'LINK'
      | 'MATIC'
      | 'PTS'
      | 'AED'
      | 'AFN'
      | 'ALL'
      | 'AMD'
      | 'ANG'
      | 'AOA'
      | 'ARS'
      | 'AUD'
      | 'AWG'
      | 'AZN'
      | 'BAM'
      | 'BBD'
      | 'BDT'
      | 'BGN'
      | 'BHD'
      | 'BIF'
      | 'BMD'
      | 'BND'
      | 'BOB'
      | 'BRL'
      | 'BSD'
      | 'BTN'
      | 'BWP'
      | 'BYR'
      | 'BZD'
      | 'CAD'
      | 'CDF'
      | 'CHF'
      | 'CLP'
      | 'CNY'
      | 'COP'
      | 'CRC'
      | 'CUC'
      | 'CUP'
      | 'CVE'
      | 'CZK'
      | 'DJF'
      | 'DKK'
      | 'DOP'
      | 'DZD'
      | 'EGP'
      | 'ERN'
      | 'ETB'
      | 'EUR'
      | 'FJD'
      | 'FKP'
      | 'GBP'
      | 'GEL'
      | 'GGP'
      | 'GHS'
      | 'GIP'
      | 'GMD'
      | 'GNF'
      | 'GTQ'
      | 'GYD'
      | 'HKD'
      | 'HNL'
      | 'HRK'
      | 'HTG'
      | 'HUF'
      | 'IDR'
      | 'ILS'
      | 'IMP'
      | 'INR'
      | 'IQD'
      | 'IRR'
      | 'ISK'
      | 'JMD'
      | 'JOD'
      | 'JPY'
      | 'KES'
      | 'KGS'
      | 'KHR'
      | 'KMF'
      | 'KPW'
      | 'KRW'
      | 'KWD'
      | 'KYD'
      | 'KZT'
      | 'LAK'
      | 'LBP'
      | 'LKR'
      | 'LRD'
      | 'LSL'
      | 'LYD'
      | 'MAD'
      | 'MDL'
      | 'MGA'
      | 'MKD'
      | 'MMK'
      | 'MNT'
      | 'MOP'
      | 'MUR'
      | 'MVR'
      | 'MWK'
      | 'MXN'
      | 'MYR'
      | 'MZN'
      | 'NAD'
      | 'NGN'
      | 'NIO'
      | 'NOK'
      | 'NPR'
      | 'NZD'
      | 'OMR'
      | 'PAB'
      | 'PEN'
      | 'PGK'
      | 'PHP'
      | 'PKR'
      | 'PLN'
      | 'PYG'
      | 'QAR'
      | 'RON'
      | 'RSD'
      | 'RUB'
      | 'RWF'
      | 'SAR'
      | 'SBD'
      | 'SCR'
      | 'SDG'
      | 'SEK'
      | 'SGD'
      | 'SHP'
      | 'SLL'
      | 'SOS'
      | 'SPL'
      | 'SRD'
      | 'SVC'
      | 'SYP'
      | 'STN'
      | 'SZL'
      | 'THB'
      | 'TJS'
      | 'TMT'
      | 'TND'
      | 'TOP'
      | 'TRY'
      | 'TTD'
      | 'TVD'
      | 'TWD'
      | 'TZS'
      | 'UAH'
      | 'UGX'
      | 'USD'
      | 'UYU'
      | 'UZS'
      | 'VEF'
      | 'VND'
      | 'VUV'
      | 'WST'
      | 'XAF'
      | 'XCD'
      | 'XOF'
      | 'XPF'
      | 'YER'
      | 'ZAR'
      | 'ZMW'
      | 'LOGICAL'
      | 'CUSTOM';

    /**
     * Price breakdown. Provide amount, or unit_price and quantity, or all three.
     */
    price?: LineItem.Price;

    /**
     * Tags for the line item.
     */
    tags?: Array<LineItem.Tag>;
  }

  export namespace LineItem {
    export interface ID {
      /**
       * FRAGMENT generated unique ID.
       */
      id: string;
    }

    export interface ExternalID {
      /**
       * User-provided unique ID.
       */
      external_id: string;
    }

    /**
     * Price breakdown. Provide amount, or unit_price and quantity, or all three.
     */
    export interface Price {
      /**
       * Total amount as a string in the smallest currency unit, such as cents for USD.
       * Required if unit_price and quantity are not provided.
       */
      amount?: string;

      /**
       * Number of units for the line item.
       */
      quantity?: number;

      /**
       * Price per unit as a string in the smallest currency unit, such as cents for USD.
       */
      unit_price?: string;
    }

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

export interface InvoiceUpdateParams {
  /**
   * Current version of the invoice. Must match the stored version.
   */
  current_invoice_version: number;

  /**
   * Line item updates.
   */
  line_items?: InvoiceUpdateParams.LineItems;

  /**
   * Tag updates.
   */
  tags?: InvoiceUpdateParams.Tags;
}

export namespace InvoiceUpdateParams {
  /**
   * Line item updates.
   */
  export interface LineItems {
    /**
     * Line items to add to the invoice.
     */
    create?: Array<LineItems.Create>;

    /**
     * Line items to remove from the invoice.
     */
    delete?: Array<LineItems.Delete>;

    /**
     * Existing line items to update.
     */
    update?: Array<LineItems.Update>;
  }

  export namespace LineItems {
    /**
     * Data to create a line item.
     */
    export interface Create {
      /**
       * Description of the line item.
       */
      description: string;

      /**
       * Unique identifier for the product.
       */
      product_id: string;

      /**
       * Type of the line item.
       */
      type: 'payin' | 'payout';

      /**
       * Identifies a user by `id` or `external_id`.
       */
      user: Create.ID | Create.ExternalID;

      /**
       * @deprecated Total amount as a string in the smallest currency unit, such as
       * cents for USD. Deprecated, use price instead.
       */
      amount?: string;

      /**
       * ISO 4217 or crypto currency code.
       */
      currency_code?:
        | 'ADA'
        | 'BTC'
        | 'DAI'
        | 'ETH'
        | 'SOL'
        | 'USDC'
        | 'USDT'
        | 'USDG'
        | 'EURC'
        | 'CADC'
        | 'CADT'
        | 'XLM'
        | 'UNI'
        | 'BCH'
        | 'LTC'
        | 'AAVE'
        | 'LINK'
        | 'MATIC'
        | 'PTS'
        | 'AED'
        | 'AFN'
        | 'ALL'
        | 'AMD'
        | 'ANG'
        | 'AOA'
        | 'ARS'
        | 'AUD'
        | 'AWG'
        | 'AZN'
        | 'BAM'
        | 'BBD'
        | 'BDT'
        | 'BGN'
        | 'BHD'
        | 'BIF'
        | 'BMD'
        | 'BND'
        | 'BOB'
        | 'BRL'
        | 'BSD'
        | 'BTN'
        | 'BWP'
        | 'BYR'
        | 'BZD'
        | 'CAD'
        | 'CDF'
        | 'CHF'
        | 'CLP'
        | 'CNY'
        | 'COP'
        | 'CRC'
        | 'CUC'
        | 'CUP'
        | 'CVE'
        | 'CZK'
        | 'DJF'
        | 'DKK'
        | 'DOP'
        | 'DZD'
        | 'EGP'
        | 'ERN'
        | 'ETB'
        | 'EUR'
        | 'FJD'
        | 'FKP'
        | 'GBP'
        | 'GEL'
        | 'GGP'
        | 'GHS'
        | 'GIP'
        | 'GMD'
        | 'GNF'
        | 'GTQ'
        | 'GYD'
        | 'HKD'
        | 'HNL'
        | 'HRK'
        | 'HTG'
        | 'HUF'
        | 'IDR'
        | 'ILS'
        | 'IMP'
        | 'INR'
        | 'IQD'
        | 'IRR'
        | 'ISK'
        | 'JMD'
        | 'JOD'
        | 'JPY'
        | 'KES'
        | 'KGS'
        | 'KHR'
        | 'KMF'
        | 'KPW'
        | 'KRW'
        | 'KWD'
        | 'KYD'
        | 'KZT'
        | 'LAK'
        | 'LBP'
        | 'LKR'
        | 'LRD'
        | 'LSL'
        | 'LYD'
        | 'MAD'
        | 'MDL'
        | 'MGA'
        | 'MKD'
        | 'MMK'
        | 'MNT'
        | 'MOP'
        | 'MUR'
        | 'MVR'
        | 'MWK'
        | 'MXN'
        | 'MYR'
        | 'MZN'
        | 'NAD'
        | 'NGN'
        | 'NIO'
        | 'NOK'
        | 'NPR'
        | 'NZD'
        | 'OMR'
        | 'PAB'
        | 'PEN'
        | 'PGK'
        | 'PHP'
        | 'PKR'
        | 'PLN'
        | 'PYG'
        | 'QAR'
        | 'RON'
        | 'RSD'
        | 'RUB'
        | 'RWF'
        | 'SAR'
        | 'SBD'
        | 'SCR'
        | 'SDG'
        | 'SEK'
        | 'SGD'
        | 'SHP'
        | 'SLL'
        | 'SOS'
        | 'SPL'
        | 'SRD'
        | 'SVC'
        | 'SYP'
        | 'STN'
        | 'SZL'
        | 'THB'
        | 'TJS'
        | 'TMT'
        | 'TND'
        | 'TOP'
        | 'TRY'
        | 'TTD'
        | 'TVD'
        | 'TWD'
        | 'TZS'
        | 'UAH'
        | 'UGX'
        | 'USD'
        | 'UYU'
        | 'UZS'
        | 'VEF'
        | 'VND'
        | 'VUV'
        | 'WST'
        | 'XAF'
        | 'XCD'
        | 'XOF'
        | 'XPF'
        | 'YER'
        | 'ZAR'
        | 'ZMW'
        | 'LOGICAL'
        | 'CUSTOM';

      /**
       * Price breakdown. Provide amount, or unit_price and quantity, or all three.
       */
      price?: Create.Price;

      /**
       * Tags for the line item.
       */
      tags?: Array<Create.Tag>;
    }

    export namespace Create {
      export interface ID {
        /**
         * FRAGMENT generated unique ID.
         */
        id: string;
      }

      export interface ExternalID {
        /**
         * User-provided unique ID.
         */
        external_id: string;
      }

      /**
       * Price breakdown. Provide amount, or unit_price and quantity, or all three.
       */
      export interface Price {
        /**
         * Total amount as a string in the smallest currency unit, such as cents for USD.
         * Required if unit_price and quantity are not provided.
         */
        amount?: string;

        /**
         * Number of units for the line item.
         */
        quantity?: number;

        /**
         * Price per unit as a string in the smallest currency unit, such as cents for USD.
         */
        unit_price?: string;
      }

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

    export interface Delete {
      /**
       * Unique identifier for the line item to delete.
       */
      id: string;
    }

    /**
     * Data for updating a line item.
     */
    export interface Update {
      /**
       * Unique identifier for the line item to update.
       */
      id: string;

      description?: string;

      price?: Update.Price;

      /**
       * Tag updates.
       */
      tags?: Update.Tags;
    }

    export namespace Update {
      export interface Price {
        /**
         * Number of units for the line item.
         */
        quantity: number;

        /**
         * Price per unit as a string in the smallest currency unit, such as cents for USD.
         */
        unit_price: string;

        /**
         * Total amount as a string in the smallest currency unit, such as cents for USD.
         */
        amount?: string;
      }

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
  }

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

export interface InvoiceCreateBatchGetParams {
  /**
   * Invoice ids to retrieve. Up to 200 per request.
   */
  ids: Array<string>;
}

export interface InvoiceSearchParams {
  /**
   * Filter criteria for the search.
   */
  filter: InvoiceSearchParams.Filter;

  /**
   * Pagination parameters.
   */
  page_info?: InvoiceSearchParams.PageInfo;
}

export namespace InvoiceSearchParams {
  /**
   * Filter criteria for the search.
   */
  export interface Filter {
    /**
     * Filter by invoice creation timestamp. When both `after` and `before` are
     * provided, results must fall in the range.
     */
    created?: Filter.Created;

    /**
     * Filter by invoice status. `open` returns invoices with non-zero clearing account
     * balances. Pagination is disabled when this filter is set; any `page_info`
     * provided in the request is ignored.
     */
    status?: 'open';

    /**
     * Tag-based filter criteria. When both `any` and `all` are provided, results must
     * match every entry in `all` AND at least one entry in `any`.
     */
    tags?: Filter.Tags;

    /**
     * Filter invoices by tags on transactions allocated to them. Returns invoices that
     * have at least one allocated transaction matching the specified tags.
     */
    transaction_tags?: Filter.TransactionTags;

    /**
     * Returns invoices where at least one line item user, optionally restricted to
     * users matching `user_tags`, has a per-invoice net remaining balance satisfying
     * `net_remaining_balance` on any currency. Pagination is disabled when this filter
     * is set; any `page_info` provided in the request is ignored.
     */
    user_tag_and_balance?: Filter.UserTagAndBalance;

    /**
     * Line item user filter criteria. When both `any` and `all` are provided, results
     * must match every entry in `all` AND at least one entry in `any`.
     */
    users?: Filter.Users;
  }

  export namespace Filter {
    /**
     * Filter by invoice creation timestamp. When both `after` and `before` are
     * provided, results must fall in the range.
     */
    export interface Created {
      /**
       * Returns invoices created at or after the timestamp. ISO 8601 datetime.
       */
      after?: string;

      /**
       * Returns invoices created at or before the timestamp. ISO 8601 datetime.
       */
      before?: string;
    }

    /**
     * Tag-based filter criteria. When both `any` and `all` are provided, results must
     * match every entry in `all` AND at least one entry in `any`.
     */
    export interface Tags {
      /**
       * Returns invoices matching every specified tag, using AND logic.
       */
      all?: Array<Tags.All>;

      /**
       * Returns invoices matching at least one of the specified tags, using OR logic.
       */
      any?: Array<Tags.Any>;
    }

    export namespace Tags {
      /**
       * A tag filter.
       */
      export interface All {
        /**
         * Tag key to filter on. Must be an exact match; wildcards are not supported.
         */
        key: string;

        /**
         * Tag value pattern to filter on. Supports wildcards: `*` matches any characters,
         * `?` matches a single character. Use `\*` or `\?` to match literal asterisks or
         * question marks. Use `*` to match any value for the given key.
         */
        value: string;
      }

      /**
       * A tag filter.
       */
      export interface Any {
        /**
         * Tag key to filter on. Must be an exact match; wildcards are not supported.
         */
        key: string;

        /**
         * Tag value pattern to filter on. Supports wildcards: `*` matches any characters,
         * `?` matches a single character. Use `\*` or `\?` to match literal asterisks or
         * question marks. Use `*` to match any value for the given key.
         */
        value: string;
      }
    }

    /**
     * Filter invoices by tags on transactions allocated to them. Returns invoices that
     * have at least one allocated transaction matching the specified tags.
     */
    export interface TransactionTags {
      /**
       * Returns transactions matching every specified tag, using AND logic.
       */
      all?: Array<TransactionTags.All>;

      /**
       * Returns transactions matching at least one of the specified tags, using OR
       * logic.
       */
      any?: Array<TransactionTags.Any>;
    }

    export namespace TransactionTags {
      /**
       * A tag filter.
       */
      export interface All {
        /**
         * Tag key to filter on. Must be an exact match; wildcards are not supported.
         */
        key: string;

        /**
         * Tag value pattern to filter on. Supports wildcards: `*` matches any characters,
         * `?` matches a single character. Use `\*` or `\?` to match literal asterisks or
         * question marks. Use `*` to match any value for the given key.
         */
        value: string;
      }

      /**
       * A tag filter.
       */
      export interface Any {
        /**
         * Tag key to filter on. Must be an exact match; wildcards are not supported.
         */
        key: string;

        /**
         * Tag value pattern to filter on. Supports wildcards: `*` matches any characters,
         * `?` matches a single character. Use `\*` or `\?` to match literal asterisks or
         * question marks. Use `*` to match any value for the given key.
         */
        value: string;
      }
    }

    /**
     * Returns invoices where at least one line item user, optionally restricted to
     * users matching `user_tags`, has a per-invoice net remaining balance satisfying
     * `net_remaining_balance` on any currency. Pagination is disabled when this filter
     * is set; any `page_info` provided in the request is ignored.
     */
    export interface UserTagAndBalance {
      /**
       * Numeric comparator for the per-user net remaining balance on the invoice.
       * Multiple keys combine with AND logic.
       */
      net_remaining_balance: UserTagAndBalance.NetRemainingBalance;

      /**
       * Tag-based filter criteria. When both `any` and `all` are provided, results must
       * match every entry in `all` AND at least one entry in `any`.
       */
      user_tags?: UserTagAndBalance.UserTags;
    }

    export namespace UserTagAndBalance {
      /**
       * Numeric comparator for the per-user net remaining balance on the invoice.
       * Multiple keys combine with AND logic.
       */
      export interface NetRemainingBalance {
        /**
         * Equal to. Decimal integer string in the smallest currency unit, such as cents
         * for USD.
         */
        eq?: string;

        /**
         * Strictly greater than. Decimal integer string in the smallest currency unit,
         * such as cents for USD.
         */
        gt?: string;

        /**
         * Greater than or equal to. Decimal integer string in the smallest currency unit,
         * such as cents for USD.
         */
        gte?: string;

        /**
         * Strictly less than. Decimal integer string in the smallest currency unit, such
         * as cents for USD.
         */
        lt?: string;

        /**
         * Less than or equal to. Decimal integer string in the smallest currency unit,
         * such as cents for USD.
         */
        lte?: string;

        /**
         * Not equal to. Decimal integer string in the smallest currency unit, such as
         * cents for USD.
         */
        ne?: string;
      }

      /**
       * Tag-based filter criteria. When both `any` and `all` are provided, results must
       * match every entry in `all` AND at least one entry in `any`.
       */
      export interface UserTags {
        /**
         * Returns users matching every specified tag, using AND logic.
         */
        all?: Array<UserTags.All>;

        /**
         * Returns users matching at least one of the specified tags, using OR logic.
         */
        any?: Array<UserTags.Any>;

        /**
         * Returns users that do not match any of the specified tags.
         */
        not_any?: Array<UserTags.NotAny>;
      }

      export namespace UserTags {
        /**
         * A tag filter.
         */
        export interface All {
          /**
           * Tag key to filter on. Must be an exact match; wildcards are not supported.
           */
          key: string;

          /**
           * Tag value pattern to filter on. Supports wildcards: `*` matches any characters,
           * `?` matches a single character. Use `\*` or `\?` to match literal asterisks or
           * question marks. Use `*` to match any value for the given key.
           */
          value: string;
        }

        /**
         * A tag filter.
         */
        export interface Any {
          /**
           * Tag key to filter on. Must be an exact match; wildcards are not supported.
           */
          key: string;

          /**
           * Tag value pattern to filter on. Supports wildcards: `*` matches any characters,
           * `?` matches a single character. Use `\*` or `\?` to match literal asterisks or
           * question marks. Use `*` to match any value for the given key.
           */
          value: string;
        }

        /**
         * A tag filter.
         */
        export interface NotAny {
          /**
           * Tag key to filter on. Must be an exact match; wildcards are not supported.
           */
          key: string;

          /**
           * Tag value pattern to filter on. Supports wildcards: `*` matches any characters,
           * `?` matches a single character. Use `\*` or `\?` to match literal asterisks or
           * question marks. Use `*` to match any value for the given key.
           */
          value: string;
        }
      }
    }

    /**
     * Line item user filter criteria. When both `any` and `all` are provided, results
     * must match every entry in `all` AND at least one entry in `any`.
     */
    export interface Users {
      /**
       * Returns invoices matching every specified line item user, using AND logic.
       */
      all?: Array<Users.ID | Users.ExternalID>;

      /**
       * Returns invoices matching at least one of the specified line item users, using
       * OR logic.
       */
      any?: Array<Users.ID | Users.ExternalID>;
    }

    export namespace Users {
      export interface ID {
        /**
         * FRAGMENT generated unique ID.
         */
        id: string;
      }

      export interface ExternalID {
        /**
         * User-provided unique ID.
         */
        external_id: string;
      }

      export interface ID {
        /**
         * FRAGMENT generated unique ID.
         */
        id: string;
      }

      export interface ExternalID {
        /**
         * User-provided unique ID.
         */
        external_id: string;
      }
    }
  }

  /**
   * Pagination parameters.
   */
  export interface PageInfo {
    /**
     * Cursor for fetching the next page of results.
     */
    after?: string;

    /**
     * Number of results to return. Defaults to 20.
     */
    limit?: number;
  }
}

export declare namespace Invoices {
  export {
    type Invoice as Invoice,
    type InvoiceCreateResponse as InvoiceCreateResponse,
    type InvoiceRetrieveResponse as InvoiceRetrieveResponse,
    type InvoiceUpdateResponse as InvoiceUpdateResponse,
    type InvoiceListResponse as InvoiceListResponse,
    type InvoiceCreateBatchGetResponse as InvoiceCreateBatchGetResponse,
    type InvoiceListHistoryResponse as InvoiceListHistoryResponse,
    type InvoiceSearchResponse as InvoiceSearchResponse,
    type InvoiceCreateParams as InvoiceCreateParams,
    type InvoiceUpdateParams as InvoiceUpdateParams,
    type InvoiceCreateBatchGetParams as InvoiceCreateBatchGetParams,
    type InvoiceSearchParams as InvoiceSearchParams,
  };
}
