import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebaseConfig";

export const initiateSignUp = (email, password, showLoginPage) => {
    const isSignUpSuccessful = createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;

        console.log(user);
        return true;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        return false;
      });

      return isSignUpSuccessful;
  };

export const initiateLogin = (email, password) => {
  const isLoginSuccessful = signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      // ...
      console.log(user);

      return true;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;

      return true
    });

};
