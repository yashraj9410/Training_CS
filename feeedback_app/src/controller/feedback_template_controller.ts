// feedback template controller 
import { Request , Response , NextFunction } from 'express';
import FeedbackTemplate from "../model/feedback_template_model";


// get feedback templates 
export const getTemplates =  async( req:Request , res:Response ) => {
    
    try {
        
        // autorisation and authentication 

        // fetching data 
        const templates = await FeedbackTemplate.find()
        res.status(200).send(templates);

    } catch (error) {

        res.status(500).send(`Error in fetching templates : ${error}`)

    }                      
}

// create new feedback template 
export const