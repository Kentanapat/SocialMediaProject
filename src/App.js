import React, { useState } from "react";
import LoginForm from "./components/LoginForm";
import SignUpForm from "./components/SignUpForm";
import "./styles.css";
import background from "./images/welcomeBG4.gif";
import "./index.css";
import SignInButton from "./components/SignInButton";
import SignUpButton from "./components/SignUpButton";

export default function App() {
  const [isShowLogin, setIsShowLogin] = useState(false);
  const [isShowSignUp, setIsShowSignUp] = useState(false);

  const handleLoginClick = () => {
    console.log("Sign In button clicked");
    setIsShowLogin((isShowLogin) => !isShowLogin);
  };

  const handleSignUpClick = () => {
    console.log("Sign Up button clicked");
    setIsShowSignUp((isShowSignUp) => !isShowSignUp);
  };

  return (
    <div
      className="bk_Img"
      style={{
        backgroundImage: "url(" + background + ")",
        backgroundPosition: 'center',
        backgroundSize: "cover",
        backgroundRepeat: 'no-repeat',
        width: '1700px',
        height: '900px',
        right: '145px',
        bottom: '50px'
      }}
    >
      <div className="App">
        <div className="NavBar">
          <SignInButton onClick={handleLoginClick} />
          <SignUpButton onClick={handleSignUpClick} />
          <LoginForm isShowLogin={isShowLogin} />
          <SignUpForm isShowSignUp={isShowSignUp}/>
        </div>
      </div>
    </div>
  );
}
