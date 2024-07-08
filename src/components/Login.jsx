import { useState } from "react";

const Login = () => {
  const [showLoginForm, setshowLoginForm] = useState(true);

  return (
    <div className="login-UI">
      <img
        className="absolute -z-10 bg-black opacity-45"
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
        className="text-white bg-black absolute px-6 py-20 w-1/4 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center rounded-2xl opacity-75"
      >
        <h1 className="text-3xl font-bold text-left mx-10 my-9">{showLoginForm ? "Login" : "Sign Up"}</h1>
        <input
          type="text"
          placeholder="Your Name"
          className="p-4 my-3 w-4/5 placeholder:text-white rounded-lg"
          hidden={!showLoginForm}
        />
        <input
          type="text"
          placeholder="Email Address"
          className="p-4 my-3 w-4/5 placeholder:text-white rounded-lg"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-3 w-4/5 placeholder:text-white rounded-lg"
        />
        <button className="p-4 my-7 w-4/5 text-white bg-red-600 rounded-lg">
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
