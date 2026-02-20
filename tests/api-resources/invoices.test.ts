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
      invoiceId: 'invoice_2024_001',
      lineItems: [
        {
          amount: '1000',
          currencyCode: 'USD',
          description: 'Professional services for January 2026',
          product_id: 'prod_1234567890',
          type: 'payout',
          user_id: 'user_ext_456',
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
      invoiceId: 'invoice_2024_001',
      lineItems: [
        {
          amount: '1000',
          currencyCode: 'USD',
          description: 'Professional services for January 2026',
          product_id: 'prod_1234567890',
          type: 'payout',
          user_id: 'user_ext_456',
        },
      ],
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
    const responsePromise = client.invoices.update('inv_1234567890', {
      line_items_update: [
        {
          amount: '1000',
          currency_code: 'USD',
          description: 'Professional services for January 2026',
          op: 'add',
          product_id: 'prod_1234567890',
          type: 'payout',
          user_id: 'user_ext_456',
        },
      ],
      version: 1,
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
  test.skip('update: required and optional params', async () => {
    const response = await client.invoices.update('inv_1234567890', {
      line_items_update: [
        {
          amount: '1000',
          currency_code: 'USD',
          description: 'Professional services for January 2026',
          op: 'add',
          product_id: 'prod_1234567890',
          type: 'payout',
          user_id: 'user_ext_456',
        },
      ],
      version: 1,
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
});
