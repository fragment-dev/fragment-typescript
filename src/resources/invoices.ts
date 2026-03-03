// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as InvoicesAPI from './invoices';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Invoices extends APIResource {
  /**
   * Creates a new invoice
   *
   * @example
   * ```ts
   * const invoice = await client.invoices.create({
   *   invoiceId: 'invoice_2024_001',
   *   lineItems: [
   *     {
   *       amount: '1000',
   *       currencyCode: 'USD',
   *       description: 'Professional services for January 2026',
   *       product_id: 'prod_1234567890',
   *       type: 'payout',
   *     },
   *   ],
   * });
   * ```
   */
  create(body: InvoiceCreateParams, options?: RequestOptions): APIPromise<InvoiceCreateResponse> {
    return this._client.post('/invoices', { body, ...options });
  }

  /**
   * Gets an invoice by ID with balance details
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
   * Updates an invoice with line item operations
   *
   * @example
   * ```ts
   * const invoice = await client.invoices.update(
   *   'inv_1234567890',
   *   {
   *     line_items_update: [
   *       {
   *         amount: '1000',
   *         currency_code: 'USD',
   *         description:
   *           'Professional services for January 2026',
   *         op: 'add',
   *         product_id: 'prod_1234567890',
   *         type: 'payout',
   *       },
   *     ],
   *     version: 1,
   *   },
   * );
   * ```
   */
  update(id: string, body: InvoiceUpdateParams, options?: RequestOptions): APIPromise<InvoiceUpdateResponse> {
    return this._client.post(path`/invoices/${id}`, { body, ...options });
  }

  /**
   * Lists all invoices for the workspace
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
   * Gets the version history of an invoice
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
}

/**
 * Invoice object
 */
export interface Invoice {
  /**
   * Unique identifier for the invoice
   */
  id: string;

  /**
   * ISO 8601 timestamp when the invoice was created
   */
  created: string;

  /**
   * The status of the invoice
   */
  status: 'active';

  /**
   * The current version of the invoice. Pass this value when updating to ensure
   * thread safety.
   */
  version: number;

  /**
   * Workspace ID this invoice belongs to
   */
  workspaceId: string;

  /**
   * List of line items associated with this invoice
   */
  lineItems?: Array<Invoice.LineItem>;

  /**
   * ISO 8601 timestamp when the invoice was last modified
   */
  modified?: string;
}

export namespace Invoice {
  /**
   * Invoice line item object
   */
  export interface LineItem {
    /**
     * Unique identifier for the line item
     */
    id: string;

    /**
     * Amount in smallest currency unit (represented as string for bigint)
     */
    amount: string;

    /**
     * Currency code (ISO 4217 or crypto)
     */
    currencyCode:
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
     * Description of the line item
     */
    description: string;

    /**
     * ID of the product/catalog item
     */
    product_id: string;

    /**
     * The type of the line item
     */
    type: 'payin' | 'payout';

    /**
     * External ID of the user associated with this line item
     */
    user_id: string;
  }
}

export interface InvoiceCreateResponse {
  /**
   * Invoice object
   */
  data: Invoice;
}

export interface InvoiceRetrieveResponse {
  /**
   * Invoice with balance details
   */
  data: InvoiceRetrieveResponse.Data;
}

export namespace InvoiceRetrieveResponse {
  /**
   * Invoice with balance details
   */
  export interface Data extends InvoicesAPI.Invoice {
    /**
     * Invoice-level balances by currency: payins, payouts, and net (payins - payouts)
     */
    balances: Array<Data.Balance>;

    /**
     * Users/parties involved in the invoice
     */
    users: Array<Data.User>;
  }

  export namespace Data {
    export interface Balance {
      /**
       * Currency code
       */
      currency: string;

      net: Balance.Net;

      payins: Balance.Payins;

      payouts: Balance.Payouts;
    }

    export namespace Balance {
      export interface Net {
        /**
         * Actual amount (represented as string)
         */
        actual: string;

        /**
         * Expected amount (represented as string)
         */
        expected: string;

        /**
         * Remaining amount (expected - actual, represented as string)
         */
        remaining: string;
      }

      export interface Payins {
        /**
         * Actual amount (represented as string)
         */
        actual: string;

