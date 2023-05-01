
import { Request , Response , NextFunction } from 'express'
import * as admin from 'firebase-admin';
const serviceAccount = require("./private/serviceAccountKey.json");

// making a firebse instance 
function firebaseSetup(){
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount as admin.ServiceAccount),
    databaseURL: 'https://push-notification-for-native.firebaseio.com',
  });  
  console.log("Firebase Connected");
}

firebaseSetup();

// Create an instance of the Firebase Messaging service
const messaging = admin.messaging();

// creating api for push notification service using the fcm web token
export const sendNotification = async (req:Request , res:Response ) => {
    const appToken = req.body.token;
    
    // message contains the payload and the fcm app token 
    const message = {

      // we can also call the notification from the body 
      notification: {
        title: 'New Notification',
        body: 'This is a test notification'
      },
      // this is the fcm app token of the device
      token: appToken
    };

   await messaging.send(message)
         .then( data => res.status(200).send(`Notification: ${data}`))
         .catch(err => res.status(400).send(`Some error occured in sending notification  Error: ${err}`))
}