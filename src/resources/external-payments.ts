// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class ExternalPayments extends APIResource {
  /**
   * Creates a new external payment
   *
   * @example
   * ```ts
   * const externalPaymentSuccess =
   *   await client.externalPayments.create({
   *     accountReference: 'ACC-2024-001',
   *     amount: '50000',
   *     counterpartyId: 'party_ext_789',
   *     currency_code: 'USD',
   *     invoiceId: 'inv_1234567890',
   *     transactionId: 'txn_external_123',
   *   });
   * ```
   */
  create(body: ExternalPaymentCreateParams, options?: RequestOptions): APIPromise<ExternalPaymentSuccess> {
    return this._client.post('/external-payments', { body, ...options });
  }

  /**
   * Lists all external payments for the workspace
   *
   * @example
   * ```ts
   * const externalPayments =
   *   await client.externalPayments.list();
   * ```
   */
  list(options?: RequestOptions): APIPromise<ExternalPaymentListResponse> {
    return this._client.get('/external-payments', options);
  }
}

/**
 * External payment object
 */
export interface ExternalPayment {
  /**
   * Reference to the external account
   */
  accountReference: string;

  /**
   * Amount in smallest currency unit (represented as string for bigint)
   */
  amount: string;

  /**
   * External ID of the counterparty making the payment
   */
  counterpartyId: string;

  /**
   * ISO 8601 timestamp when the payment was created
   */
  created: string;

  /**
   * Currency code for the payment (ISO 4217 or crypto)
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
   * ID of the invoice this payment is for
   */
  invoiceId: string;

  /**
   * Transaction ID (idempotency key)
   */
  transactionId: string;

  /**
   * Workspace ID this payment belongs to
   */
  workspaceId: string;

  /**
   * ISO 8601 timestamp when the payment was last modified
   */
  modified?: string;
}

export interface ExternalPaymentSuccess {
  /**
   * External payment object
   */
  data: ExternalPayment;
}

/**
 * List of external payments
 */
export interface ExternalPaymentListResponse {
  data: Array<ExternalPayment>;
}

export interface ExternalPaymentCreateParams {
  /**
   * Reference to the external account
   */
  accountReference: string;

  /**
   * Amount in smallest currency unit (e.g., cents)
   */
  amount: string;

  /**
   * External ID of the counterparty making the payment
   */
  counterpartyId: string;

  /**
   * Currency code for the payment (ISO 4217 or crypto)
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
   * ID of the invoice this payment is for
   */
  invoiceId: string;

  /**
   * Transaction ID (used as idempotency key). Must be unique per workspace.
   */
  transactionId: string;
}

export declare namespace ExternalPayments {
  export {
    type ExternalPayment as ExternalPayment,
    type ExternalPaymentSuccess as ExternalPaymentSuccess,
    type ExternalPaymentListResponse as ExternalPaymentListResponse,
    type ExternalPaymentCreateParams as ExternalPaymentCreateParams,
  };
}
