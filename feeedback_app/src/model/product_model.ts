import { Model, Column, Table, HasMany } from 'sequelize-typescript';
import Feedback from './feedback_model';

@Table({ timestamps: true })
class Product extends Model {
  @Column({ primaryKey: true, autoIncrement: true })
  public id!: number;

  @Column
  public name!: string;

  @HasMany(() => Feedback)
  public feedbacks!: Feedback[];
}

export default Product;