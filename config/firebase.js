import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCdlILJlz2kPrjqf0Oy9b8UMN1izNYGe4U",
  authDomain: "foodpanda-892d7.firebaseapp.com",
  projectId: "foodpanda-892d7",
  storageBucket: "foodpanda-892d7.appspot.com",
  messagingSenderId: "17596645316",
  appId: "1:17596645316:web:3cf6ab964629053ca6ae91",
  measurementId: "G-6PN6V5PN2D"
};

  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const provider = new GoogleAuthProvider()
  const auth = getAuth()

  function signin() {
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        console.log(user)
      }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
  }

  export {signin}