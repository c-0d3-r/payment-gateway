import { ApplicationRoot } from "@/base/application-root";
import { AggregateRootId } from "@/base/types/aggregate-root-id.type";
import { PaymentStatus } from "@/domain/enums/payment-status.enum";
import { PaymentSystem } from "@/domain/enums/payment-system.enum";
import { Payout } from "./payout.model";

export class PaymentModel extends ApplicationRoot {
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
    /**
     * The unique identifier assigned by the bank for this payment.
     * This ID is used to track the payment in the bank's system and
     * is essential for reconciliation, refunds, and tracking payment status.
     */
    public bankPaymentId: string;
    /**
     * Unique identifier for the payment transaction.
     * This ID is used to track and reference the payment across different systems.
     */
    public transactionId: string;
    /**
     * The unique identifier assigned to the seller for this payment.
     */
    public sellerId: string;
    /**
     * The unique identifier assigned to the buyer for this payment.
     */
    public buyerId: string;
    public description: string;
    public status: PaymentStatus;
    public paymentProvider: PaymentSystem;
    public metadata: Record<string, string>;
    public payout: Payout | null;
}