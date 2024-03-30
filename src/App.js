import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home, Library, MyProfile, SignIn, SignUp, Social } from "./pages";
import Header from "./components/Header/Header";
import MusicPlayer from "./components/music/MusicPlayer";
import PostInfo from "./components/post/PostInfo";
import AuthNavigator from "./navigator/AuthNavigator";
import AuthProvider from "./provider/AuthProvider";

const App = () => {
  return (
    <div className="App">
      <AuthProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/social" element={<Social />} />
          <Route path="/library" element={<Library />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/myprofile" element={<MyProfile />} />
          <Route path="/play/:musicId" element={
            <AuthNavigator>
              <MusicPlayer />
            </AuthNavigator>
          } />
          <Route path="/post/:postId" element={
            <AuthNavigator>
              <PostInfo />
            </AuthNavigator>
          } />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
