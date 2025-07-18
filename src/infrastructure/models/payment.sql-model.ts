import { Column, Entity, OneToOne, JoinColumn } from "typeorm";
import { BaseSqlModel } from "@/infastructure/base/base.sql-model";
import { PaymentStatus } from "@/domain/enums/payment-status.enum";
import { PaymentSystem } from "@/domain/enums/payment-system.enum";
import { PayoutSqlModel } from "./payout.sql-model";

@Entity('payments')
export class PaymentSqlModel extends BaseSqlModel {
    @Column('decimal', { precision: 10, scale: 2 })
    public amount: number;

    @Column({ nullable: true })
    public externalPaymentId: string;

    @Column({ nullable: true })
    public bankPaymentId: string;

    @Column({ unique: true })
    public transactionId: string;

    @Column()
    public sellerId: string;

    @Column()
    public buyerId: string;

    @Column({ type: 'text', nullable: true })
    public description: string;

    @Column({
        type: 'enum',
        enum: PaymentStatus,
        default: PaymentStatus.PENDING
    })
    public status: PaymentStatus;

    @Column({
        type: 'enum',
        enum: PaymentSystem
    })
    public paymentProvider: PaymentSystem;

    @Column({ type: 'json', nullable: true })
    public metadata: Record<string, string>;

    @OneToOne(() => PayoutSqlModel, { nullable: true })
    @JoinColumn()
    public payout: PayoutSqlModel | null;
}