import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { setDoc, doc , addDoc } from "firebase/firestore";
import Swal from 'sweetalert2';

const firebaseConfig = {
        apiKey: "AIzaSyBXw40O4OZWAmkUwtDkguRIm23okqputRc",
        authDomain: "ecommerce-website-e45ab.firebaseapp.com",
        projectId: "ecommerce-website-e45ab",
        storageBucket: "ecommerce-website-e45ab.firebasestorage.app",
        messagingSenderId: "374617797966",
        appId: "1:374617797966:web:73e1f3b316746a36221a1f",
        measurementId: "G-877FGFR8WY"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const analytics = getAnalytics(app);

export { db, auth, analytics , addDoc};

onAuthStateChanged(auth, (user) => {
    if (user) {
        console.log(user);
        console.log("User is signed in");
    } else {
        console.log("User is signed out");
    }
});

const Signup = async (email, password, username, phone) => {
    await createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            const uid = user.uid;
            if (user) {
                setDoc(doc(db, "users", uid), {
                    email: email,
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
        })
        .catch((error) => {
            const errorMessage = error.message;
            Swal.fire({
                title: 'Error',
                text: errorMessage,
                icon: 'error'
            });
            console.log(errorMessage);
        });
}

export { Signup }

const Login = async (email, password) => {
    await signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            Swal.fire({
                title: 'Success',
                text: 'Login successful',
                icon: 'success'
            });
            setTimeout(() => {
                window.location.href = "/home";
            }, 2000);
        })
        .catch((error) => {
            const errorMessage = error.message;
            Swal.fire({
                title: 'Error',
                text: errorMessage,
                icon: 'error'
            });
            console.log(errorMessage);
        });
}
export { Login }

const Logout = async () => {
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
        Swal.fire({
            title: 'Error',
            text: error.message,
            icon: 'error'
        });
    });
}
export { Logout }
