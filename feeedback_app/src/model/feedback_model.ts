import { Model, Column, Table, ForeignKey, DataType } from 'sequelize-typescript';
import User from './user_model';
import DeliveryAgent from './delivery_agent_model';
import Product from './product_model';
import Client from './client_model';

@Table({ timestamps: true })
class Feedback extends Model {
  @Column({ primaryKey: true, autoIncrement: true })
  public id!: number;

  @ForeignKey(() => User)
  @Column
  public user_id!: number;

  @ForeignKey(() => DeliveryAgent)
  @Column
  public delivery_agent_id!: number;

  @ForeignKey(() => Product)
  @Column
  public product_id!: number;

  @ForeignKey(() => Client)
  @Column
  public client_id!: number;

  @Column({
    type: DataType.NUMBER,
    allowNull:false
  })
  public rating!: number;

  @Column
  public comment!: string;

  @Column({
    type: DataType.TEXT,
    allowNull: false
  })
  public feedback_type!: string;

  @Column({
    type: DataType.TEXT,
    allowNull: false
  })
  public feedback_language!: string;
}

export default Feedback;