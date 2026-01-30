// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
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
   *   buyerParty: 'party_ext_789',
   *   invoiceId: 'invoice_2024_001',
   * });
   * ```
   */
  create(body: InvoiceCreateParams, options?: RequestOptions): APIPromise<InvoiceCreateResponse> {
    return this._client.post('/invoices', { body, ...options });
  }

  /**
   * Gets an invoice by ID
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
   *         payout_party: { platform: true },
   *         product_id: 'prod_1234567890',
   *       },
   *     ],
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
}

export interface InvoiceCreateResponse {
  /**
   * Invoice object
   */
  data: InvoiceCreateResponse.Data;
}

export namespace InvoiceCreateResponse {
  /**
   * Invoice object
   */
  export interface Data {
    /**
     * Unique identifier for the invoice
     */
    id: string;

    /**
     * External ID of the buyer party
     */
    buyerParty: string;

    /**
     * ISO 8601 timestamp when the invoice was created
     */
    created: string;

    /**
     * The status of the invoice
     */
    status: 'draft' | 'active' | 'closed' | 'void' | 'failed';

    /**
     * Workspace ID this invoice belongs to
     */
    workspaceId: string;

    /**
     * List of line items associated with this invoice
     */
    lineItems?: Array<Data.LineItem>;

    /**
     * ISO 8601 timestamp when the invoice was last modified
     */
    modified?: string;
  }

  export namespace Data {
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
       * The party receiving payout - either platform or a counter-party
       */
      payout_party: LineItem.PlatformPayoutResponse | LineItem.CounterPartyPayoutResponse;

      /**
       * ID of the product/catalog item
       */
      product_id: string;
    }

    export namespace LineItem {
      export interface PlatformPayoutResponse {
        /**
         * Set to true for platform payout
         */
        platform: true;
      }

      export interface CounterPartyPayoutResponse {
        /**
         * External ID of the party receiving payout
         */
        party_id: string;

        /**
         * Set to false or omit for counter-party payout
         */
        platform?: false;
      }
    }
  }
}

export interface InvoiceRetrieveResponse {
  /**
   * Invoice object
   */
  data: InvoiceRetrieveResponse.Data;
}

export namespace InvoiceRetrieveResponse {
  /**
   * Invoice object
   */
  export interface Data {
    /**
     * Unique identifier for the invoice
     */
    id: string;

    /**
     * External ID of the buyer party
     */
    buyerParty: string;

    /**
     * ISO 8601 timestamp when the invoice was created
     */
    created: string;

    /**
     * The status of the invoice
     */
    status: 'draft' | 'active' | 'closed' | 'void' | 'failed';

    /**
     * Workspace ID this invoice belongs to
     */
    workspaceId: string;

    /**
     * List of line items associated with this invoice
     */
    lineItems?: Array<Data.LineItem>;

    /**
     * ISO 8601 timestamp when the invoice was last modified
     */
    modified?: string;
  }

  export namespace Data {
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
       * The party receiving payout - either platform or a counter-party
       */
      payout_party: LineItem.PlatformPayoutResponse | LineItem.CounterPartyPayoutResponse;

      /**
       * ID of the product/catalog item
       */
      product_id: string;
    }

    export namespace LineItem {
      export interface PlatformPayoutResponse {
        /**
         * Set to true for platform payout
         */
        platform: true;
      }

      export interface CounterPartyPayoutResponse {
        /**
         * External ID of the party receiving payout
         */
        party_id: string;

        /**
         * Set to false or omit for counter-party payout
         */
        platform?: false;
      }
    }
  }
}

export interface InvoiceUpdateResponse {
  /**
   * Invoice object
   */
  data: InvoiceUpdateResponse.Data;
}

export namespace InvoiceUpdateResponse {
  /**
   * Invoice object
   */
  export interface Data {
    /**
     * Unique identifier for the invoice
     */
    id: string;

    /**
     * External ID of the buyer party
     */
    buyerParty: string;

    /**
     * ISO 8601 timestamp when the invoice was created
     */
    created: string;

    /**
     * The status of the invoice
     */
    status: 'draft' | 'active' | 'closed' | 'void' | 'failed';

    /**
     * Workspace ID this invoice belongs to
     */
    workspaceId: string;

    /**
     * List of line items associated with this invoice
     */
    lineItems?: Array<Data.LineItem>;

    /**
     * ISO 8601 timestamp when the invoice was last modified
     */
    modified?: string;
  }

  export namespace Data {
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
       * The party receiving payout - either platform or a counter-party
       */
      payout_party: LineItem.PlatformPayoutResponse | LineItem.CounterPartyPayoutResponse;

      /**
       * ID of the product/catalog item
       */
      product_id: string;
    }

    export namespace LineItem {
      export interface PlatformPayoutResponse {
        /**
         * Set to true for platform payout
         */
        platform: true;
      }

      export interface CounterPartyPayoutResponse {
        /**
         * External ID of the party receiving payout
         */
        party_id: string;

        /**
         * Set to false or omit for counter-party payout
         */
        platform?: false;
      }
    }
  }
}

/**
 * List of invoices
 */
export interface InvoiceListResponse {
  data: Array<InvoiceListResponse.Data>;
}

export namespace InvoiceListResponse {
  /**
   * Invoice object
   */
  export interface Data {
    /**
     * Unique identifier for the invoice
     */
    id: string;

    /**
     * External ID of the buyer party
     */
    buyerParty: string;

    /**
     * ISO 8601 timestamp when the invoice was created
     */
    created: string;

    /**
     * The status of the invoice
     */
    status: 'draft' | 'active' | 'closed' | 'void' | 'failed';

    /**
     * Workspace ID this invoice belongs to
     */
    workspaceId: string;

    /**
     * List of line items associated with this invoice
     */
    lineItems?: Array<Data.LineItem>;

    /**
     * ISO 8601 timestamp when the invoice was last modified
     */
    modified?: string;
  }

  export namespace Data {
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
       * The party receiving payout - either platform or a counter-party
       */
      payout_party: LineItem.PlatformPayoutResponse | LineItem.CounterPartyPayoutResponse;

      /**
       * ID of the product/catalog item
       */
      product_id: string;
    }

    export namespace LineItem {
      export interface PlatformPayoutResponse {
        /**
         * Set to true for platform payout
         */
        platform: true;
      }

      export interface CounterPartyPayoutResponse {
        /**
         * External ID of the party receiving payout
         */
        party_id: string;

        /**
         * Set to false or omit for counter-party payout
         */
        platform?: false;
      }
    }
  }
}

export interface InvoiceCreateParams {
  /**
   * External ID of the buyer party
   */
  buyerParty: string;

  /**
   * Unique identifier for the invoice. Make this the canonical ID from your system
   * for the transaction.
   */
  invoiceId: string;

  /**
   * Optional list of line items to create with the invoice
   */
  lineItems?: Array<InvoiceCreateParams.LineItem>;

  /**
   * Initial status of the invoice. Defaults to active if not specified.
   */
  status?: 'draft' | 'active';
}

export namespace InvoiceCreateParams {
  /**
   * Line item data for creating within an invoice. The payInParty is automatically
   * set to the invoice's buyerParty.
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
     * The party receiving payout - either platform or a counter-party
     */
    payout_party: LineItem.PlatformPayout | LineItem.CounterPartyPayout;

    /**
     * ID of the product/catalog item
     */
    product_id: string;
  }

  export namespace LineItem {
    export interface PlatformPayout {
      /**
       * Set to true for platform payout
       */
      platform: true;
    }

    export interface CounterPartyPayout {
      /**
       * External ID of the party receiving payout
       */
      party_id: string;

      /**
       * Set to false or omit for counter-party payout
       */
      platform?: false;
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
     * The party receiving payout - either platform or a counter-party
     */
    payout_party: AddLineItemOperation.PlatformPayout | AddLineItemOperation.CounterPartyPayout;

    /**
     * ID of the product/catalog item
     */
    product_id: string;
  }

  export namespace AddLineItemOperation {
    export interface PlatformPayout {
      /**
       * Set to true for platform payout
       */
      platform: true;
    }

    export interface CounterPartyPayout {
      /**
       * External ID of the party receiving payout
       */
      party_id: string;

      /**
       * Set to false or omit for counter-party payout
       */
      platform?: false;
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
    type InvoiceCreateResponse as InvoiceCreateResponse,
    type InvoiceRetrieveResponse as InvoiceRetrieveResponse,
    type InvoiceUpdateResponse as InvoiceUpdateResponse,
    type InvoiceListResponse as InvoiceListResponse,
    type InvoiceCreateParams as InvoiceCreateParams,
    type InvoiceUpdateParams as InvoiceUpdateParams,
  };
}
