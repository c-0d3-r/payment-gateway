import { AggregateRoot } from 'src/common/abstractions/aggregate-root';
import {
  Currency,
  PaymentStatus,
  PaymentSystem,
  PaymentType,
} from 'src/modules/payments/domain/enums';

export class PaymentEntity extends AggregateRoot {
  public currency: Currency;
  public amount: number;
  public idempotencyKey: string;
  public transactionId: string;
  public externalPaymentId: string;
  public paymentId: number;
  public orderId: number;
  public metadata: Record<string, unknown>;
  public paymentSystem: PaymentSystem;
  public paymentStatus: PaymentStatus;
  public paymentType: PaymentType;
  public description: string;
}
