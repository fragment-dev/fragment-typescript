// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

/**
 * Transaction sync operations
 */
export class Transactions extends APIResource {
  /**
   * Creates a transaction.
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
   *   posted: '2024-01-13T00:00:00Z',
   * });
   * ```
   */
  create(body: TransactionCreateParams, options?: RequestOptions): APIPromise<TransactionCreateResponse> {
    return this._client.post('/transactions', { body, ...options });
  }

  /**
   * Fetches a transaction by ID or external ID.
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
   * Updates a transaction.
   *
   * @example
   * ```ts
   * const transaction = await client.transactions.update(
   *   'txn_abc123',
   *   { current_transaction_version: 0 },
   * );
   * ```
   */
  update(
    transactionRef: string,
    body: TransactionUpdateParams,
    options?: RequestOptions,
  ): APIPromise<TransactionUpdateResponse> {
    return this._client.patch(path`/transactions/${transactionRef}`, { body, ...options });
  }

  /**
   * Lists all transactions.
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
   * Gets the version history of a transaction.
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
   * Searches transactions.
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
   * Searches transaction allocations.
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
   * FRAGMENT generated unique ID.
   */
  id: string;

  /**
   * External account for the transaction.
   */
  account: Transaction.Account;

  /**
   * Allocations applied to the transaction.
   */
  allocations: Array<Transaction.Allocation>;

  /**
   * Transaction amount, as a string in the smallest unit of the currency (for
   * example, cents for USD). Can be positive or negative.
   */
  amount: string;

  /**
   * Timestamp when the transaction was created. Uses ISO 8601 format.
   */
  created: string;

  /**
   * Currency code (ISO 4217 or crypto).
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
   * Unique user-provided external ID for the transaction.
   */
  external_id: string;

  /**
   * Timestamp when the transaction was posted. Uses ISO 8601 format.
   */
  posted: string;

  /**
   * Tags for the transaction.
   */
  tags: Array<Transaction.Tag>;

  /**
   * Amount not yet allocated, as a string.
   */
  unallocated_amount: string;

  /**
   * Current version of the transaction.
   */
  version: number;

  /**
   * Timestamp when the transaction was last modified. Uses ISO 8601 format.
   */
  modified?: string;
}

export namespace Transaction {
  /**
   * External account for the transaction.
   */
  export interface Account {
    /**
     * FRAGMENT generated unique ID.
     */
    id: string;

    /**
     * Unique user-provided external ID for the external account.
     */
    external_id: string;
  }

  /**
   * An allocation linking a transaction to an invoice.
   */
  export interface Allocation {
    /**
     * Allocated amount, as a positive string in the smallest unit of the currency (for
     * example, cents for USD).
     */
    amount: string;

    /**
     * Invoice the allocation is applied against.
     */
    invoice_id: string;

    /**
     * Type of allocation.
     */
    type: 'invoice_payin' | 'invoice_payout';

    /**
     * User reference.
     */
    user: Allocation.User;
  }

  export namespace Allocation {
    /**
     * User reference.
     */
    export interface User {
      /**
       * FRAGMENT generated unique ID.
       */
      id: string;

      /**
       * User-provided unique external ID.
       */
      external_id: string;
    }
  }

  /**
   * A key-value tag pair
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

export interface TransactionUpdateResponse {
  /**
   * Transaction object.
   */
  data: Transaction;
}

export interface TransactionListResponse {
  /**
   * List of transaction objects matching the filter criteria.
   */
  data: Array<Transaction>;
}

export interface TransactionListHistoryResponse {
  /**
   * List of transaction versions over time, ordered by version, oldest first.
   */
  data: Array<Transaction>;
}

export interface TransactionSearchResponse {
  /**
   * List of transaction search results.
   */
  data: Array<Transaction>;
}

export interface TransactionSearchAllocationsResponse {
  /**
   * List of allocation search results.
   */
  data: Array<TransactionSearchAllocationsResponse.Data>;
}

export namespace TransactionSearchAllocationsResponse {
  /**
   * An allocation with a reference to its parent transaction.
   */
  export interface Data {
    /**
     * FRAGMENT generated unique ID.
     */
    id: string;

    /**
     * Allocated amount, as a positive string in the smallest unit of the currency (for
     * example, cents for USD).
     */
    amount: string;

    /**
     * Invoice the allocation is applied against.
     */
    invoice_id: string;

    /**
     * Timestamp when the parent transaction was posted. Uses ISO 8601 format.
     */
    posted: string;

    /**
     * Transaction reference.
     */
    transaction: Data.Transaction;

    /**
     * Type of allocation.
     */
    type: 'invoice_payin' | 'invoice_payout';

    /**
     * User reference.
     */
    user: Data.User;
  }

  export namespace Data {
    /**
     * Transaction reference.
     */
    export interface Transaction {
      /**
       * FRAGMENT generated unique ID.
       */
      id: string;

      /**
       * Unique user-provided external ID for the transaction.
       */
      external_id: string;
    }

    /**
     * User reference.
     */
    export interface User {
      /**
       * FRAGMENT generated unique ID.
       */
      id: string;

      /**
       * User-provided unique external ID.
       */
      external_id: string;
    }
  }
}

export interface TransactionCreateParams {
  /**
   * External account for the transaction. Identify it by `id`, `external_id`, or
   * both.
   */
  account: TransactionCreateParams.Account;

  /**
   * Allocations for the transaction. An empty array indicates unreconciled funds.
   */
  allocations: Array<TransactionCreateParams.Allocation>;

  /**
   * Transaction amount, as a string in the smallest unit of the currency (for
   * example, cents for USD). Can be positive or negative.
   */
  amount: string;

