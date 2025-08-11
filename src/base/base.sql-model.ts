import { CreateDateColumn, UpdateDateColumn } from "typeorm";
import { PrimaryGeneratedColumn } from "typeorm";

export abstract class BaseSqlModel {
    @PrimaryGeneratedColumn()
    public id: number;

    @CreateDateColumn()
    public createdAt: Date;

    @UpdateDateColumn()
    public updatedAt: Date;
}