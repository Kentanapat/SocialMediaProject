import React, { useState } from "react";
import NavBar from "./components/NavBar";
import SignUpForm from "./components/SignUpForm";
import "./styles.css";

export default function App() {
  const [isShowSignUp, setIsShowSignUp] = useState(true);

  const handleSignUpClick = () => {
    setIsShowSignUp((isShowSignUp) => !isShowSignUp);
  };

  return (
    <div className="App">
      <div className="NavBar">
      <NavBar handleSignUpClick={handleSignUpClick}/>
      <SignUpForm isShowSignUp={isShowSignUp} />
      </div>
    </div>
  );
}