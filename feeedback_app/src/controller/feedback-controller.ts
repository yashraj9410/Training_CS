// creating the feedback controller 
import { Request, Response } from 'express'
import FeedbackModel from '../model/feedback_model'
import { feedback_type } from '../middlewares/enums/feedback_type_enum' 

// create a feedback
export const getFeedback = async( req:Request, res:Response ) => {
    
    try {
        
        await FeedbackModel.find()
        .then(data => res.status(200).send(data))
        .catch(err => res.status(404).send(err))

    } catch (error) {
        res.status(500).send("internal Server error")
    }
}

// create a feedback
export const createFeedback = async( req:Request, res:Response ) => {

    const feedback_data = req.body;

    try {
        
        feedback_data.feedback_type = feedback_type.UserToClient;
        await FeedbackModel.create(req.body)
        .then(data => res.status(201).send(data))
        .catch(err => res.status(400).send(err))

    } catch (error) {
        res.status(500).send("internal server error")
    }
}


// create a feedback
export const updateFeedback = async( req:Request, res:Response ) => {
    
}

// create a feedback
export const deleteFeedback = async( req:Request, res:Response ) => {
    
}