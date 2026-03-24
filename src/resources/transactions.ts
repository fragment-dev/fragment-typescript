// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as TransactionsAPI from './transactions';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

/**
 * Transaction sync operations
 */
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
   * Gets a transaction by ID or external ID
   *
   * @example
   * ```ts
   * const transaction = await client.transactions.retrieve(
   *   'txn_abc123',
   * );
   * ```
   */
  retrieve(transactionRef: string, options?: RequestOptions): APIPromise<TransactionRetrieveResponse> {
    return this._client.get(path`/transactions/${transactionRef}`, options);
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
    transactionRef: string,
    body: TransactionCreateAllocationsParams,
    options?: RequestOptions,
  ): APIPromise<TransactionCreateAllocationsResponse> {
    return this._client.post(path`/transactions/${transactionRef}/allocations`, { body, ...options });
  }

  /**
   * Gets the version history of a transaction
   *
   * @example
   * ```ts
   * const response = await client.transactions.listHistory(
   *   'txn_abc123',
   * );
   * ```
   */
  listHistory(transactionRef: string, options?: RequestOptions): APIPromise<TransactionListHistoryResponse> {
    return this._client.get(path`/transactions/${transactionRef}/history`, options);
  }

  /**
   * Searches transactions by filter criteria
   *
   * @example
   * ```ts
   * const response = await client.transactions.search({
   *   filter: { account: { any: [{}] } },
   * });
   * ```
   */
  search(body: TransactionSearchParams, options?: RequestOptions): APIPromise<TransactionSearchResponse> {
    return this._client.post('/transactions/search', { body, ...options });
  }

  /**
   * Searches transaction allocations by filter criteria
   *
   * @example
   * ```ts
   * const response =
   *   await client.transactions.searchAllocations({
   *     filter: { invoice_id: { any: ['inv_abc123'] } },
   *   });
   * ```
   */
  searchAllocations(
    body: TransactionSearchAllocationsParams,
    options?: RequestOptions,
  ): APIPromise<TransactionSearchAllocationsResponse> {
    return this._client.post('/transactions/allocations/search', { body, ...options });
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

  /**
   * External account reference on transaction responses.
   */
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
   * Metadata tags associated with this transaction.
   */
  tags: Array<Transaction.Tag>;

  /**
   * Read-only amount not yet allocated.
   */
  unallocated_amount: string;

  /**
   * Current version of the transaction, used for optimistic concurrency control.
   */
  version: number;

  /**
   * Last modified timestamp.
   */
  modified?: string;
}

