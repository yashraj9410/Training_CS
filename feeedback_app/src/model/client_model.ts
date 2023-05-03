import { Model, Column, Table, HasMany, DataType } from 'sequelize-typescript';
import Feedback from './feedback_model';
import DeliveryAgent from './delivery_agent_model';

@Table({ timestamps: true })
class Client extends Model {
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

  @HasMany(() => DeliveryAgent)
  public deliveryagent!: DeliveryAgent[];

  @HasMany(() => Feedback)
  public feedbacks!: Feedback[];
}

export default Client;