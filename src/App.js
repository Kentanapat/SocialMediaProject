import React, { useState } from "react";
import LoginForm from "./components/LoginForm";
import NavBar from "./components/NavBar";
import SignUpForm from "./components/SignUpForm";
import "./styles.css";
import background from "./images/welcomeBG.gif";
import "./index.css";

export default function App() {
  const [isShowLogin, setIsShowLogin] = useState(false);

  const handleLoginClick = () => {
    setIsShowLogin((isShowLogin) => !isShowLogin);
  };

  const [isShowSignUp, setIsShowSignUp] = useState(false);

  const handleSignUpClick = () => {
    setIsShowSignUp((isShowSignUp) => !isShowSignUp);
  }

  return (
      <div 
      class="bk_Img"
      style={{
        backgroundImage: "url(" + background + ")",
        backgroundPosition: 'center',
        backgroundSize: "cover",
        backgroundRepeat: 'no-repeat',
        // width: '100%',
        width: '1730px',
        height: '100%',
        right: '160px',
        bottom: '140px'
      }}>
        <div className="App">
          <div className="NavBar">
            <NavBar handleLoginClick={handleLoginClick} handleSignUpClick={handleSignUpClick}/>
            <LoginForm isShowLogin={isShowLogin} />
            <SignUpForm />
          </div>
        </div>
      </div>
  );
}
