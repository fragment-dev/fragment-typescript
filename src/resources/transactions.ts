// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Transactions extends APIResource {
  /**
   * Syncs a transaction, optionally with allocations
   *
   * @example
   * ```ts
   * const transaction = await client.transactions.create({
   *   account: {},
   *   allocations: [
   *     {
   *       amount: '1000',
   *       invoice_id: 'inv_abc123',
   *       type: 'invoice_payin',
   *       user: { id: 'user_abc123' },
   *     },
   *   ],
   *   amount: '-1000',
   *   currency: 'USD',
   *   external_id: 'bank_txn_123',
   *   posted: '2026-02-12T00:00:00.000Z',
   * });
   * ```
   */
  create(body: TransactionCreateParams, options?: RequestOptions): APIPromise<TransactionCreateResponse> {
    return this._client.post('/transactions', { body, ...options });
  }

  /**
   * Gets a transaction by ID
   *
   * @example
   * ```ts
   * const transaction = await client.transactions.retrieve(
   *   'txn_abc123',
   * );
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<TransactionRetrieveResponse> {
    return this._client.get(path`/transactions/${id}`, options);
  }

  /**
   * Lists all transactions for the workspace
   *
   * @example
   * ```ts
   * const transactions = await client.transactions.list();
   * ```
   */
  list(
    query: TransactionListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<TransactionListResponse> {
    return this._client.get('/transactions', { query, ...options });
  }

  /**
   * Updates allocations on an existing transaction
   *
   * @example
   * ```ts
   * const response =
   *   await client.transactions.createAllocations(
   *     'txn_abc123',
   *     {
   *       allocation_updates: [
   *         {
   *           amount: '1000',
   *           invoice_id: 'inv_abc123',
   *           op: 'add',
   *           type: 'invoice_payin',
   *           user: { id: 'user_abc123' },
   *         },
   *       ],
   *       version: 0,
   *     },
   *   );
   * ```
   */
  createAllocations(
    id: string,
    body: TransactionCreateAllocationsParams,
    options?: RequestOptions,
  ): APIPromise<TransactionCreateAllocationsResponse> {
    return this._client.post(path`/transactions/${id}/allocations`, { body, ...options });
  }
}

/**
 * Transaction object.
 */
export interface Transaction {
  /**
   * User-facing encoded transaction ID.
   */
  id: string;

  account: Transaction.Account;

  allocations: Array<Transaction.Allocation>;

  /**
   * Amount in smallest currency unit as stringified bigint (can be positive or
   * negative).
   */
  amount: string;

  /**
   * Creation timestamp.
   */
  created: string;

  /**
   * Currency code (ISO 4217 or crypto)
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
   * External idempotency key provided by the user.
   */
  external_id: string;

  /**
   * Posted timestamp in ISO 8601 format.
   */
  posted: string;

  /**
   * Read-only amount not yet allocated.
   */
  unallocated_amount: string;

  /**
   * Last modified timestamp.
   */
  modified?: string;
}

export namespace Transaction {
  export interface Account {
    /**
     * User-facing encoded account ID.
     */
    id: string;

    /**
     * External account reference ID.
     */
    external_id: string;
  }

  /**
   * Transaction allocation against an invoice.
   */
  export interface Allocation {
    /**
     * Amount to allocate in smallest currency unit as stringified bigint.
     */
    amount: string;

    /**
     * The invoice to allocate against.
     */
    invoice_id: string;

    /**
     * The type of allocation.
     */
    type: 'invoice_payin' | 'invoice_payout';

    /**
     * User reference. Provide either id or external_id.
     */
    user: Allocation.ID | Allocation.ExternalID;
  }

  export namespace Allocation {
    export interface ID {
      /**
       * Internal user ID.
       */
      id: string;
    }

    export interface ExternalID {
      /**
       * External user ID.
       */
      external_id: string;
    }
  }
}

export interface TransactionCreateResponse {
  /**
   * Transaction object.
   */
  data: Transaction;
}

export interface TransactionRetrieveResponse {
  /**
   * Transaction object.
   */
  data: Transaction;
}

/**
 * List of transactions
 */
