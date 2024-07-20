import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile
} from "firebase/auth";
import { auth } from "../utils/firebaseConfig";
import { addUser } from "../utils/redux/userSlice";

export const initiateSignUp = (email, password, name, dispatchHook) => {
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
        const { uid, email, displayName } = auth.currentUser;
        dispatchHook(addUser({ uid: uid, email: email, displayName: displayName }));
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
