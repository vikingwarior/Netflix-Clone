import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile
} from "firebase/auth";
import { auth } from "../utils/firebaseConfig";

export const initiateSignUp = (email, password, name) => {
  const isSignUpSuccessful = createUserWithEmailAndPassword(
    auth,
    email,
    password
  )
    .then((userCredential) => {
      // Signed up
      const user = userCredential.user;

      return updateProfile(auth.currentUser, {
        displayName: name,
      }).then(() => {
        return true;
      });
    })
    .catch(() => {
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
    .catch(() => {
      return false;
    });
  return isLoginSuccessful;
};

export const handleSignout = (redirect) => {
  signOut(auth)
    .then(() => {
      redirect("/");
    })
    .catch((error) => {
      // An error happened.
    });
};
