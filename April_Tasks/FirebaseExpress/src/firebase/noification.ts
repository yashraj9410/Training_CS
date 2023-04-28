
import { Request , Response , NextFunction } from 'express'
import * as admin from 'firebase-admin';
const serviceAccount = require("./private/serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount as admin.ServiceAccount),
  databaseURL: 'https://push-notification-for-native.firebaseio.com'
});


// Create an instance of the Firebase Messaging service
const messaging = admin.messaging();


// creating api for sending the notification
export const sendNotification = async (req:Request , res:Response ) => {
    const appToken = req.body.token;

    const message = {
      notification: {
        title: 'New Notification',
        body: 'This is a test notification'
      },
      token: appToken
    };

   await messaging.send(message)
         .then( data => res.status(200).send(`Notification: ${data}`))
         .catch(err => res.status(400).send(`Some error occured in sending notification  Error: ${err}`))
}