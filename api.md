# ExternalAccounts

Types:

- <code><a href="./src/resources/external-accounts.ts">ExternalAccountCreateResponse</a></code>
- <code><a href="./src/resources/external-accounts.ts">ExternalAccountListResponse</a></code>

Methods:

- <code title="post /external-accounts">client.externalAccounts.<a href="./src/resources/external-accounts.ts">create</a>({ ...params }) -> ExternalAccountCreateResponse</code>
- <code title="get /external-accounts">client.externalAccounts.<a href="./src/resources/external-accounts.ts">list</a>() -> ExternalAccountListResponse</code>

# Invoices

Types:

- <code><a href="./src/resources/invoices.ts">InvoiceCreateResponse</a></code>
- <code><a href="./src/resources/invoices.ts">InvoiceRetrieveResponse</a></code>
- <code><a href="./src/resources/invoices.ts">InvoiceUpdateResponse</a></code>
- <code><a href="./src/resources/invoices.ts">InvoiceListResponse</a></code>
- <code><a href="./src/resources/invoices.ts">InvoiceListHistoryResponse</a></code>

Methods:

- <code title="post /invoices">client.invoices.<a href="./src/resources/invoices.ts">create</a>({ ...params }) -> InvoiceCreateResponse</code>
- <code title="get /invoices/{id}">client.invoices.<a href="./src/resources/invoices.ts">retrieve</a>(id) -> InvoiceRetrieveResponse</code>
- <code title="post /invoices/{id}">client.invoices.<a href="./src/resources/invoices.ts">update</a>(id, { ...params }) -> InvoiceUpdateResponse</code>
- <code title="get /invoices">client.invoices.<a href="./src/resources/invoices.ts">list</a>() -> InvoiceListResponse</code>
- <code title="get /invoices/{id}/history">client.invoices.<a href="./src/resources/invoices.ts">listHistory</a>(id) -> InvoiceListHistoryResponse</code>

# Platform

Types:

- <code><a href="./src/resources/platform.ts">PlatformRetrieveResponse</a></code>
- <code><a href="./src/resources/platform.ts">PlatformUpdateResponse</a></code>

Methods:

- <code title="get /platform">client.platform.<a href="./src/resources/platform.ts">retrieve</a>() -> PlatformRetrieveResponse</code>
- <code title="post /platform">client.platform.<a href="./src/resources/platform.ts">update</a>({ ...params }) -> PlatformUpdateResponse</code>

# Products

Types:

- <code><a href="./src/resources/products.ts">ProductCreateResponse</a></code>
- <code><a href="./src/resources/products.ts">ProductRetrieveResponse</a></code>
- <code><a href="./src/resources/products.ts">ProductListResponse</a></code>

Methods:

- <code title="post /products">client.products.<a href="./src/resources/products.ts">create</a>({ ...params }) -> ProductCreateResponse</code>
- <code title="get /products/{code}">client.products.<a href="./src/resources/products.ts">retrieve</a>(code) -> ProductRetrieveResponse</code>
- <code title="get /products">client.products.<a href="./src/resources/products.ts">list</a>() -> ProductListResponse</code>

# Roles

Types:

- <code><a href="./src/resources/roles.ts">RoleCreateResponse</a></code>
- <code><a href="./src/resources/roles.ts">RoleListResponse</a></code>

Methods:

- <code title="post /roles">client.roles.<a href="./src/resources/roles.ts">create</a>({ ...params }) -> RoleCreateResponse</code>
- <code title="get /roles">client.roles.<a href="./src/resources/roles.ts">list</a>() -> RoleListResponse</code>

# Transactions

Types:

- <code><a href="./src/resources/transactions.ts">TransactionCreateResponse</a></code>
- <code><a href="./src/resources/transactions.ts">TransactionListResponse</a></code>

Methods:

- <code title="post /transactions">client.transactions.<a href="./src/resources/transactions.ts">create</a>({ ...params }) -> TransactionCreateResponse</code>
- <code title="get /transactions">client.transactions.<a href="./src/resources/transactions.ts">list</a>({ ...params }) -> TransactionListResponse</code>

# Users

Types:

- <code><a href="./src/resources/users.ts">UserCreateResponse</a></code>
- <code><a href="./src/resources/users.ts">UserListResponse</a></code>

Methods:

- <code title="post /users">client.users.<a href="./src/resources/users.ts">create</a>({ ...params }) -> UserCreateResponse</code>
- <code title="get /users">client.users.<a href="./src/resources/users.ts">list</a>() -> UserListResponse</code>