        /**
         * Expected amount (represented as string)
         */
        expected: string;

        /**
         * Remaining amount (expected - actual, represented as string)
         */
        remaining: string;
      }

      export interface Payouts {
        /**
         * Actual amount (represented as string)
         */
        actual: string;

        /**
         * Expected amount (represented as string)
         */
        expected: string;

        /**
         * Remaining amount (expected - actual, represented as string)
         */
        remaining: string;
      }
    }

    export interface User {
      /**
       * User/party ID
       */
      id: string;

      /**
       * Per-currency balance breakdown for this user
       */
      balances: Array<User.Balance>;
    }

    export namespace User {
      export interface Balance {
        /**
         * Currency code
         */
        currency: string;

        net: Balance.Net;

        payins: Balance.Payins;

        payouts: Balance.Payouts;
      }

      export namespace Balance {
        export interface Net {
          /**
           * Actual amount (represented as string)
           */
          actual: string;

          /**
           * Expected amount (represented as string)
           */
          expected: string;

          /**
           * Remaining amount (expected - actual, represented as string)
           */
          remaining: string;
        }

        export interface Payins {
          /**
           * Actual amount (represented as string)
           */
          actual: string;

          /**
           * Expected amount (represented as string)
           */
          expected: string;

          /**
           * Remaining amount (expected - actual, represented as string)
           */
          remaining: string;
        }

        export interface Payouts {
          /**
           * Actual amount (represented as string)
           */
          actual: string;

          /**
           * Expected amount (represented as string)
           */
          expected: string;

          /**
           * Remaining amount (expected - actual, represented as string)
           */
          remaining: string;
        }
      }
    }
  }
}

export interface InvoiceUpdateResponse {
  /**
   * Invoice object
   */
  data: Invoice;
}

/**
 * List of invoices
 */
export interface InvoiceListResponse {
  data: Array<Invoice>;
}

/**
 * Version history of an invoice
 */
export interface InvoiceListHistoryResponse {
  data: Array<InvoiceListHistoryResponse.Data>;
}

export namespace InvoiceListHistoryResponse {
  /**
   * A versioned snapshot of an invoice
   */
  export interface Data extends Omit<InvoicesAPI.Invoice, 'version'> {
    /**
     * Cumulative diff of changes applied to the invoice
     */
    diff?: Array<Data.AddDiffEntry | Data.UpdateDiffEntry | Data.DeleteDiffEntry>;

    /**
     * Version number of this invoice snapshot
     */
    version?: number;
  }

  export namespace Data {
    export interface AddDiffEntry {
      /**
       * Invoice line item object
       */
      item: AddDiffEntry.Item;

      /**
       * A line item was added
       */
      op: 'add';
    }

    export namespace AddDiffEntry {
      /**
       * Invoice line item object
       */
      export interface Item {
        /**
         * Unique identifier for the line item
         */
        id: string;

        /**
         * Amount in smallest currency unit (represented as string for bigint)
         */
        amount: string;

        /**
         * Currency code (ISO 4217 or crypto)
         */
        currencyCode:
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
         * Description of the line item
         */
        description: string;

        /**
         * ID of the product/catalog item
         */
        product_id: string;

        /**
         * The type of the line item
         */
        type: 'payin' | 'payout';

        /**
         * External ID of the user associated with this line item
         */
        user_id: string;
      }
    }

    export interface UpdateDiffEntry {
      /**
       * ID of the updated line item
       */
      id: string;

      /**
       * New amount after the update
       */
      new_amount: string;

      /**
       * Amount before the update
       */
      old_amount: string;

      /**
       * A line item was updated
       */
      op: 'update';
    }

    export interface DeleteDiffEntry {
      /**
       * Invoice line item object
       */
      item: DeleteDiffEntry.Item;

      /**
       * A line item was deleted
       */
      op: 'delete';
    }

    export namespace DeleteDiffEntry {
      /**
       * Invoice line item object
       */
      export interface Item {
        /**
         * Unique identifier for the line item
         */
        id: string;

        /**
         * Amount in smallest currency unit (represented as string for bigint)
         */
        amount: string;

        /**
         * Currency code (ISO 4217 or crypto)
         */
        currencyCode:
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
         * Description of the line item
         */
        description: string;

