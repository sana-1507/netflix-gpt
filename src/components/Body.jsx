import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Login";
import Browse from "./Browse";

const Body = () => {
  const appRouter = createBrowserRouter([
    { path: "/", element: <Login /> },
    { path: "/browse", element: <Browse /> },
  ]);

  // useEffect(() => {
  //   onAuthStateChange(auth, (user) => {
  //     if (user) {
  //       // User is signed in, see docs for a list of available properties
  //       // https://firebase.google.com/docs/reference/js/auth.user
  //       const {uid, email, displayName } = user;
  //       dispatch(addUser({uid: uid, email: email, displayName: displayName}))
  //       console.log(user+" "+uid);

  //       // ...
  //     } else {
  //       // User is signed out
  //       dispatch(removeUser({}))
  //       // navigate("/")
  //       // ...
  //     }
  //   });
  // }, []);
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
