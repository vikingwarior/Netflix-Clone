import { onAuthStateChanged } from "firebase/auth";

import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

import { addUser, removeUser } from "../utils/redux/userSlice";

import { auth } from "../utils/firebaseConfig";

const AuthHeader = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const location = useLocation().pathname;

  useEffect(() => {
    // onAuthStateChanged returns a method that can be used to remove the observer
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        location === "/" ? navigate("/browse") : navigate(location);
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
    // eslint-disable-next-line
  }, []);
};

export default AuthHeader;
