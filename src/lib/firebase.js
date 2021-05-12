import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyADuj1dd5IViphIv_CU8V-ESD9dQDMFTPw",
    authDomain: "fintech-blog-db.firebaseapp.com",
    databaseURL: "https://fintech-blog-db-default-rtdb.firebaseio.com",
    projectId: "fintech-blog-db",
    storageBucket: "fintech-blog-db.appspot.com",
    messagingSenderId: "984676075442",
    appId: "1:984676075442:web:41b3e13ca8f352815ac6ab"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase