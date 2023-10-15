import React from "react";
import { useEffect, useState } from "react";
import { GoogleLogin } from "react-google-login";
import { gapi } from "gapi-script";



const SignUpForm = ({ isShowSignUp }) => {
    const clientId = "718107053984-6vf20q1hpm4ok2iiibc81vcf7j5dfua4.apps.googleusercontent.com"
    useEffect(() => {
        const initClient = () => {
            gapi.client.init({
                clientId: clientId,
                scope: ''
            })
        }
        gapi.load("client:auth2", initClient)
    }, [])
    
    const responseGoogle = (response) => {
        console.log(response);
    }
    return (
        <div className={`${!isShowSignUp ? "activesu" : ""} showsu`}>

            <div className="SignUp-form">
                <div className="SUform-box solid">
                    <form>
                        <h1 className="SignUp-text" style={{ fontFamily: 'Itim, sans-serif' }} >Account Sign Up</h1>
                        <label style={{ fontFamily: 'Itim, sans-serif' }}>First Name</label><br></br>
                        <input type="text" name="firstname" className="SignUp-box" /><br></br>
                        <label style={{ fontFamily: 'Itim, sans-serif' }}>Last Name</label><br></br>
                        <input type="text" name="lastname" className="SignUp-box" /><br></br>
                        <label style={{ fontFamily: 'Itim, sans-serif' }}>Email</label><br></br>
                        <input type="text" name="email" className="SignUp-box" /><br></br>
                        <label style={{ fontFamily: 'Itim, sans-serif' }}>Password</label><br></br>
                        <input type="password" name="password" className="SignUp-box" /><br></br>
                        <label style={{ fontFamily: 'Itim, sans-serif' }}>Confirm Password</label><br></br>
                        <input type="confirmpassword" name="confirmpassword" className="SignUp-box" /><br></br>
                        <input style={{ fontFamily: 'Itim, sans-serif' }} type="submit" value="SIGN UP" className="SignUp-btn" />
                        <GoogleLogin
                            clientId={clientId}
                            buttonText="Google Login"
                            onSuccess={responseGoogle}
                            onFailure={responseGoogle}
                            cookiePolicy={'single_host_origin'}
                        />
                    </form>
                </div>
            </div>
        </div>
    );
}

export default SignUpForm;