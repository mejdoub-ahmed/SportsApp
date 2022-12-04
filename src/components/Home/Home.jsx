import React, { useState } from "react";

import { getAuth, signOut } from "firebase/auth";

// const disconnect = () => {
//   // const auth = getAuth();
//   const auth = getAuth();
//   signOut(auth)
//     .then((res) => {
//       console.log(res);
//       setView("Login");
//       // Sign-out successful.
//     })
//     .catch((error) => {
//       // An error happened.
//     });
// };

const Home = () => {
  const [view, setView] = useState("Home");
  const disconnect = () => {
    // const auth = getAuth();
    const auth = getAuth();
    signOut(auth)
      .then((res) => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return (
    <div>
      {/* <!--Navbar --> */}
      <nav
        style={{ backgroundColor: "#77DD77", borderColor: "#77DD77" }}
        class="mb-1 navbar navbar-expand-lg navbar-dark orange lighten-1"
      >
        <a class="navbar-brand" href="#">
          Navbar
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent-555"
          aria-controls="navbarSupportedContent-555"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent-555">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#">
                Home
                <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Features
              </a>
            </li>
            <li class="nav-item">
              <button
                onClick={disconnect}
                class="nav-link"
                style={{ color: "black" }}
              >
                Logout
              </button>
            </li>
          </ul>
        </div>
      </nav>
      {/* <!--/.Navbar --> */}
    </div>
  );
};

export default Home;
