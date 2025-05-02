import React from "react";
import UserContextProvider from "./context/UserContextProvider";
import LogIn from "./Component/LogIn";
import Profile from "./Component/Profile";

function App() {
  return (
    <UserContextProvider>
    <h1>hello react </h1>
    <LogIn/>
    <Profile/>
    </UserContextProvider>
  );
}

export default App;