        /**
         * ID of the product/catalog item
         */
        product_id: string;

        /**
         * The type of the line item
         */
        type: 'payin' | 'payout';

        /**
         * External ID of the user associated with this line item
         */
        user_id: string;
      }
    }
  }
}

export interface InvoiceCreateParams {
  /**
   * Unique identifier for the invoice. Make this the canonical ID from your system
   * for the transaction.
   */
  invoiceId: string;

  /**
   * List of line items to create with the invoice
   */
  lineItems: Array<InvoiceCreateParams.LineItem>;
}

export namespace InvoiceCreateParams {
  /**
   * Line item data for creating within an invoice. Exactly one of `user` or
   * `user_id` must be provided. `user_id` is deprecated; use `user` instead.
   */
  export interface LineItem {
    /**
     * Amount in smallest currency unit (e.g., cents)
     */
    amount: string;

    /**
     * Currency code (ISO 4217 or crypto)
     */
    currencyCode:
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
     * Description of the line item
     */
    description: string;

    /**
     * ID of the product/catalog item
     */
    product_id: string;

    /**
     * The type of the line item
     */
    type: 'payin' | 'payout';

    user?: LineItem.ID | LineItem.ExternalID;

    /**
     * @deprecated External ID of the user associated with this line item
     */
    user_id?: string;
  }

  export namespace LineItem {
    export interface ID {
      /**
       * FRAGMENT generated ID of the user associated with this line item
       */
      id: string;
    }

    export interface ExternalID {
      /**
       * External ID of the user associated with this line item
       */
      externalId: string;
    }
  }
}

export interface InvoiceUpdateParams {
  /**
   * List of line item operations to apply to the invoice
   */
  line_items_update: Array<
    | InvoiceUpdateParams.AddLineItemOperation
    | InvoiceUpdateParams.UpdateLineItemOperation
    | InvoiceUpdateParams.DeleteLineItemOperation
  >;

  /**
   * The version of the invoice being updated. Must match the current version for the
   * update to succeed.
   */
  version: number;
}

export namespace InvoiceUpdateParams {
  /**
   * Operation to add a new line item to an invoice
   */
  export interface AddLineItemOperation {
    /**
     * Amount in smallest currency unit (e.g., cents)
     */
    amount: string;

    /**
     * Currency code (ISO 4217 or crypto)
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
     * Description of the line item
     */
    description: string;

    /**
     * Operation type - add a new line item
     */
    op: 'add';

    /**
     * ID of the product/catalog item
     */
    product_id: string;

    /**
     * The type of the line item
     */
    type: 'payin' | 'payout';

    user?: AddLineItemOperation.ID | AddLineItemOperation.ExternalID;

    /**
     * @deprecated External ID of the user associated with this line item
     */
    user_id?: string;
  }

  export namespace AddLineItemOperation {
    export interface ID {
      /**
       * FRAGMENT generated ID of the user associated with this line item
       */
      id: string;
    }

    export interface ExternalID {
      /**
       * External ID of the user associated with this line item
       */
      externalId: string;
    }
  }

  /**
   * Operation to update an existing line item amount
   */
  export interface UpdateLineItemOperation {
    /**
     * ID of the line item to update
     */
    id: string;

    /**
     * New amount in smallest currency unit
     */
    amount: string;

    /**
     * Operation type - update an existing line item
     */
    op: 'update';
  }

  /**
   * Operation to delete a line item from an invoice
   */
  export interface DeleteLineItemOperation {
    /**
     * ID of the line item to delete
     */
    id: string;

    /**
     * Operation type - delete an existing line item
     */
    op: 'delete';
  }
}

export declare namespace Invoices {
  export {
    type Invoice as Invoice,
    type InvoiceCreateResponse as InvoiceCreateResponse,
    type InvoiceRetrieveResponse as InvoiceRetrieveResponse,
    type InvoiceUpdateResponse as InvoiceUpdateResponse,
    type InvoiceListResponse as InvoiceListResponse,
    type InvoiceListHistoryResponse as InvoiceListHistoryResponse,
    type InvoiceCreateParams as InvoiceCreateParams,
    type InvoiceUpdateParams as InvoiceUpdateParams,
  };
}
