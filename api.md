# Experimental

## PaymentFlows

Types:

- <code><a href="./src/resources/experimental/payment-flows.ts">PaymentFlow</a></code>
- <code><a href="./src/resources/experimental/payment-flows.ts">PaymentFlowCreateResponse</a></code>
- <code><a href="./src/resources/experimental/payment-flows.ts">PaymentFlowRetrieveResponse</a></code>
- <code><a href="./src/resources/experimental/payment-flows.ts">PaymentFlowSearchResponse</a></code>

Methods:

- <code title="post /payment-flows">client.experimental.paymentFlows.<a href="./src/resources/experimental/payment-flows.ts">create</a>({ ...params }) -> PaymentFlowCreateResponse</code>
- <code title="get /payment-flows/{payment_flow_ref}">client.experimental.paymentFlows.<a href="./src/resources/experimental/payment-flows.ts">retrieve</a>(paymentFlowRef) -> PaymentFlowRetrieveResponse</code>
- <code title="post /payment-flows/search">client.experimental.paymentFlows.<a href="./src/resources/experimental/payment-flows.ts">search</a>({ ...params }) -> PaymentFlowSearchResponse</code>

## Payments

Types:

- <code><a href="./src/resources/experimental/payments.ts">Payment</a></code>
- <code><a href="./src/resources/experimental/payments.ts">PaymentRetrieveResponse</a></code>
- <code><a href="./src/resources/experimental/payments.ts">PaymentSearchResponse</a></code>

Methods:

- <code title="get /payments/{payment_ref}">client.experimental.payments.<a href="./src/resources/experimental/payments.ts">retrieve</a>(paymentRef) -> PaymentRetrieveResponse</code>
- <code title="post /payments/search">client.experimental.payments.<a href="./src/resources/experimental/payments.ts">search</a>({ ...params }) -> PaymentSearchResponse</code>

# ExternalAccounts

Types:

- <code><a href="./src/resources/external-accounts.ts">ExternalAccount</a></code>
- <code><a href="./src/resources/external-accounts.ts">ExternalAccountCreateResponse</a></code>
- <code><a href="./src/resources/external-accounts.ts">ExternalAccountListResponse</a></code>

Methods:

- <code title="post /external-accounts">client.externalAccounts.<a href="./src/resources/external-accounts.ts">create</a>({ ...params }) -> ExternalAccountCreateResponse</code>
- <code title="get /external-accounts">client.externalAccounts.<a href="./src/resources/external-accounts.ts">list</a>() -> ExternalAccountListResponse</code>

# Invoices

Types:

- <code><a href="./src/resources/invoices.ts">Invoice</a></code>
- <code><a href="./src/resources/invoices.ts">InvoiceCreateResponse</a></code>
- <code><a href="./src/resources/invoices.ts">InvoiceRetrieveResponse</a></code>
- <code><a href="./src/resources/invoices.ts">InvoiceUpdateResponse</a></code>
- <code><a href="./src/resources/invoices.ts">InvoiceListResponse</a></code>
- <code><a href="./src/resources/invoices.ts">InvoiceListHistoryResponse</a></code>
- <code><a href="./src/resources/invoices.ts">InvoiceSearchResponse</a></code>

Methods:

- <code title="post /invoices">client.invoices.<a href="./src/resources/invoices.ts">create</a>({ ...params }) -> InvoiceCreateResponse</code>
- <code title="get /invoices/{id}">client.invoices.<a href="./src/resources/invoices.ts">retrieve</a>(id) -> InvoiceRetrieveResponse</code>
- <code title="patch /invoices/{id}">client.invoices.<a href="./src/resources/invoices.ts">update</a>(id, { ...params }) -> InvoiceUpdateResponse</code>
- <code title="get /invoices">client.invoices.<a href="./src/resources/invoices.ts">list</a>() -> InvoiceListResponse</code>
- <code title="get /invoices/{id}/history">client.invoices.<a href="./src/resources/invoices.ts">listHistory</a>(id) -> InvoiceListHistoryResponse</code>
- <code title="post /invoices/search">client.invoices.<a href="./src/resources/invoices.ts">search</a>({ ...params }) -> InvoiceSearchResponse</code>

# Products

Types:

- <code><a href="./src/resources/products.ts">Product</a></code>
- <code><a href="./src/resources/products.ts">ProductCreateResponse</a></code>
- <code><a href="./src/resources/products.ts">ProductRetrieveResponse</a></code>
- <code><a href="./src/resources/products.ts">ProductListResponse</a></code>

Methods:

- <code title="post /products">client.products.<a href="./src/resources/products.ts">create</a>({ ...params }) -> ProductCreateResponse</code>
- <code title="get /products/{code}">client.products.<a href="./src/resources/products.ts">retrieve</a>(code) -> ProductRetrieveResponse</code>
- <code title="get /products">client.products.<a href="./src/resources/products.ts">list</a>() -> ProductListResponse</code>

# Transactions

Types:

- <code><a href="./src/resources/transactions.ts">Transaction</a></code>
- <code><a href="./src/resources/transactions.ts">TransactionCreateResponse</a></code>
- <code><a href="./src/resources/transactions.ts">TransactionRetrieveResponse</a></code>
- <code><a href="./src/resources/transactions.ts">TransactionUpdateResponse</a></code>
- <code><a href="./src/resources/transactions.ts">TransactionListResponse</a></code>
- <code><a href="./src/resources/transactions.ts">TransactionListHistoryResponse</a></code>
- <code><a href="./src/resources/transactions.ts">TransactionSearchResponse</a></code>
- <code><a href="./src/resources/transactions.ts">TransactionSearchAllocationsResponse</a></code>

Methods:

- <code title="post /transactions">client.transactions.<a href="./src/resources/transactions.ts">create</a>({ ...params }) -> TransactionCreateResponse</code>
- <code title="get /transactions/{transaction_ref}">client.transactions.<a href="./src/resources/transactions.ts">retrieve</a>(transactionRef) -> TransactionRetrieveResponse</code>
- <code title="patch /transactions/{transaction_ref}">client.transactions.<a href="./src/resources/transactions.ts">update</a>(transactionRef, { ...params }) -> TransactionUpdateResponse</code>
- <code title="get /transactions">client.transactions.<a href="./src/resources/transactions.ts">list</a>({ ...params }) -> TransactionListResponse</code>
- <code title="get /transactions/{transaction_ref}/history">client.transactions.<a href="./src/resources/transactions.ts">listHistory</a>(transactionRef) -> TransactionListHistoryResponse</code>
- <code title="post /transactions/search">client.transactions.<a href="./src/resources/transactions.ts">search</a>({ ...params }) -> TransactionSearchResponse</code>
- <code title="post /transactions/allocations/search">client.transactions.<a href="./src/resources/transactions.ts">searchAllocations</a>({ ...params }) -> TransactionSearchAllocationsResponse</code>

# Users

Types:

- <code><a href="./src/resources/users.ts">User</a></code>
- <code><a href="./src/resources/users.ts">UserCreateResponse</a></code>
- <code><a href="./src/resources/users.ts">UserUpdateResponse</a></code>
- <code><a href="./src/resources/users.ts">UserListResponse</a></code>

Methods:

- <code title="post /users">client.users.<a href="./src/resources/users.ts">create</a>({ ...params }) -> UserCreateResponse</code>
- <code title="patch /users/{user_ref}">client.users.<a href="./src/resources/users.ts">update</a>(userRef, { ...params }) -> UserUpdateResponse</code>
- <code title="get /users">client.users.<a href="./src/resources/users.ts">list</a>() -> UserListResponse</code>
