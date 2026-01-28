// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as PlatformAPI from './platform';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Invoices extends APIResource {
  /**
   * Creates a new invoice
   *
   * @example
   * ```ts
   * const invoiceSuccess = await client.invoices.create({
   *   buyerParty: 'party_ext_789',
   *   ik: 'invoice_2024_001',
   * });
   * ```
   */
  create(body: InvoiceCreateParams, options?: RequestOptions): APIPromise<InvoiceSuccess> {
    return this._client.post('/invoices', { body, ...options });
  }

  /**
   * Gets an invoice by ID
   *
   * @example
   * ```ts
   * const invoiceSuccess = await client.invoices.retrieve(
   *   'inv_1234567890',
   * );
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<InvoiceSuccess> {
    return this._client.get(path`/invoices/${id}`, options);
  }

  /**
   * Updates an invoice with line item operations
   *
   * @example
   * ```ts
   * const invoiceSuccess = await client.invoices.update(
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
  update(id: string, body: InvoiceUpdateParams, options?: RequestOptions): APIPromise<InvoiceSuccess> {
    return this._client.post(path`/invoices/${id}`, { body, ...options });
  }

  /**
   * Lists all invoices for the workspace
   *
   * @example
   * ```ts
   * const invoiceList = await client.invoices.list();
   * ```
   */
  list(options?: RequestOptions): APIPromise<InvoiceList> {
    return this._client.get('/invoices', options);
  }
}

/**
 * Line item data for creating within an invoice. The payInParty is automatically
 * set to the invoice's buyerParty.
 */
export interface CreateInvoiceLineItemInput {
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
  payout_party: PlatformAPI.PlatformPayout | CreateInvoiceLineItemInput.CounterPartyPayout;

  /**
   * ID of the product/catalog item
   */
  product_id: string;
}

export namespace CreateInvoiceLineItemInput {
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
 * Request body for creating an invoice
 */
export interface CreateInvoiceRequest {
  /**
   * External ID of the buyer party
   */
  buyerParty: string;

  /**
   * Idempotency key for the invoice
   */
  ik: string;

  /**
   * Optional list of line items to create with the invoice
   */
  lineItems?: Array<CreateInvoiceLineItemInput>;

  /**
   * Initial status of the invoice. Defaults to active if not specified.
   */
  status?: 'draft' | 'active';
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
   * External ID of the buyer party
   */
  buyerParty: string;

  /**
   * ISO 8601 timestamp when the invoice was created
   */
  created: string;

  /**
   * Idempotency key for the invoice
   */
  ik: string;

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
  lineItems?: Array<InvoiceLineItem>;

  /**
   * ISO 8601 timestamp when the invoice was last modified
   */
  modified?: string;
}

/**
 * Invoice line item object
 */
export interface InvoiceLineItem {
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
  payout_party: InvoiceLineItem.PlatformPayoutResponse | InvoiceLineItem.CounterPartyPayoutResponse;

  /**
   * ID of the product/catalog item
   */
  product_id: string;
}

export namespace InvoiceLineItem {
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

/**
 * List of invoices
 */
export interface InvoiceList {
  data: Array<Invoice>;
}

export interface InvoiceSuccess {
  /**
   * Invoice object
   */
  data: Invoice;
}

/**
 * Request body for updating an invoice
 */
export interface UpdateInvoiceRequest {
  /**
   * List of line item operations to apply to the invoice
   */
  line_items_update: Array<
    | UpdateInvoiceRequest.AddLineItemOperation
    | UpdateInvoiceRequest.UpdateLineItemOperation
    | UpdateInvoiceRequest.DeleteLineItemOperation
  >;
}

export namespace UpdateInvoiceRequest {
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
    payout_party: PlatformAPI.PlatformPayout | AddLineItemOperation.CounterPartyPayout;

    /**
     * ID of the product/catalog item
     */
    product_id: string;
  }

  export namespace AddLineItemOperation {
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

export interface InvoiceCreateParams {
  /**
   * External ID of the buyer party
   */
  buyerParty: string;

  /**
   * Idempotency key for the invoice
   */
  ik: string;

  /**
   * Optional list of line items to create with the invoice
   */
  lineItems?: Array<CreateInvoiceLineItemInput>;

  /**
   * Initial status of the invoice. Defaults to active if not specified.
   */
  status?: 'draft' | 'active';
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
    payout_party: PlatformAPI.PlatformPayout | AddLineItemOperation.CounterPartyPayout;

    /**
     * ID of the product/catalog item
     */
    product_id: string;
  }

  export namespace AddLineItemOperation {
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
    type CreateInvoiceLineItemInput as CreateInvoiceLineItemInput,
    type CreateInvoiceRequest as CreateInvoiceRequest,
    type Invoice as Invoice,
    type InvoiceLineItem as InvoiceLineItem,
    type InvoiceList as InvoiceList,
    type InvoiceSuccess as InvoiceSuccess,
    type UpdateInvoiceRequest as UpdateInvoiceRequest,
    type InvoiceCreateParams as InvoiceCreateParams,
    type InvoiceUpdateParams as InvoiceUpdateParams,
  };
}
