import { CreateDateColumn, UpdateDateColumn,Column } from "typeorm";
export abstract class BaseEntity {
    @Column({
        default: () => "CURRENT_TIMESTAMP",
        type: "timestamp"
    })
    public createDate: Date;

    @Column({
        default: () => "CURRENT_TIMESTAMP",
        type: "timestamp"
    })
    public updateDate: Date;

}