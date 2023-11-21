import React, { createContext, useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import Social from "./pages/Social";
import Library from "./pages/Library";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

export const AuthContext = createContext();

function App() {
    let isUserLoggedIn;

    const token = sessionStorage.getItem("userToken");
    if(token) {
        isUserLoggedIn = true;
    } else {
        isUserLoggedIn = false;
    }

  const [isLoggedIn, setIsLoggedIn] = useState(isUserLoggedIn);
  return (
    <div className="App">
      <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
        <Header />
        <Routes>
          {/* <Route path="/" element={<Home/>}/> */}
          <Route path="/home" element={<Home />} />
          <Route path="/social" element={<Social />} />
          <Route path="/library" element={<Library />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/myprofile" element={<h3>My Profile</h3>} />
        </Routes>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
