import React from "react";

function NavBar({ handleLoginClick,handleSignUpClick}) {

    const handleClick = () => {
        handleLoginClick()
    }
    const handleClick2 = () => {
        handleSignUpClick()
    }
        return (
            <div className="navbar">
                <div>
                    <span onClick={handleClick} className="loginicon" style={{ fontFamily: 'Itim, sans-serif' }}>Sign In</span>
                </div>
                <div>
                    <span onClick={handleClick2} className="SignUpicon" style={{ fontFamily: 'Itim, sans-serif' }}>Sign Up</span>
                </div>
            </div>
        );
}

export default NavBar;