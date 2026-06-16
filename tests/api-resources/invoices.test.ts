// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Fragment from '@fragment-dev/ts-node';

const client = new Fragment({
  clientID: 'My Client ID',
  clientSecret: 'My Client Secret',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource invoices', () => {
  // Mock server tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.invoices.create({
      invoice_id: 'invoice_2024_001',
      line_items: [
        {
          description: 'Professional services for January 2026',
          product_id: 'prod_1234567890',
          type: 'payout',
          user: { id: 'user_abc123' },
        },
      ],
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
    const response = await client.invoices.create({
      invoice_id: 'invoice_2024_001',
      line_items: [
        {
          description: 'Professional services for January 2026',
          product_id: 'prod_1234567890',
          type: 'payout',
          user: { id: 'user_abc123' },
          amount: '1000',
          currency_code: 'USD',
          price: {
            amount: '1000',
            quantity: 2,
            unit_price: '500',
          },
          tags: [{ key: 'department', value: 'engineering' }],
        },
      ],
      tags: [{ key: 'department', value: 'engineering' }],
    });
  });

  // Mock server tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.invoices.retrieve('inv_1234567890');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.invoices.update('inv_1234567890', { current_invoice_version: 3 });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('update: required and optional params', async () => {
    const response = await client.invoices.update('inv_1234567890', {
      current_invoice_version: 3,
      line_items: {
        create: [
          {
            description: 'Professional services for January 2026',
            product_id: 'prod_1234567890',
            type: 'payout',
            user: { id: 'user_abc123' },
            amount: '1000',
            currency_code: 'USD',
            price: {
              amount: '1000',
              quantity: 2,
              unit_price: '500',
            },
            tags: [{ key: 'department', value: 'engineering' }],
          },
        ],
        delete: [{ id: 'id' }],
        update: [
          {
            id: 'li_1234567890',
            description: 'description',
            price: {
              quantity: 2,
              unit_price: '500',
              amount: '2000',
            },
            tags: {
              create: [{ key: 'department', value: 'engineering' }],
              delete: [{ key: 'key' }],
              set: [{ key: 'department', value: 'engineering' }],
              update: [{ key: 'department', value: 'engineering' }],
            },
          },
        ],
      },
      tags: {
        create: [{ key: 'department', value: 'engineering' }],
        delete: [{ key: 'key' }],
        set: [{ key: 'department', value: 'engineering' }],
        update: [{ key: 'department', value: 'engineering' }],
      },
    });
  });

  // Mock server tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.invoices.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('createBatchGet: only required params', async () => {
    const responsePromise = client.invoices.createBatchGet({ ids: ['string'] });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('createBatchGet: required and optional params', async () => {
    const response = await client.invoices.createBatchGet({ ids: ['string'] });
  });

  // Mock server tests are disabled
  test.skip('listHistory', async () => {
    const responsePromise = client.invoices.listHistory('inv_1234567890');
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
    const responsePromise = client.invoices.search({ filter: {} });
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
    const response = await client.invoices.search({
      filter: {
        created: { after: '2026-01-01T00:00:00Z', before: '2026-02-01T00:00:00Z' },
        modified: { after: '2026-01-01T00:00:00Z', before: '2026-02-01T00:00:00Z' },
        status: 'open',
        tags: {
          all: [{ key: 'department', value: 'engineering' }],
          any: [{ key: 'department', value: 'eng*' }],
        },
        transaction_tags: {
          all: [{ key: 'department', value: 'engineering' }],
          any: [{ key: 'department', value: 'eng*' }],
        },
        user_tag_and_balance: {
          net_remaining_balance: {
            eq: 'eq',
            gt: '0',
            gte: 'gte',
            lt: 'lt',
            lte: 'lte',
            ne: 'ne',
          },
          user_tags: {
            all: [{ key: 'department', value: 'engineering' }],
            any: [{ key: 'department', value: 'eng*' }],
            not_any: [{ key: 'department', value: 'eng*' }],
          },
        },
        users: { all: [{ id: 'user_abc123' }], any: [{ id: 'user_abc123' }] },
      },
      page_info: { after: 'after', limit: 20 },
    });
  });
});
