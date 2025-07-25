import { Column, Entity } from "typeorm";
import { BaseSqlModel } from "../base/base.sql-model";
import { PayoutStatus } from "@/domain/enums/payout-status.enum";
import { PaymentSystem } from "@/domain/enums/payment-system.enum";

@Entity('payouts')
export class PayoutSqlModel extends BaseSqlModel {
    @Column('decimal', { precision: 10, scale: 2 })
    public amount: number;

    @Column({
        type: 'enum',
        enum: PayoutStatus,
        default: PayoutStatus.PENDING
    })
    public status: PayoutStatus;

    @Column({
        type: 'enum',
        enum: PaymentSystem
    })
    public paymentSystem: PaymentSystem;

    @Column({ type: 'json', nullable: true })
    public metadata: Record<string, string>;
}