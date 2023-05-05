import { Schema, model, Document, Types } from 'mongoose';

interface IFeedback extends Document {
  user_id: Types.ObjectId;
  deliveryagent_id: Types.ObjectId;
  client_id: Types.ObjectId;
  product_id: Types.ObjectId;
  template_id: Types.ObjectId;
  rating: number;
  comment: string;
  feedback_type: string;
  feedback_language: string;
  additional_fields: Record<string, any>;
  qas: Record<string, any>;
}

const FeedbackSchema = new Schema(
  {
    user_id: 
    { 
      type: Types.ObjectId, 
      ref: 'User' 
    },
    deliveryagent_id: 
    { 
      type: Types.ObjectId, 
      ref: 'DeliveryAgent' 
    },
    client_id: 
    { 
      type: Types.ObjectId, 
      ref: 'Client' 
    },
    product_id: 
    { 
      type: Types.ObjectId, 
      ref: 'Product' 
    },
    template_id: 
    { 
      type: Types.ObjectId, 
      ref: 'FeedbackTemplate' 
    },
    rating: 
    { 
      type: Number, 
      required: true 
    },
    comment: 
    { 
      type: String 
    },
    feedback_type: 
    { 
      type: Number 
    },
    feedback_language: 
    { 
      type: Number 
    },
    additional_fields: 
    { 
      type: Map, 
      of: Schema.Types.Mixed 
    },
    qas: 
    { 
      type: Map, 
      of: Schema.Types.Mixed 
    },
  },
  { timestamps: true }
);

const FeedbackModel = model<IFeedback>('Feedback', FeedbackSchema);

export default FeedbackModel;


// {
//   "user_id": "123",
//   "deliveryagent_id": "456",
//   "client_id": "789",
//   "product_id": "001",
//   "template_id": "xyz",
//   "rating": 4,
//   "comment": "I really liked the product!",
//   "feedback_type": "positive",
//   "feedback_language": "english",
//   "additional_fields": {
//     "quantity": 2,
//     "delivery_experience": "good",
//     "product_support_experience": "excellent"
//   },
//   "qa_answers": {
//     "Q1": "The quality of the product was excellent!",
//     "Q2": "The delivery experience was good."
//   }
// }

