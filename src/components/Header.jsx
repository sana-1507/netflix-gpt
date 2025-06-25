import { useNavigate } from "react-router-dom";
import { signOutUser, auth } from "../utils/firebase";

const Header = () => {
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOutUser(auth)
      .then(() => {
        // Sign-out successful.
        console.log("User Signed out")
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
      });
  };
  return (
    <div className="flex absolute w-[100%] h-[30%] top-0 left-0 ">
      <img
        className="flex w-[15%] top-[1%] left-[0] absolute z-100"
        src="/src/assets/Netflix_Logo_PMS.png"
      />
      <button
        className=" bg-red-500 h-10 absolute right-10 p-2 m-6 rounded-md"
        onClick={handleSignOut}
      >
        Sign Out
      </button>
    </div>
  );
};

export default Header;
