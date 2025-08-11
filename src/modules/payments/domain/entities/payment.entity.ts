import { AggregateRootId } from '@/base/types/aggregate-root-id.type';
import { Payout } from '@/modules/payments/domain/entities/payout.model';
import { AggregateRoot } from 'src/common/abstractions/aggregate-root';
import {
  Currency,
  PaymentStatus,
  PaymentSystem,
  PaymentType,
} from 'src/modules/payments/domain/enums';

export class PaymentEntity extends AggregateRoot {
  public constructor(id: AggregateRootId) {
      super();
  }

  public amount: number;
  public createdAt: Date;
  /**
   * The unique identifier assigned by the payment provider for this payment.
   * This ID is used to track the payment in the payment provider's system and
   */
  public externalPaymentId: string;
  public bankPaymentId: string;
  /**
   * Unique identifier for the payment transaction.
   * This ID is used to track and reference the payment across different systems.
   */
  public transactionId: string;
  public sellerId: string;
  public buyerId: string;
  public description: string;
  public status: PaymentStatus;
  public paymentProvider: PaymentSystem;
  public metadata: Record<string, string>;
  public currency: Currency;
  public paymentType: PaymentType;
  public payout: Payout | null;
}
