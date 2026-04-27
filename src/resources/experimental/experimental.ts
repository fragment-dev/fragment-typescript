// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as PaymentFlowsAPI from './payment-flows';
import {
  PaymentFlow,
  PaymentFlowCreateParams,
  PaymentFlowCreateResponse,
  PaymentFlowRetrieveResponse,
  PaymentFlowSearchParams,
  PaymentFlowSearchResponse,
  PaymentFlows,
} from './payment-flows';
import * as PaymentsAPI from './payments';
import {
  Payment,
  PaymentRetrieveResponse,
  PaymentSearchParams,
  PaymentSearchResponse,
  Payments,
} from './payments';

export class Experimental extends APIResource {
  paymentFlows: PaymentFlowsAPI.PaymentFlows = new PaymentFlowsAPI.PaymentFlows(this._client);
  payments: PaymentsAPI.Payments = new PaymentsAPI.Payments(this._client);
}

Experimental.PaymentFlows = PaymentFlows;
Experimental.Payments = Payments;

export declare namespace Experimental {
  export {
    PaymentFlows as PaymentFlows,
    type PaymentFlow as PaymentFlow,
    type PaymentFlowCreateResponse as PaymentFlowCreateResponse,
    type PaymentFlowRetrieveResponse as PaymentFlowRetrieveResponse,
    type PaymentFlowSearchResponse as PaymentFlowSearchResponse,
    type PaymentFlowCreateParams as PaymentFlowCreateParams,
    type PaymentFlowSearchParams as PaymentFlowSearchParams,
  };

  export {
    Payments as Payments,
    type Payment as Payment,
    type PaymentRetrieveResponse as PaymentRetrieveResponse,
    type PaymentSearchResponse as PaymentSearchResponse,
    type PaymentSearchParams as PaymentSearchParams,
  };
}
