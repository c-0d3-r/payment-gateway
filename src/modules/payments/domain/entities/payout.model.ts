import { PaymentSystem } from "@/modules/payments/domain/enums/payment-system.enum";
import { PayoutStatus } from "@/modules/payments/domain/enums/payout-status.enum";

export class Payout {
    public constructor(public id: number) { }

    public amount: number;
    public createdAt: Date;
    public status: PayoutStatus;
    public paymentSystem: PaymentSystem;
    public metadata: Record<string, string>;
}
