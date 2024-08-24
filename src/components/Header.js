import React, { useEffect, useState } from "react";
import { LOGO_URL, USER_ICON } from "../utils/constants";
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUser, removeUser } from "../redux/userSlice";
import { toggleShowGptSearch } from "../redux/gptSlice";

const Header = () => {
  const [signoutIcon, setSignoutIcon] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();
  const showGpt = useSelector((store) => store.gpt.showGptSearch);
  const toggleGpt = () => {
    dispatch(toggleShowGptSearch());
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // user sign in
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse"); //protecting routes while  login and log out
      } else {
        // User is signed out
        dispatch(removeUser(user));
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);
  const handleClick = () => {
    setSignoutIcon(!signoutIcon);
  };
  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        // dispatch(removeUser()); we have alread dispatched this in body ther is an evemt listner see there
        setSignoutIcon(false);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="z-30 w-full absolute px-8 py-2  bg-gradient-to-b from-black flex justify-between">
      <img className="w-36" alt="logo" src={LOGO_URL} />
      <div className="flex justify-between">
        {user && (
          <button
            className="text-white my-4 mr-16 p-2 rounded-lg  bg-blue-700 hover:underline hover:bg-opacity-60 font-bold"
            onClick={toggleGpt}
          >
            {showGpt ? "Back to Movies 🍿" : "GPT 🔎"}
          </button>
        )}
        <div>
          <img
            className="w-12 p-2 m-2 mr-8 cursor-pointer"
            onClick={handleClick}
            alt="user-logo"
            src={USER_ICON}
          />
          {user && signoutIcon && (
            <button
              className="bg-red-600 opacity-80 font-bold hover:underline p-1 px-2 rounded-lg"
              onClick={handleSignout}
            >
              Sign-out
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
