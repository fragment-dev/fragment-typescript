// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Parties extends APIResource {
  /**
   * Creates a new party
   *
   * @example
   * ```ts
   * const partySuccess = await client.parties.create({
   *   externalId: 'party_ext_123',
   * });
   * ```
   */
  create(body: PartyCreateParams, options?: RequestOptions): APIPromise<PartySuccess> {
    return this._client.post('/parties', { body, ...options });
  }

  /**
   * Gets a party by external ID
   *
   * @example
   * ```ts
   * const partySuccess = await client.parties.retrieve();
   * ```
   */
  retrieve(options?: RequestOptions): APIPromise<PartySuccess> {
    return this._client.get('/parties/:externalId', options);
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

/**
 * Party object
 */
export interface Party {
  /**
   * External ID for the party
   */
  externalId: string;

  /**
   * Type of the counterparty
   */
  counterPartyType?: string;
}

export interface PartySuccess {
  /**
   * Party object
   */
  data: Party;
}

/**
 * List of parties
 */
export interface PartyListResponse {
  data: Array<Party>;
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
    type Party as Party,
    type PartySuccess as PartySuccess,
    type PartyListResponse as PartyListResponse,
    type PartyCreateParams as PartyCreateParams,
  };
}
