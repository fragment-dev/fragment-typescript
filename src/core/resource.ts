// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { Fragment } from '../client';

export abstract class APIResource {
  protected _client: Fragment;

  constructor(client: Fragment) {
    this._client = client;
  }
}
