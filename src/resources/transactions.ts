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
   * Retrieves a transaction by ID or external ID.
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
   * Retrieves the version history of a transaction.
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
   *   filter: {},
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
   * Transaction amount, as a string in the smallest currency unit, such as cents for
   * USD. Can be positive or negative.
   */
  amount: string;

  /**
   * Timestamp when the transaction was created. Uses ISO 8601 format.
   */
  created: string;

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
   * User-provided unique ID.
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
     * User-provided unique ID.
     */
    external_id: string;
  }

  /**
   * An allocation linking a transaction to an invoice.
   */
  export interface Allocation {
    /**
     * Allocated amount, as a positive string in the smallest currency unit, such as
     * cents for USD.
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
     * User associated with the allocation.
     */
    user: Allocation.User;
  }

  export namespace Allocation {
    /**
     * User associated with the allocation.
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
   * @deprecated Deprecated. Use `data_v2.transactions` instead. Returns the full
   * unpaginated list of matching transactions.
   */
  data: Array<Transaction>;

  data_v2: TransactionSearchResponse.DataV2;
}

export namespace TransactionSearchResponse {
  export interface DataV2 {
    /**
     * Pagination cursors.
     */
    page_info: DataV2.PageInfo;

    /**
     * Transactions matching the search criteria.
     */
    transactions: Array<TransactionsAPI.Transaction>;
  }

  export namespace DataV2 {
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
     * Allocated amount, as a positive string in the smallest currency unit, such as
     * cents for USD.
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
     * Transaction the allocation is applied to.
     */
    transaction: Data.Transaction;

    /**
     * Type of allocation.
     */
    type: 'invoice_payin' | 'invoice_payout';

    /**
     * User associated with the allocation.
     */
    user: Data.User;
  }

  export namespace Data {
    /**
     * Transaction the allocation is applied to.
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
    }

    /**
     * User associated with the allocation.
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
   * Transaction amount, as a string in the smallest currency unit, such as cents for
   * USD. Can be positive or negative.
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
   * User-provided unique ID.
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
     * User-provided unique ID.
     */
    external_id?: string;
  }

  /**
   * An allocation linking a transaction to an invoice.
   */
  export interface Allocation {
    /**
     * Allocation amount, as a positive string in the smallest currency unit, such as
     * cents for USD.
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
       * User-provided unique ID.
       */
      external_id: string;
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

export interface TransactionUpdateParams {
  /**
   * Current version of the transaction. Must match the stored version.
   */
  current_transaction_version: number;

  /**
   * Allocation updates.
   */
  allocations?: TransactionUpdateParams.Allocations;

  /**
   * Tag updates.
   */
  tags?: TransactionUpdateParams.Tags;
}

export namespace TransactionUpdateParams {
  /**
   * Allocation updates.
   */
  export interface Allocations {
    /**
     * Allocations to create.
     */
    create?: Array<Allocations.Create>;

    /**
     * Allocations to update.
     */
    update?: Array<Allocations.Update>;
  }

  export namespace Allocations {
    /**
     * An allocation linking a transaction to an invoice.
     */
    export interface Create {
      /**
       * Allocation amount, as a positive string in the smallest currency unit, such as
       * cents for USD.
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
         * User-provided unique ID.
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
       * Updated allocation amount, as a positive string in the smallest currency unit,
       * such as cents for USD.
       */
      amount: string;
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

  /**
   * Pagination parameters.
   */
  page_info?: TransactionSearchParams.PageInfo;
}

export namespace TransactionSearchParams {
  /**
   * Filter for searching transactions.
   */
  export interface Filter {
    /**
     * Account filter.
     */
    account?: Filter.Account;

    /**
     * Tag-based filter criteria. When both `any` and `all` are provided, results must
     * match every entry in `all` AND at least one entry in `any`.
     */
    tags?: Filter.Tags;
  }

  export namespace Filter {
    /**
     * Account filter.
     */
    export interface Account {
      /**
       * Match transactions belonging to any of these accounts, using OR logic.
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
         * User-provided unique ID.
         */
        external_id?: string;
      }
    }

    /**
     * Tag-based filter criteria. When both `any` and `all` are provided, results must
     * match every entry in `all` AND at least one entry in `any`.
     */
    export interface Tags {
      /**
       * Returns transactions matching every specified tag, using AND logic.
       */
      all?: Array<Tags.All>;

      /**
       * Returns transactions matching at least one of the specified tags, using OR
       * logic.
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
    /**
     * Invoice ID filter.
     */
    invoice_id: Filter.InvoiceID;
  }

  export namespace Filter {
    /**
     * Invoice ID filter.
     */
    export interface InvoiceID {
      /**
       * Match allocations where invoice_id is any of these values, using OR logic.
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
