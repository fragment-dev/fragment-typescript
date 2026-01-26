// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

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

  /**
   * Gets an invoice by ID
   *
   * @example
   * ```ts
   * const invoiceSuccess = await client.invoices.retrieveID();
   * ```
   */
  retrieveID(options?: RequestOptions): APIPromise<InvoiceSuccess> {
    return this._client.get('/invoices/:id', options);
  }
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
  lineItems?: Array<Invoice.LineItem>;

  /**
   * ISO 8601 timestamp when the invoice was last modified
   */
  modified?: string;
}

export namespace Invoice {
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
     * Description of the line item
     */
    description: string;

    /**
     * External ID of the party receiving payout
     */
    payout_party: string;

    /**
     * ID of the product/catalog item
     */
    product_id: string;
  }
}

export interface InvoiceSuccess {
  /**
   * Invoice object
   */
  data: Invoice;
}

/**
 * List of invoices
 */
export interface InvoiceListResponse {
  data: Array<Invoice>;
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
  lineItems?: Array<InvoiceCreateParams.LineItem>;
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
     * Description of the line item
     */
    description: string;

    /**
     * External ID of the party receiving payout
     */
    payout_party: string;

    /**
     * ID of the product/catalog item
     */
    product_id: string;
  }
}

export declare namespace Invoices {
  export {
    type Invoice as Invoice,
    type InvoiceSuccess as InvoiceSuccess,
    type InvoiceListResponse as InvoiceListResponse,
    type InvoiceCreateParams as InvoiceCreateParams,
  };
}
