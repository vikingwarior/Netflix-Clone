import { onAuthStateChanged } from "firebase/auth";

import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

import { addUser, removeUser } from "../utils/redux/userSlice";

import {auth} from "../utils/firebaseConfig"

const AuthHeader = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
    }else{
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => {};
  }, []);
  return <div id="authHeader"></div>;
};

export default AuthHeader;
