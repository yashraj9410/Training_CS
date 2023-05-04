import mongoose, { Document, Schema } from 'mongoose';

interface IFeedbackTemplate extends Document {
  type: string;
  fields: Record<string, string>;
  requiredFields: Record<string, boolean>;
  qas: Record<string, string>;
  clientId: string;
  userId: string;
}

const FeedbackTemplateSchema: Schema = new Schema(
  {
    type: 
    { 
        type: String,
        required: true 
    },
    fields: 
    { 
        type: Map, 
        of: String 
    },
    requiredFields: 
    { 
        type: Map, 
        of: Boolean 
    },
    qas: 
    { 
        type: Map, 
        of: String 
    },
    clientId: 
    { 
        type: Schema.Types.ObjectId, 
        ref: 'Client' 
    },
    userId: 
    { 
        type: Schema.Types.ObjectId, 
        ref: 'User' 
    }
  },
  { timestamps: true }
);

const FeedbackTemplate = mongoose.model<IFeedbackTemplate>('FeedbackTemplate', FeedbackTemplateSchema);

export default FeedbackTemplate;


// {
//     "name": "Product Feedback Template",
//     "type": "product",
//     "fields": {
//       "quantity": "number",
//       "delivery_experience": "string",
//       "customer_support_experience": "string"
//     },
//     "requiredFields": {
//       "rating": true,
//       "comment": true,
//       "feedback_type": false,
//       "feedback_language": false
//     },
//     "qas": {
//       "Q1": "What do you think about the quality of the product?",
//       "Q2": "How was your experience with the delivery of the product?"
//     }
