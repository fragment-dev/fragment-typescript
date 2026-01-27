# ExternalPayments

Types:

- <code><a href="./src/resources/external-payments.ts">ExternalPayment</a></code>
- <code><a href="./src/resources/external-payments.ts">ExternalPaymentSuccess</a></code>
- <code><a href="./src/resources/external-payments.ts">ExternalPaymentListResponse</a></code>

Methods:

- <code title="post /external-payments">client.externalPayments.<a href="./src/resources/external-payments.ts">create</a>({ ...params }) -> ExternalPaymentSuccess</code>
- <code title="get /external-payments">client.externalPayments.<a href="./src/resources/external-payments.ts">list</a>() -> ExternalPaymentListResponse</code>
- <code title="get /external-payments/:transactionId">client.externalPayments.<a href="./src/resources/external-payments.ts">retrieveTransactionID</a>() -> ExternalPaymentSuccess</code>

# Invoices

Types:

- <code><a href="./src/resources/invoices.ts">Invoice</a></code>
- <code><a href="./src/resources/invoices.ts">InvoiceSuccess</a></code>
- <code><a href="./src/resources/invoices.ts">InvoiceListResponse</a></code>

Methods:

- <code title="post /invoices">client.invoices.<a href="./src/resources/invoices.ts">create</a>({ ...params }) -> InvoiceSuccess</code>
- <code title="get /invoices">client.invoices.<a href="./src/resources/invoices.ts">list</a>() -> InvoiceListResponse</code>
- <code title="get /invoices/:id">client.invoices.<a href="./src/resources/invoices.ts">retrieveID</a>() -> InvoiceSuccess</code>

# Parties

Types:

- <code><a href="./src/resources/parties.ts">Party</a></code>
- <code><a href="./src/resources/parties.ts">PartySuccess</a></code>
- <code><a href="./src/resources/parties.ts">PartyListResponse</a></code>

Methods:

- <code title="post /parties">client.parties.<a href="./src/resources/parties.ts">create</a>({ ...params }) -> PartySuccess</code>
- <code title="get /parties">client.parties.<a href="./src/resources/parties.ts">list</a>() -> PartyListResponse</code>
- <code title="get /parties/:externalId">client.parties.<a href="./src/resources/parties.ts">retrieveExternalID</a>() -> PartySuccess</code>

# Products

Types:

- <code><a href="./src/resources/products.ts">Product</a></code>
- <code><a href="./src/resources/products.ts">ProductSuccess</a></code>
- <code><a href="./src/resources/products.ts">Seller</a></code>
- <code><a href="./src/resources/products.ts">ProductListResponse</a></code>

Methods:

- <code title="post /products">client.products.<a href="./src/resources/products.ts">create</a>({ ...params }) -> ProductSuccess</code>
- <code title="get /products/:code">client.products.<a href="./src/resources/products.ts">retrieve</a>() -> ProductSuccess</code>
- <code title="get /products">client.products.<a href="./src/resources/products.ts">list</a>() -> ProductListResponse</code>
