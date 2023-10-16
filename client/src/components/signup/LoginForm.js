import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
const LoginForm = ({ isShowLogin }) => {
    return (
        <div className={`${!isShowLogin ? "active" : ""} show`}>
            <div className="login-form">
                <div className="form-box solid">
                    <form>
                        <h1 className="login-text" style={{ fontFamily: 'Itim, sans-serif' }} >Sign In</h1>
                        <label style={{ fontFamily: 'Itim, sans-serif' }}>Username</label><br></br>
                        <input type="text" name="username" className="login-box" /><br></br>
                        <label style={{ fontFamily: 'Itim, sans-serif' }}>Password</label><br></br>
                        <input type="password" name="password" className="login-box" /><br></br>
                        <input style={{ fontFamily: 'Itim, sans-serif' }} type="submit" value="LOGIN" className="login-btn" />
                        <Link to="/signup"><button  className="login-btn" style={{ fontFamily: 'Itim, sans-serif' }}>REGISTER</button></Link>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default LoginForm;