export namespace Transaction {
  /**
   * External account reference on transaction responses.
   */
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
     * User reference in API responses: Fragment user id and optional external_id.
     */
    user: Allocation.User;
  }

  export namespace Allocation {
    /**
     * User reference in API responses: Fragment user id and optional external_id.
     */
    export interface User {
      /**
       * FRAGMENT generated ID of the user
       */
      id: string;

      /**
       * External ID of the user
       */
      external_id?: string;
    }
  }

  /**
   * A key-value tag pair
   */
  export interface Tag {
    /**
     * Tag key
     */
    key: string;

    /**
     * Tag value
     */
    value: string;
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

/**
 * Version history of a transaction
 */
export interface TransactionListHistoryResponse {
  data: Array<TransactionListHistoryResponse.Data>;
}

export namespace TransactionListHistoryResponse {
  /**
   * A versioned snapshot of a transaction
   */
  export interface Data extends Omit<TransactionsAPI.Transaction, 'version'> {
    /**
     * Allocation changes applied in this version. Absent on version 1 (initial
     * creation). Each entry describes an allocation that was added or deleted.
     */
    diff?: Array<Data.AddAllocationDiffEntry | Data.DeleteAllocationDiffEntry>;

    /**
     * Version number of this transaction snapshot.
     */
    version?: number;
  }

  export namespace Data {
    export interface AddAllocationDiffEntry {
      /**
       * Transaction allocation against an invoice.
       */
      item: AddAllocationDiffEntry.Item;

      /**
       * An allocation was added
       */
      op: 'add';
    }

    export namespace AddAllocationDiffEntry {
      /**
       * Transaction allocation against an invoice.
       */
      export interface Item {
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
         * User reference in API responses: Fragment user id and optional external_id.
         */
        user: Item.User;
      }

      export namespace Item {
        /**
         * User reference in API responses: Fragment user id and optional external_id.
         */
        export interface User {
          /**
           * FRAGMENT generated ID of the user
           */
          id: string;

          /**
           * External ID of the user
           */
          external_id?: string;
        }
      }
    }

    export interface DeleteAllocationDiffEntry {
      /**
       * Transaction allocation against an invoice.
       */
      item: DeleteAllocationDiffEntry.Item;

      /**
       * An allocation was deleted
       */
      op: 'delete';
    }

    export namespace DeleteAllocationDiffEntry {
      /**
       * Transaction allocation against an invoice.
       */
      export interface Item {
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
         * User reference in API responses: Fragment user id and optional external_id.
         */
        user: Item.User;
      }

      export namespace Item {
        /**
         * User reference in API responses: Fragment user id and optional external_id.
         */
        export interface User {
          /**
           * FRAGMENT generated ID of the user
           */
          id: string;

          /**
           * External ID of the user
           */
          external_id?: string;
        }
      }
    }
  }
}

/**
 * Search results for transactions.
 */
export interface TransactionSearchResponse {
  data: Array<TransactionSearchResponse.Data>;
}

export namespace TransactionSearchResponse {
  /**
   * A versioned snapshot of a transaction
   */
  export interface Data extends Omit<TransactionsAPI.Transaction, 'version'> {
    /**
     * Allocation changes applied in this version. Absent on version 1 (initial
     * creation). Each entry describes an allocation that was added or deleted.
     */
    diff?: Array<Data.AddAllocationDiffEntry | Data.DeleteAllocationDiffEntry>;

    /**
     * Version number of this transaction snapshot.
     */
    version?: number;
  }

  export namespace Data {
    export interface AddAllocationDiffEntry {
      /**
       * Transaction allocation against an invoice.
       */
      item: AddAllocationDiffEntry.Item;

      /**
       * An allocation was added
       */
      op: 'add';
    }

    export namespace AddAllocationDiffEntry {
      /**
       * Transaction allocation against an invoice.
       */
      export interface Item {
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
         * User reference in API responses: Fragment user id and optional external_id.
         */
        user: Item.User;
      }

      export namespace Item {
        /**
         * User reference in API responses: Fragment user id and optional external_id.
         */
        export interface User {
          /**
           * FRAGMENT generated ID of the user
           */
          id: string;

          /**
           * External ID of the user
           */
          external_id?: string;
        }
      }
    }

    export interface DeleteAllocationDiffEntry {
      /**
       * Transaction allocation against an invoice.
       */
      item: DeleteAllocationDiffEntry.Item;

      /**
       * An allocation was deleted
       */
      op: 'delete';
    }

    export namespace DeleteAllocationDiffEntry {
      /**
       * Transaction allocation against an invoice.
       */
      export interface Item {
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
         * User reference in API responses: Fragment user id and optional external_id.
         */
        user: Item.User;
      }

      export namespace Item {
        /**
         * User reference in API responses: Fragment user id and optional external_id.
         */
        export interface User {
          /**
           * FRAGMENT generated ID of the user
           */
          id: string;

          /**
           * External ID of the user
           */
          external_id?: string;
        }
      }
    }
  }
}

/**
 * Search results for transaction allocations.
 */
export interface TransactionSearchAllocationsResponse {
  data: Array<TransactionSearchAllocationsResponse.Data>;
}

export namespace TransactionSearchAllocationsResponse {
  /**
   * A flattened allocation with a reference to its parent transaction.
   */
  export interface Data {
    /**
     * Allocation ID.
     */
    id: string;

    /**
     * Amount to allocate in smallest currency unit as stringified bigint.
     */
    amount: string;

    /**
     * The invoice to allocate against.
     */
    invoice_id: string;

    /**
     * Posted timestamp of the parent transaction in ISO 8601 format.
     */
    posted: string;

    /**
     * Reference to a transaction by encoded ID and external ID.
     */
    transaction: Data.Transaction;

    /**
     * The type of allocation.
     */
    type: 'invoice_payin' | 'invoice_payout';

    /**
     * User reference in API responses: Fragment user id and optional external_id.
     */
    user: Data.User;
  }

  export namespace Data {
    /**
     * Reference to a transaction by encoded ID and external ID.
     */
    export interface Transaction {
      /**
       * Encoded transaction ID.
       */
      id: string;

      /**
       * External transaction ID.
       */
      external_id: string;
    }

    /**
     * User reference in API responses: Fragment user id and optional external_id.
     */
    export interface User {
      /**
       * FRAGMENT generated ID of the user
       */
      id: string;

      /**
       * External ID of the user
       */
      external_id?: string;
    }
  }
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

  /**
   * Optional metadata tags for this transaction
   */
  tags?: Array<TransactionCreateParams.Tag>;
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
     * Identifies a user by Fragment-generated id or external_id (request body).
     */
    user: Allocation.ID | Allocation.ExternalID;
  }

  export namespace Allocation {
    export interface ID {
      /**
       * FRAGMENT generated ID of the user
       */
      id: string;
    }

    export interface ExternalID {
      /**
       * External ID of the user
       */
      external_id: string;
    }
  }

  /**
   * A key-value tag pair for metadata
   */
  export interface Tag {
    /**
     * Tag key. Must be a valid safe string (no special characters like #, /, :). Max
     * 50 characters.
     */
    key: string;

    /**
     * Tag value. Must be a valid safe string (no special characters like #, /, :). Max
     * 200 characters.
     */
    value: string;
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
     * Identifies a user by Fragment-generated id or external_id (request body).
     */
    user: AddAllocationOperation.ID | AddAllocationOperation.ExternalID;
  }

  export namespace AddAllocationOperation {
    export interface ID {
      /**
       * FRAGMENT generated ID of the user
       */
      id: string;
    }

    export interface ExternalID {
      /**
       * External ID of the user
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

export interface TransactionSearchParams {
  /**
   * Filter criteria for searching transactions.
   */
  filter: TransactionSearchParams.Filter;
}

export namespace TransactionSearchParams {
  /**
   * Filter criteria for searching transactions.
   */
  export interface Filter {
    account: Filter.Account;
  }

  export namespace Filter {
    export interface Account {
      /**
       * Match transactions belonging to any of these accounts (OR).
       */
      any: Array<Account.Any>;
    }

    export namespace Account {
      /**
       * Account reference. Provide id, external_id, or both.
       */
      export interface Any {
        /**
         * User-facing encoded account ID.
         */
        id?: string;

        /**
         * External account reference ID.
         */
        external_id?: string;
      }
    }
  }
}

export interface TransactionSearchAllocationsParams {
  /**
   * Filter criteria for searching transaction allocations.
   */
  filter: TransactionSearchAllocationsParams.Filter;
}

export namespace TransactionSearchAllocationsParams {
  /**
   * Filter criteria for searching transaction allocations.
   */
  export interface Filter {
    invoice_id: Filter.InvoiceID;
  }

  export namespace Filter {
    export interface InvoiceID {
      /**
       * Match allocations where invoice_id is any of these values (OR).
       */
      any: Array<string>;
    }
  }
}

export declare namespace Transactions {
  export {
    type Transaction as Transaction,
    type TransactionCreateResponse as TransactionCreateResponse,
    type TransactionRetrieveResponse as TransactionRetrieveResponse,
    type TransactionListResponse as TransactionListResponse,
    type TransactionCreateAllocationsResponse as TransactionCreateAllocationsResponse,
    type TransactionListHistoryResponse as TransactionListHistoryResponse,
    type TransactionSearchResponse as TransactionSearchResponse,
    type TransactionSearchAllocationsResponse as TransactionSearchAllocationsResponse,
    type TransactionCreateParams as TransactionCreateParams,
    type TransactionListParams as TransactionListParams,
    type TransactionCreateAllocationsParams as TransactionCreateAllocationsParams,
    type TransactionSearchParams as TransactionSearchParams,
    type TransactionSearchAllocationsParams as TransactionSearchAllocationsParams,
  };
}
