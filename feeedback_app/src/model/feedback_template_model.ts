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
