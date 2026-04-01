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
          tags: [{ key: 'region', value: 'us-east' }],
        },
      ],
      tags: [{ key: 'region', value: 'us-east' }],
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
            tags: [{ key: 'region', value: 'us-east' }],
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
              create: [{ key: 'region', value: 'us-east' }],
              delete: [{ key: 'key' }],
              set: [{ key: 'region', value: 'eu-west-1' }],
              update: [{ key: 'region', value: 'us-east' }],
            },
          },
        ],
      },
      tags: {
        create: [{ key: 'region', value: 'us-east' }],
        delete: [{ key: 'key' }],
        set: [{ key: 'region', value: 'eu-west-1' }],
        update: [{ key: 'region', value: 'us-east' }],
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
    const responsePromise = client.invoices.search({
      filter: {},
      page_info: {},
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
  test.skip('search: required and optional params', async () => {
    const response = await client.invoices.search({
      filter: {
        status: 'open',
        tags: { all: [{ key: 'env', value: 'prod' }], any: [{ key: 'region', value: 'us-*' }] },
      },
      page_info: { after: 'after', limit: 20 },
    });
  });
});
