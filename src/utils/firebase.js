import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { collection, addDoc, getFirestore, doc, updateDoc, increment, getDocs } from "firebase/firestore";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
    measurementId: process.env.REACT_APP_MEASUREMENT_ID
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export async function addUser(name, email) {
    try {
        const docRef = await addDoc(collection(db, "users"), {
            name: name,
            email: email,
            timestamp: new Date()
        });
        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}

export async function incrementCounter(
    collectionPath,
    docId,
    fieldName,
    amount = 1
) {
    // 1. Get a reference to the specific document
    const docRef = doc(db, collectionPath, docId);

    //   try {
    //     // 2. Use updateDoc with FieldValue.increment to atomically increment the field
    //     await updateDoc(docRef, {
    //       [fieldName]: increment(amount)
    //     });

    //     console.log(`Successfully incremented ${fieldName} in document ${docId} by ${amount}`);

    //   } catch (error) {
    //     console.error(`Error incrementing ${fieldName} in document ${docId}: `, error);
    //     throw error; // Re-throw the error for the calling code to handle
    //   }

    // const querySnapshot = await getDocs(collection(db, "portfolio-view-count"));
    // const newData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    const COUNTER_COLLECTION_NAME = "portfolio-view-count";
    const COUNTER_DOCUMENT_ID = "count";
    
    const querySnapshot = await getDocs(collection(db, COUNTER_COLLECTION_NAME));
    const newData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

    console.log(newData, '----querySnapshot----');
}
