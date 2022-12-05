import React, { useState } from "react";
import Blog from "../Blog/Blog.jsx";
import { getAuth, signOut } from "firebase/auth";
import OurNavbar from "../NavBar/Navbar.jsx";

const Home = () => {
  const [view, setView] = useState("Home");
  const disconnect = () => {
    // const auth = getAuth();
    const auth = getAuth();
    signOut(auth)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      {/* <!--Navbar --> */}
      <OurNavbar />
    </div>
  );
};

export default Home;
