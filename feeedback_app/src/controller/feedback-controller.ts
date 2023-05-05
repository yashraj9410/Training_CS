// creating the feedback controller 
import { Request, Response } from 'express'
import FeedbackModel from '../model/feedback_model'

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
    
}


// create a feedback
export const updateFeedback = async( req:Request, res:Response ) => {
    
}

// create a feedback
export const deleteFeedback = async( req:Request, res:Response ) => {
    
}