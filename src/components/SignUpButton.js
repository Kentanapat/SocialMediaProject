import React from "react";

function SignUpButton({ onClick }) {
  return (
    <a href="#" onClick={onClick}>
      <img
        src="./signup.gif"
        alt="Sign In"
        style={{ 
            position: 'absolute',
            width: '500px', 
            height: '200px',
            left: '900px',
            top: '460px'
        }}
      />
    </a>
  );
}

export default SignUpButton;