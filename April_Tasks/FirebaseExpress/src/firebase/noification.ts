
import { Request , Response , NextFunction } from 'express'
import * as admin from 'firebase-admin';
const serviceAccount = require("./private/serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount as admin.ServiceAccount),
  databaseURL: 'https://push-notification-for-native.firebaseio.com'
});


// Create an instance of the Firebase Messaging service
const messaging = admin.messaging();


export const sendNotification = async (req:Request , res:Response ) => {
    const appToken = req.body.token;

    const message = {
      notification: {
        title: 'New Notification',
        body: 'This is a test notification'
      },
      token: appToken
    };

    
}