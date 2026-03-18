// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Fragment from '@fragment-dev/ts-node';

const client = new Fragment({
  clientID: 'My Client ID',
  clientSecret: 'My Client Secret',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource transactions', () => {
  // Mock server tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.transactions.create({
      account: {},
      allocations: [
        {
          amount: '1000',
          invoice_id: 'inv_abc123',
          type: 'invoice_payin',
          user: { id: 'user_abc123' },
        },
      ],
      amount: '-1000',
      currency: 'USD',
      external_id: 'bank_txn_123',
      posted: '2026-02-12T00:00:00.000Z',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('create: required and optional params', async () => {
    const response = await client.transactions.create({
      account: { id: 'ext_account_YWJjMTIz', external_id: 'acct_external_123' },
      allocations: [
        {
          amount: '1000',
          invoice_id: 'inv_abc123',
          type: 'invoice_payin',
          user: { id: 'user_abc123' },
        },
      ],
      amount: '-1000',
      currency: 'USD',
      external_id: 'bank_txn_123',
      posted: '2026-02-12T00:00:00.000Z',
      tags: [{ key: 'region', value: 'us-east' }],
    });
  });

  // Mock server tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.transactions.retrieve('txn_abc123');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.transactions.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.transactions.list(
        { account: 'ext_account_YWJjMTIz', reconciliation_status: 'reconciled' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Fragment.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('createAllocations: only required params', async () => {
    const responsePromise = client.transactions.createAllocations('txn_abc123', {
      allocation_updates: [
        {
          amount: '1000',
          invoice_id: 'inv_abc123',
          op: 'add',
          type: 'invoice_payin',
          user: { id: 'user_abc123' },
        },
      ],
      version: 0,
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('createAllocations: required and optional params', async () => {
    const response = await client.transactions.createAllocations('txn_abc123', {
      allocation_updates: [
        {
          amount: '1000',
          invoice_id: 'inv_abc123',
          op: 'add',
          type: 'invoice_payin',
          user: { id: 'user_abc123' },
        },
      ],
      version: 0,
    });
  });

  // Mock server tests are disabled
  test.skip('listHistory', async () => {
    const responsePromise = client.transactions.listHistory('txn_abc123');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('search: only required params', async () => {
    const responsePromise = client.transactions.search({ filter: { account: { any: [{}] } } });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('search: required and optional params', async () => {
    const response = await client.transactions.search({
      filter: { account: { any: [{ id: 'ext_account_YWJjMTIz', external_id: 'acct_external_123' }] } },
    });
  });

  // Mock server tests are disabled
  test.skip('searchAllocations: only required params', async () => {
    const responsePromise = client.transactions.searchAllocations({
      filter: { invoice_id: { any: ['inv_abc123'] } },
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('searchAllocations: required and optional params', async () => {
    const response = await client.transactions.searchAllocations({
      filter: { invoice_id: { any: ['inv_abc123'] } },
    });
  });
});