  /**
   * Currency code (ISO 4217 or crypto).
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
   * Unique user-provided external ID for the transaction.
   */
  external_id: string;

  /**
   * Timestamp when the transaction was posted. Uses ISO 8601 format.
   */
  posted: string;

  /**
   * Tags for the transaction.
   */
  tags?: Array<TransactionCreateParams.Tag>;
}

export namespace TransactionCreateParams {
  /**
   * External account for the transaction. Identify it by `id`, `external_id`, or
   * both.
   */
  export interface Account {
    /**
     * FRAGMENT generated unique ID.
     */
    id?: string;

    /**
     * Unique user-provided external ID for the external account.
     */
    external_id?: string;
  }

  /**
   * An allocation linking a transaction to an invoice.
   */
  export interface Allocation {
    /**
     * Allocation amount, as a positive string in the smallest unit of the currency
     * (for example, cents for USD).
     */
    amount: string;

    /**
     * Invoice to allocate against.
     */
    invoice_id: string;

    /**
     * Type of allocation.
     */
    type: 'invoice_payin' | 'invoice_payout';

    /**
     * Identifies a user by `id` or `external_id`.
     */
    user: Allocation.ID | Allocation.ExternalID;
  }

  export namespace Allocation {
    export interface ID {
      /**
       * FRAGMENT generated unique ID.
       */
      id: string;
    }

    export interface ExternalID {
      /**
       * User-provided unique external ID.
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

export interface TransactionUpdateParams {
  /**
   * Current version of the transaction. Must match the stored version.
   */
  current_transaction_version: number;

  allocations?: TransactionUpdateParams.Allocations;

  tags?: TransactionUpdateParams.Tags;
}

export namespace TransactionUpdateParams {
  export interface Allocations {
    /**
     * Creates a new allocation.
     */
    create?: Array<Allocations.Create>;

    /**
     * Updates an existing allocation.
     */
    update?: Array<Allocations.Update>;
  }

  export namespace Allocations {
    /**
     * An allocation linking a transaction to an invoice.
     */
    export interface Create {
      /**
       * Allocation amount, as a positive string in the smallest unit of the currency
       * (for example, cents for USD).
       */
      amount: string;

      /**
       * Invoice to allocate against.
       */
      invoice_id: string;

      /**
       * Type of allocation.
       */
      type: 'invoice_payin' | 'invoice_payout';

      /**
       * Identifies a user by `id` or `external_id`.
       */
      user: Create.ID | Create.ExternalID;
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
         * User-provided unique external ID.
         */
        external_id: string;
      }
    }

    export interface Update {
      /**
       * Allocation to update.
       */
      id: string;

      /**
       * Updated allocation amount, as a positive string in the smallest unit of the
       * currency (for example, cents for USD).
       */
      amount: string;
    }
  }

  export interface Tags {
    /**
     * Tags to add. Prefer `set` unless you specifically want create-only validation.
     */
    create?: Array<Tags.Create>;

    /**
     * Tags to remove by key.
     */
    delete?: Array<Tags.Delete>;

    /**
     * Tags to create or overwrite without requiring the caller to distinguish between
     * create and update.
     */
    set?: Array<Tags.Set>;

    /**
     * Tags to update. The key identifies the existing tag; the value is the new value.
     * Prefer `set` unless you specifically want update-only validation.
     */
    update?: Array<Tags.Update>;
  }

  export namespace Tags {
    /**
     * A key-value tag pair for metadata
     */
    export interface Create {
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

    export interface Delete {
      /**
       * Tag key to delete
       */
      key: string;
    }

    /**
     * A key-value tag pair for metadata
     */
    export interface Set {
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

    /**
     * A key-value tag pair for metadata
     */
    export interface Update {
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
}

export interface TransactionListParams {
  /**
   * Filter by account `id` or `external_id`. If the account does not exist, returns
   * an empty list.
   */
  account?: string;

  /**
   * Filter by reconciliation status. `reconciled` returns transactions where
   * unallocated_amount is 0. `unreconciled` returns transactions where
   * unallocated_amount is not 0. Omit for all transactions.
   */
  reconciliation_status?: 'reconciled' | 'unreconciled';
}

export interface TransactionSearchParams {
  /**
   * Filter for searching transactions.
   */
  filter: TransactionSearchParams.Filter;
}

export namespace TransactionSearchParams {
  /**
   * Filter for searching transactions.
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
       * External account for the transaction. Identify it by `id`, `external_id`, or
       * both.
       */
      export interface Any {
        /**
         * FRAGMENT generated unique ID.
         */
        id?: string;

        /**
         * Unique user-provided external ID for the external account.
         */
        external_id?: string;
      }
    }
  }
}

export interface TransactionSearchAllocationsParams {
  /**
   * Filter for searching transaction allocations.
   */
  filter: TransactionSearchAllocationsParams.Filter;
}

export namespace TransactionSearchAllocationsParams {
  /**
   * Filter for searching transaction allocations.
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
    type TransactionUpdateResponse as TransactionUpdateResponse,
    type TransactionListResponse as TransactionListResponse,
    type TransactionListHistoryResponse as TransactionListHistoryResponse,
    type TransactionSearchResponse as TransactionSearchResponse,
    type TransactionSearchAllocationsResponse as TransactionSearchAllocationsResponse,
    type TransactionCreateParams as TransactionCreateParams,
    type TransactionUpdateParams as TransactionUpdateParams,
    type TransactionListParams as TransactionListParams,
    type TransactionSearchParams as TransactionSearchParams,
    type TransactionSearchAllocationsParams as TransactionSearchAllocationsParams,
  };
}
