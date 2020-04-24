import { Entity, PrimaryGeneratedColumn, Column, OneToMany, DatabaseType, OneToOne, ManyToOne, JoinColumn } from "typeorm";
import { BaseEntity } from './base'
import { defaultEnum, actionEnum, ApiMethod } from '../entity_enum/index'

//行为表,在行为表的则都需要权限才可以访问
@Entity()
export class Action extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({ type: 'text' })
    reqBody: string;

    @Column({ type: 'text' })
    resBody: string;

    @Column({ type: 'enum', enum: ApiMethod, default: ApiMethod.GET })
    method: ApiMethod;

    @Column({ type: 'text' })
    path: string;

    @Column({ type: 'enum', enum: actionEnum, default: actionEnum.API })
    type: actionEnum;

    @Column({ type: 'enum', enum: defaultEnum, default: defaultEnum.ENABLED })
    status: defaultEnum;

}