export interface TransactionListResponse {
  data: Array<Transaction>;
}

export interface TransactionCreateAllocationsResponse {
  /**
   * Transaction object.
   */
  data: Transaction;
}

export interface TransactionCreateParams {
  /**
   * Account reference. Provide id, external_id, or both.
   */
  account: TransactionCreateParams.Account;

  /**
   * Allocation entries for this transaction. Empty indicates unreconciled funds.
   */
  allocations: Array<TransactionCreateParams.Allocation>;

  /**
   * Amount in smallest currency unit as stringified bigint (can be positive or
   * negative).
   */
  amount: string;

  /**
   * Currency code (ISO 4217 or crypto)
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
   * External transaction ID used for idempotent sync.
   */
  external_id: string;

  /**
   * Posted timestamp in ISO 8601 format.
   */
  posted: string;
}

export namespace TransactionCreateParams {
  /**
   * Account reference. Provide id, external_id, or both.
   */
  export interface Account {
    /**
     * User-facing encoded account ID.
     */
    id?: string;

    /**
     * External account reference ID.
     */
    external_id?: string;
  }

  /**
   * Transaction allocation against an invoice.
   */
  export interface Allocation {
    /**
     * Amount to allocate in smallest currency unit as stringified bigint.
     */
    amount: string;

    /**
     * The invoice to allocate against.
     */
    invoice_id: string;

    /**
     * The type of allocation.
     */
    type: 'invoice_payin' | 'invoice_payout';

    /**
     * User reference. Provide either id or external_id.
     */
    user: Allocation.ID | Allocation.ExternalID;
  }

  export namespace Allocation {
    export interface ID {
      /**
       * Internal user ID.
       */
      id: string;
    }

    export interface ExternalID {
      /**
       * External user ID.
       */
      external_id: string;
    }
  }
}

export interface TransactionListParams {
  /**
   * Filter by account. Encoded account ID (ext_account_xxx) or external_id. If the
   * account does not exist, returns an empty list.
   */
  account?: string;

  /**
   * Filter by reconciliation state. reconciled = unallocated_amount === 0;
   * unreconciled = unallocated_amount !== 0. Omit for all transactions.
   */
  reconciliation_status?: 'reconciled' | 'unreconciled';
}

export interface TransactionCreateAllocationsParams {
  /**
   * Allocation operations to apply
   */
  allocation_updates: Array<
    | TransactionCreateAllocationsParams.AddAllocationOperation
    | TransactionCreateAllocationsParams.DeleteAllocationOperation
  >;

  /**
   * Current transaction version for optimistic concurrency control
   */
  version: number;
}

export namespace TransactionCreateAllocationsParams {
  export interface AddAllocationOperation {
    /**
     * Amount to allocate in smallest currency unit as stringified bigint.
     */
    amount: string;

    /**
     * The invoice to allocate against.
     */
    invoice_id: string;

    /**
     * Add a new allocation
     */
    op: 'add';

    /**
     * The type of allocation.
     */
    type: 'invoice_payin' | 'invoice_payout';

    /**
     * User reference. Provide either id or external_id.
     */
    user: AddAllocationOperation.ID | AddAllocationOperation.ExternalID;
  }

  export namespace AddAllocationOperation {
    export interface ID {
      /**
       * Internal user ID.
       */
      id: string;
    }

    export interface ExternalID {
      /**
       * External user ID.
       */
      external_id: string;
    }
  }

  export interface DeleteAllocationOperation {
    /**
     * The ID of the allocation to remove.
     */
    id: string;

    /**
     * Delete an allocation
     */
    op: 'delete';
  }
}

export declare namespace Transactions {
  export {
    type Transaction as Transaction,
    type TransactionCreateResponse as TransactionCreateResponse,
    type TransactionRetrieveResponse as TransactionRetrieveResponse,
    type TransactionListResponse as TransactionListResponse,
    type TransactionCreateAllocationsResponse as TransactionCreateAllocationsResponse,
    type TransactionCreateParams as TransactionCreateParams,
    type TransactionListParams as TransactionListParams,
    type TransactionCreateAllocationsParams as TransactionCreateAllocationsParams,
  };
}
