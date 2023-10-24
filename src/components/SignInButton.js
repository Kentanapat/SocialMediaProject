import React from "react";

function SignInButton({ onClick }) {
  return (
    <a href="#" onClick={onClick}>
      <img
        src="./signin.gif"
        alt="Sign In"
        style={{ 
            position: 'absolute',
            width: '500px', 
            height: '200px',
            left: '450px',
            top: '460px'
        }}
      />
    </a>
  );
}

export default SignInButton;