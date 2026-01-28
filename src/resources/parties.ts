// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Parties extends APIResource {
  /**
   * Creates a new party
   *
   * @example
   * ```ts
   * const party = await client.parties.create({
   *   externalId: 'party_ext_123',
   * });
   * ```
   */
  create(body: PartyCreateParams, options?: RequestOptions): APIPromise<PartyCreateResponse> {
    return this._client.post('/parties', { body, ...options });
  }

  /**
   * Gets a party by external ID
   *
   * @example
   * ```ts
   * const party = await client.parties.retrieve(
   *   'party_ext_123',
   * );
   * ```
   */
  retrieve(externalID: string, options?: RequestOptions): APIPromise<PartyRetrieveResponse> {
    return this._client.get(path`/parties/${externalID}`, options);
  }

  /**
   * Lists all parties for the workspace
   *
   * @example
   * ```ts
   * const parties = await client.parties.list();
   * ```
   */
  list(options?: RequestOptions): APIPromise<PartyListResponse> {
    return this._client.get('/parties', options);
  }
}

export interface PartyCreateResponse {
  /**
   * Party object
   */
  data: PartyCreateResponse.Data;
}

export namespace PartyCreateResponse {
  /**
   * Party object
   */
  export interface Data {
    /**
     * External ID for the party
     */
    externalId: string;

    /**
     * Type of the counterparty
     */
    counterPartyType?: string;
  }
}

export interface PartyRetrieveResponse {
  /**
   * Party object
   */
  data: PartyRetrieveResponse.Data;
}

export namespace PartyRetrieveResponse {
  /**
   * Party object
   */
  export interface Data {
    /**
     * External ID for the party
     */
    externalId: string;

    /**
     * Type of the counterparty
     */
    counterPartyType?: string;
  }
}

/**
 * List of parties
 */
export interface PartyListResponse {
  data: Array<PartyListResponse.Data>;
}

export namespace PartyListResponse {
  /**
   * Party object
   */
  export interface Data {
    /**
     * External ID for the party
     */
    externalId: string;

    /**
     * Type of the counterparty
     */
    counterPartyType?: string;
  }
}

export interface PartyCreateParams {
  /**
   * External ID for the party
   */
  externalId: string;

  /**
   * Type of the counterparty (e.g., buyer, seller)
   */
  type?: string;
}

export declare namespace Parties {
  export {
    type PartyCreateResponse as PartyCreateResponse,
    type PartyRetrieveResponse as PartyRetrieveResponse,
    type PartyListResponse as PartyListResponse,
    type PartyCreateParams as PartyCreateParams,
  };
}
