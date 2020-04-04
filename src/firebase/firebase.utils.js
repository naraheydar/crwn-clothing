import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCZb7dwap4QagYRLRzWB7Li3LW6vdEOyIE",
    authDomain: "crwn-db-5f9fb.firebaseapp.com",
    databaseURL: "https://crwn-db-5f9fb.firebaseio.com",
    projectId: "crwn-db-5f9fb",
    storageBucket: "crwn-db-5f9fb.appspot.com",
    messagingSenderId: "830731238876",
    appId: "1:830731238876:web:39e063898030c8b271e319",
    measurementId: "G-FW6LG2380Q"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`); 
    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message)
        }
    }

    return userRef;

    console.log(snapShot);
}; 


firebase.initializeApp(config);
 
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;