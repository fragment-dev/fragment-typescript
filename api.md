# ExternalPayments

Types:

- <code><a href="./src/resources/external-payments.ts">ExternalPaymentSuccess</a></code>
- <code><a href="./src/resources/external-payments.ts">ExternalPaymentListResponse</a></code>

Methods:

- <code title="post /external-payments">client.externalPayments.<a href="./src/resources/external-payments.ts">create</a>({ ...params }) -> ExternalPaymentSuccess</code>
- <code title="get /external-payments/{transactionId}">client.externalPayments.<a href="./src/resources/external-payments.ts">retrieve</a>(transactionID) -> ExternalPaymentSuccess</code>
- <code title="get /external-payments">client.externalPayments.<a href="./src/resources/external-payments.ts">list</a>() -> ExternalPaymentListResponse</code>

# Invoices

Types:

- <code><a href="./src/resources/invoices.ts">CreateInvoiceLineItemInput</a></code>
- <code><a href="./src/resources/invoices.ts">CreateInvoiceRequest</a></code>
- <code><a href="./src/resources/invoices.ts">Invoice</a></code>
- <code><a href="./src/resources/invoices.ts">InvoiceLineItem</a></code>
- <code><a href="./src/resources/invoices.ts">InvoiceList</a></code>
- <code><a href="./src/resources/invoices.ts">InvoiceSuccess</a></code>
- <code><a href="./src/resources/invoices.ts">UpdateInvoiceRequest</a></code>

Methods:

- <code title="post /invoices">client.invoices.<a href="./src/resources/invoices.ts">create</a>({ ...params }) -> InvoiceSuccess</code>
- <code title="get /invoices/{id}">client.invoices.<a href="./src/resources/invoices.ts">retrieve</a>(id) -> InvoiceSuccess</code>
- <code title="post /invoices/{id}">client.invoices.<a href="./src/resources/invoices.ts">update</a>(id, { ...params }) -> InvoiceSuccess</code>
- <code title="get /invoices">client.invoices.<a href="./src/resources/invoices.ts">list</a>() -> InvoiceList</code>

# Parties

Types:

- <code><a href="./src/resources/parties.ts">PartyCreateResponse</a></code>
- <code><a href="./src/resources/parties.ts">PartyRetrieveResponse</a></code>
- <code><a href="./src/resources/parties.ts">PartyListResponse</a></code>

Methods:

- <code title="post /parties">client.parties.<a href="./src/resources/parties.ts">create</a>({ ...params }) -> PartyCreateResponse</code>
- <code title="get /parties/{externalId}">client.parties.<a href="./src/resources/parties.ts">retrieve</a>(externalID) -> PartyRetrieveResponse</code>
- <code title="get /parties">client.parties.<a href="./src/resources/parties.ts">list</a>() -> PartyListResponse</code>

# Platform

Types:

- <code><a href="./src/resources/platform.ts">Platform</a></code>
- <code><a href="./src/resources/platform.ts">PlatformPayout</a></code>
- <code><a href="./src/resources/platform.ts">PlatformSeller</a></code>
- <code><a href="./src/resources/platform.ts">PlatformSuccess</a></code>
- <code><a href="./src/resources/platform.ts">UpdatePlatformDetailsRequest</a></code>

Methods:

- <code title="get /platform">client.platform.<a href="./src/resources/platform.ts">retrieve</a>() -> PlatformSuccess</code>
- <code title="post /platform">client.platform.<a href="./src/resources/platform.ts">update</a>({ ...params }) -> PlatformSuccess</code>

# Products

Types:

- <code><a href="./src/resources/products.ts">CreateProductRequest</a></code>
- <code><a href="./src/resources/products.ts">Product</a></code>
- <code><a href="./src/resources/products.ts">ProductList</a></code>
- <code><a href="./src/resources/products.ts">ProductSuccess</a></code>

Methods:

- <code title="post /products">client.products.<a href="./src/resources/products.ts">create</a>({ ...params }) -> ProductSuccess</code>
- <code title="get /products/{code}">client.products.<a href="./src/resources/products.ts">retrieve</a>(code) -> ProductSuccess</code>
- <code title="get /products">client.products.<a href="./src/resources/products.ts">list</a>() -> ProductList</code>
