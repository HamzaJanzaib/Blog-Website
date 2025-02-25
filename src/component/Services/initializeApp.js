import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// getFirestore
import { getFirestore } from "firebase/firestore";
import { getAuth, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
// Use the data viewer in the Firebase console to quickly verify that you've added data to Cloud Firestore.
// You can also use the "get" method to retrieve the entire collection.
import { setDoc, doc } from "firebase/firestore";
import Swal from 'sweetalert2'

const firebaseConfig = {
    apiKey: "AIzaSyBXw40O4OZWAmkUwtDkguRIm23okqputRc",
    authDomain: "ecommerce-website-e45ab.firebaseapp.com",
    projectId: "ecommerce-website-e45ab",
    storageBucket: "ecommerce-website-e45ab.firebasestorage.app",
    messagingSenderId: "374617797966",
    appId: "1:374617797966:web:73e1f3b316746a36221a1f",
    measurementId: "G-877FGFR8WY"
};
// store app firebase keys variable
const app = initializeApp(firebaseConfig);
// store db getFirestore variable
const db = getFirestore(app);
// store auth getAuth variable
const auth = getAuth(app);
const analytics = getAnalytics(app);
// export all
export { db, auth, analytics };
``


onAuthStateChanged(auth, (user) => {

    if (user) {
        console.log(user);
        console.log("User is signed in");

        // ...
    } else {
        console.log("User is signed out");
        // User is signed out
        // ...
    }
});

const Signup = async (email, password, username, phone) => {
    console.log(email, password, username, phone);
    await createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log(user);
            const uid = user.uid;
            // Cloud Firestore stores data in Documents, which are stored in Collections. Cloud Firestore creates collections and documents implicitly the first time you add data to the document. You do not need to explicitly create collections or documents.
            // Now add another document to the users collection. Notice that this document includes a key-value pair (middle name) that does not appear in the first document. Documents in a collection can contain different sets of information.
            if (user) {
                setDoc(doc(db, "users", uid), {
                    email: email,
                    password: password,
                    username: username,
                    phone: phone
                });
            }
            Swal.fire({
                title: 'Success',
                text: 'User created successfully',
                icon: 'success'
            });
            setTimeout(() => {
                window.location.href = "/login";
            }, 2000);
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            Swal.fire({
                title: 'Error',
                text: errorMessage,
                icon: 'error'
            });
            console.log(errorCode, errorMessage);
            // ..
        });
}

export { Signup }


const Login = async (email, password) => {
    await signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            Swal.fire({
                title: 'Success',
                text: 'Login successful',
                icon: 'success'
            });
            setTimeout(() => {
                window.location.href = "/home";
            }, 2000);
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            Swal.fire({
                title: 'Error',
                text: errorMessage,
                icon: 'error'
            });
            console.log(errorCode, errorMessage);
        });
}
export { Login }

const Logout = async () => {

    const auth = getAuth();
    signOut(auth).then(() => {
        Swal.fire({
            title: 'Success',
            text: 'Logout successful',
            icon: 'success'
        });
        setTimeout(() => {
            window.location.href = '/login';
        }, 2000);
    }).catch((error) => {
        // An error happened.
        Swal.fire({
            title: 'Error',
            text: error.message,
            icon: 'error'
        });
    });
}
export { Logout }
