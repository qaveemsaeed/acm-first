import React from "react";
import Router from "./routes/Router";
import "./App.css"
// import Login from "./pages/auth/login";
// import Signup from "./pages/auth/Signup";

const App = () => {
  return (
    <div className="root">
      <Router />
      {/* <Login />
        <Signup /> */}
    </div>
  );
};

export default App;
