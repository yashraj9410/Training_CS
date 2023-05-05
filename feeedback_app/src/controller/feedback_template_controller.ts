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
export const createtemplate = async( req:Request , res: Response) => {

    try {
        
        //creating new template for feedback 
        FeedbackTemplate.create(req.body)
        .then(data => res.status(200).send(data))
        .catch(err => res.status(400).send(err))
         
    } catch (error) {

        res.status(500).send("Error in creating template")

    }
}

// update template 
export const updateTemplate = async( req:Request , res:Response) => {

     
}


// delete a template 
export const deleteTemplate = async(req:Request, res:Response) => {

}