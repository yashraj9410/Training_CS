import * as admin from 'firebase-admin';
const serviceAccount = require("./private/serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount as admin.ServiceAccount),
  databaseURL: 'https://push-notification-for-native.firebaseio.com'
});