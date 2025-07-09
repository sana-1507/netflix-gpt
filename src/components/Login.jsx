import { useRef, useState } from "react";
import Header from "./Header";
import { checkSignInForm } from "../utils/validate";
import { auth } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();
  const toggleSignUp = () => {
    setIsSignInForm(!isSignInForm);
  };

  const email = useRef(null);
  const password = useRef(null);
  const fullName = useRef(null);

  const validateFormData = (e) => {
    e.preventDefault();
    const message = checkSignInForm(
      email.current.value,
      password.current.value
    );
    setErrorMessage(message);
    if (message) return; // 🚫 Stop if validation fails

    if (!isSignInForm) {
      try {
        const userCredential = createUserWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        );
        const user = userCredential.user;
        console.log("User signed up:", user);
        navigate("/browse");
      } catch (error) {
        console.log(error);
        setErrorMessage(`${error.code}: ${error.message}`);
      }
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          navigate("/browse");
          // ...
        })
        .catch((error) => {
          setErrorMessage(`${error.code}: ${error.message}`);
        });
    }
  };

  return (
    <div className="flex w-[100%] h-[100%] top-0 left-0 right-0 absolute bg-gradient-to-b from-black to-amber-950">
      <div>
        <Header />
      </div>
      <div>
        <img
          className="flex absolute max-w-[100%] w-[100%] h-[100%] z-50 default-ltr-cache-1e28eon rounded-xl shadow-xl"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/3a87b586-8940-4a5a-bc95-00d389462357/web_tall_panel/IN-en-20250609-TRIFECTA-perspective_6cc51fdf-6a21-46fe-92f9-88dac61e6031_large.jpg"
          srcSet="https://assets.nflxext.com/ffe/siteui/vlv3/3a87b586-8940-4a5a-bc95-00d389462357/web_tall_panel/IN-en-20250609-TRIFECTA-perspective_6cc51fdf-6a21-46fe-92f9-88dac61e6031_large.jpg 2000w, https://assets.nflxext.com/ffe/siteui/vlv3/3a87b586-8940-4a5a-bc95-00d389462357/web_tall_panel/IN-en-20250609-TRIFECTA-perspective_6cc51fdf-6a21-46fe-92f9-88dac61e6031_medium.jpg 1279w, https://assets.nflxext.com/ffe/siteui/vlv3/3a87b586-8940-4a5a-bc95-00d389462357/web_tall_panel/IN-en-20250609-TRIFECTA-perspective_6cc51fdf-6a21-46fe-92f9-88dac61e6031_small.jpg 959w"
          alt=""
          aria-hidden="true"
        ></img>
      </div>
      <form className="flex cursor-pointer z-500 absolute text-center w-[25%] mt-50 ml-150  flex-col bg-gradient-to-bl from-black border-1 rounded-lg border-transparent text-white">
        <h1 className=" font-bold text-left m-2 p-2 text-white text-3xl">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            className="text-shadow-white p-2 m-6 mb-0 border-2 border-transparent bg-neutral-800"
            type="text"
            ref={fullName}
            placeholder="Full Name"
          />
        )}
        <input
          className="text-shadow-white p-2 m-6 mt-8 border-2 border-transparent bg-neutral-800"
          type="text"
          ref={email}
          placeholder="Email Address or Mobile Number"
        />
        <input
          className="text-shadow-white p-2 mt-1.5 ml-6 mr-6 border-2 border-transparent bg-neutral-800"
          type="password"
          ref={password}
          placeholder="Password"
        />
        <p className="p-2 m-2 text-red-600 font-semibold">{errorMessage}</p>
        <button
          className="relative bg-red-500 max-w-[91%] p-2 m-6 rounded-md"
          type="button"
          onClick={validateFormData}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <div className="flex flex-row relative ml-4">
          <p className="m-1 p-2 font-bold">
            {isSignInForm ? "New to Netflix?" : "Already Registered?"}
          </p>
          <button className="m-1 p-2" type="button" onClick={toggleSignUp}>
            {isSignInForm ? "Sign Up Now" : "Sign In"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
