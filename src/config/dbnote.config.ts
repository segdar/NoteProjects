import admin from 'firebase-admin';
import { getFirestore } from 'firebase-admin/firestore';




admin.initializeApp({
    credential: admin.credential.cert('./credential.json'),
});


const db = getFirestore();

export default db;
