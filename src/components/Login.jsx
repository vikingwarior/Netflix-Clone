import { useRef, useState } from "react";

import CustomMessageBox from "./CustomMessageBox";
import AuthHeader from "./AuthHeader";

import { validateEmail, validatePassword } from "../utils/formValidations";
import { initiateLogin, initiateSignUp } from "../utils/authUtils";

import { useDispatch } from "react-redux";

const Login = () => {
  const [showLoginForm, setshowLoginForm] = useState(true);
  const [hideInvalidEmailMessage, setHideInvalidEmailMessage] = useState(true);
  const [hideInvalidPasswordMessage, setHideInvalidPasswordMessage] =
    useState(true);

  const [hideCustomMessageBox, setHideCustomMessageBox] = useState(true);
  const [customMessageBoxColor, setCustomMessageBoxColor] = useState("red");
  const [customMessageBoxMessage, setCustomMessageBoxMessage] =
    useState("default");

  const email = useRef();
  const password = useRef();
  const name = useRef();

  const dispatch = useDispatch();

  const initiateAuthentication = async () => {
    const isSignUpReq = !showLoginForm;
    const userEmail = email.current.value;
    const userPassword = password.current.value;
    const userName = name.current.value;

    if (validateFields()) {
      const isAuthSuccess = isSignUpReq
        ? await initiateSignUp(userEmail, userPassword, userName, dispatch)
        : await initiateLogin(userEmail, userPassword);

      if (isAuthSuccess) {
        if (isSignUpReq) {
          showSignUpSuccessMessage();
          setshowLoginForm(true);
        }
      }
    }
  };

  const validateFields = () => {
    const isEmailValid = validateEmail(email.current.value);
    const isPasswordValid = validatePassword(password.current.value);

    modifyTextBoxCss(isEmailValid, email);
    modifyTextBoxCss(isPasswordValid, password);

    setHideInvalidEmailMessage(isEmailValid);
    setHideInvalidPasswordMessage(isPasswordValid);

    return isEmailValid && isPasswordValid;
  };

  const modifyTextBoxCss = (validationFlag, textboxElem) => {
    if (validationFlag) {
      textboxElem.current.classList.remove("border");
      textboxElem.current.classList.remove("border-red-700");
    } else {
      textboxElem.current.classList.add("border");
      textboxElem.current.classList.add("border-red-700");
    }
  };

  const showSignUpSuccessMessage = () => {
    setCustomMessageBoxMessage(
      "Account was successfully created!<br/>You can now login with your credentials"
    );
    setCustomMessageBoxColor("red");
    setHideCustomMessageBox(false);
  };

  return (
    <div className="login-UI">
      <img
        className="absolute -z-10 bg-gradient-to-b from-black"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/0552717c-9d8c-47bd-9640-4f4efa2de663/537e2c5e-c750-4d4c-9f7a-e66fe93eb977/IN-en-20240701-POP_SIGNUP_TWO_WEEKS-perspective_WEB_b00eeb83-a7e8-4b5b-8ff7-86ed92c51caf_large.jpg"
        alt="bg-img"
      />
      <img
        className="absolute h-24 mx-96"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo-img"
      />
      <form
        action=""
        className="text-white bg-black absolute px-6 py-20 w-1/4 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center rounded-2xl opacity-85"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <h1 className="text-3xl font-bold text-left mx-10 my-9">
          {showLoginForm ? "Login" : "Sign Up"}
        </h1>
        <CustomMessageBox
          message={customMessageBoxMessage}
          colorScheme={customMessageBoxColor}
          hide={hideCustomMessageBox}
        />
        <input
          type="text"
          placeholder="Your Name"
          className="p-4 my-3 w-4/5 placeholder:text-white rounded-lg bg-gray-900"
          ref={name}
          hidden={showLoginForm}
        />
        <input
          type="text"
          placeholder="Email Address"
          ref={email}
          className="p-4 my-3 w-4/5 placeholder:text-white rounded-lg bg-gray-900"
        />
        <h3
          className="text-red-600 text-left mx-12 my-0"
          hidden={hideInvalidEmailMessage}
        >
          Invalid Email
        </h3>
        <input
          type="password"
          ref={password}
          placeholder="Password"
          className="p-4 my-3 w-4/5 placeholder:text-white rounded-lg bg-gray-900"
        />
        <h3
          className="text-red-600 text-left mx-12 my-0"
          hidden={hideInvalidPasswordMessage}
        >
          Invalid Password
        </h3>
        <button
          className="p-4 my-7 w-4/5 text-white bg-red-600 rounded-lg"
          onClick={initiateAuthentication}
        >
          {showLoginForm ? "Login" : "Create An Account"}
        </button>
        <h3>
          {showLoginForm ? "New Here? " : "Already a User? "}
          <span
            className="cursor-pointer underline"
            onClick={() => {
              setshowLoginForm(!showLoginForm);
            }}
          >
            {showLoginForm ? "Create An Account" : "Login"}
          </span>
        </h3>
      </form>
    </div>
  );
};

export default Login;
