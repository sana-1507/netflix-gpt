import { useNavigate } from "react-router-dom";
import { signOutUser } from "../utils/firebase";
import { auth, onAuthStateChange } from "../utils/firebase";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { toggleGPTSearchView } from "../utils/gptSlice";
import { useState } from "react";
const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let showButtonName = true;
  showButtonName = useSelector(store => store.gpt.showGptSearch);

  console.log(showButtonName)
  const [userSignInStatus, setUserSignInStatus] = useState(false);
  

  const handleSignOut = () => {
    signOutUser(auth)
      .then(() => {
        // Sign-out successful.
        console.log("User Signed out");
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
      });
  };

  const handleGPTSearchClick = () => {
    dispatch(toggleGPTSearchView())
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChange(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        setUserSignInStatus(true);
        // ...
      } else {
        // User is signed out
        dispatch(removeUser({}));
        setUserSignInStatus(false);
      }
    });
    return () => unsubscribe();
  }, []);
  return (
    <div className="flex absolute w-[100%] h-[30%] top-0 left-0 bg-gradient-to-b from-black to-transparent ">
      <img
        className="flex w-[15%] top-[1%] left-[0] absolute z-100"
        src="/src/assets/Netflix_Logo_PMS.png"
      />
        <button
        className=" bg-gray-600 text-white font-semibold h-10 absolute right-30 p-2 m-6 rounded-md z-200"
      onClick={handleGPTSearchClick}
      >{!showButtonName ? "GPT Search" : "Home Page"}</button>
      {userSignInStatus && <button
        className=" bg-red-500 h-10 text-white font-semibold absolute right-5 p-2 m-6 rounded-md z-200"
        onClick={handleSignOut}
      >
        Sign Out
      </button>}
    </div>
  );
};

export default Header;
