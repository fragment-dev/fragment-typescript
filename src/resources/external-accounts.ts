// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class ExternalAccounts extends APIResource {
  /**
   * Creates an external account.
   *
   * @example
   * ```ts
   * const externalAccount =
   *   await client.externalAccounts.create({
   *     external_id: 'ext_acc_123',
   *     name: 'Checking Account',
   *   });
   * ```
   */
  create(
    body: ExternalAccountCreateParams,
    options?: RequestOptions,
  ): APIPromise<ExternalAccountCreateResponse> {
    return this._client.post('/external-accounts', { body, ...options });
  }

  /**
   * Lists all external accounts.
   *
   * @example
   * ```ts
   * const externalAccounts =
   *   await client.externalAccounts.list();
   * ```
   */
  list(options?: RequestOptions): APIPromise<ExternalAccountListResponse> {
    return this._client.get('/external-accounts', options);
  }
}

/**
 * External account object.
 */
export interface ExternalAccount {
  /**
   * FRAGMENT generated unique ID.
   */
  id: string;

  /**
   * User-provided unique ID.
   */
  external_id: string;

  /**
   * Human-readable name.
   */
  name: string;
}

export interface ExternalAccountCreateResponse {
  /**
   * External account object.
   */
  data: ExternalAccount;
}

/**
 * List of external accounts.
 */
export interface ExternalAccountListResponse {
  data: Array<ExternalAccount>;
}

export interface ExternalAccountCreateParams {
  /**
   * User-provided unique ID.
   */
  external_id: string;

  /**
   * Human-readable name.
   */
  name: string;
}

export declare namespace ExternalAccounts {
  export {
    type ExternalAccount as ExternalAccount,
    type ExternalAccountCreateResponse as ExternalAccountCreateResponse,
    type ExternalAccountListResponse as ExternalAccountListResponse,
    type ExternalAccountCreateParams as ExternalAccountCreateParams,
  };
}
