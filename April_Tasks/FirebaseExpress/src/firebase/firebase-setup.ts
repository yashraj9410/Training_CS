import * as admin from 'firebase-admin';
import * as serviceAccount from '/path/to/serviceAccountKey.json';

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount as admin.ServiceAccount),
  databaseURL: 'https://your-project-id.firebaseio.com'
});