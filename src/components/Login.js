import React, { useRef, useState } from "react";
import Header from "./Header";
import { LOGIN_BG_LINK } from "../utils/constants";
import validateForm from "../utils/validateForm";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMsg, setErrorMsg] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  // const dispatch = useDispatch();
  // const navigate = useNavigate();
  const handleBtnSignin = () => {
    // console.log(email);
    const errMsg = validateForm(email.current.value, password.current.value);
    setErrorMsg(errMsg);
    if (errMsg) return;
    if (isSignIn) {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          // console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg(errorCode + " - " + errorMessage);
        });
    } else {
      //signup
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          // dispatch(addUser(user));
          // console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg(errorCode + " - " + errorMessage);
        });
    }
  };
  const handleSignIn = () => {
    setErrorMsg(null);
    setIsSignIn(!isSignIn);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img src={LOGIN_BG_LINK} alt="Bg-logo" />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="bg-black w-3/12 mt-48 mx-auto left-0 right-0 absolute opacity-80  text-white p-6"
      >
        <h1 className="text-lg  p-2 font-bold">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
            ref={name}
            className="bg-gray-700 border border-black w-full mb-10 mt-2 p-2 font-bold"
            type="text"
            placeholder="Full Name "
          />
        )}
        <input
          ref={email}
          className="bg-gray-700 border border-black w-full mb-10 mt-2 p-2 font-bold"
          type="email"
          placeholder="Email address"
        />
        <input
          ref={password}
          className="bg-gray-700 border border-black w-full mb-10 p-2 font-bold"
          type="password"
          placeholder="Password"
        />
        {errorMsg !== null && (
          <p className="text-red-600 font-bold mb-2">{errorMsg}</p>
        )}

        <button
          className="bg-red-700 w-28  p-2 rounded-lg"
          onClick={handleBtnSignin}
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <p
          className="my-2 text-gray-300 hover:underline cursor-pointer"
          onClick={handleSignIn}
        >
          {isSignIn
            ? "New to Netflix? Sign up"
            : "Already have an account? Sign In"}
        </p>
      </form>
    </div>
  );
};

export default Login;
