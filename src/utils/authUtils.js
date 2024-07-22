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
    .then(async (_userCredential) => {

      await updateProfile(auth.currentUser, {
        displayName: name,
      });
      const { uid, email, displayName } = auth.currentUser;
      dispatchHook(addUser({ uid: uid, email: email, displayName: displayName }));
      return true;
    })
    .catch(() => {
      return false;
    });

  return isSignUpSuccessful;
};

export const initiateLogin = (email, password) => {
  const isLoginSuccessful = signInWithEmailAndPassword(auth, email, password)
    .then(() => {
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
    .catch(() => {

    });
};
