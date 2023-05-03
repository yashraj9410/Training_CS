import { Model, Column, Table, HasMany, DataType, ForeignKey } from 'sequelize-typescript';
import Feedback from './feedback_model';
import Client from './client_model'

@Table({ timestamps: true })
class DeliveryAgent extends Model {
  @Column({ primaryKey: true, autoIncrement: true })
  public id!: number;

  @Column({
    type: DataType.TEXT,
    allowNull: false
  })
  public name!: string;

  @Column({
    type: DataType.TEXT,
    allowNull: false
  })
  public email!: string

  @Column({
    type: DataType.TEXT,
    allowNull: false
  })
  public password!:string

  @ForeignKey(() => Client)
  @Column
  public client_id!: number;

  @HasMany(() => Feedback)
  public feedbacks!: Feedback[];
}

export default DeliveryAgent;