// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Fragment from '@fragment-dev/ts-node';

const client = new Fragment({
  clientID: 'My Client ID',
  clientSecret: 'My Client Secret',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource paymentFlows', () => {
  // Mock server tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.experimental.paymentFlows.create({
      external_id: 'pf_123',
      invoice: { id: 'inv_abc123' },
      type: 'single_invoice_settlement',
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
    const response = await client.experimental.paymentFlows.create({
      external_id: 'pf_123',
      invoice: { id: 'inv_abc123' },
      type: 'single_invoice_settlement',
    });
  });

  // Mock server tests are disabled
  test.skip('retrieve', async () => {
    const responsePromise = client.experimental.paymentFlows.retrieve('pf_abc123');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('search', async () => {
    const responsePromise = client.experimental.paymentFlows.search();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('search: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.experimental.paymentFlows.search(
        {
          invoice_id: 'invoice_id',
          page_info: { after: 'after', limit: 0 },
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Fragment.NotFoundError);
  });
});
