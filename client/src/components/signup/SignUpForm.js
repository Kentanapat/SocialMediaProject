import React from "react";
import { useEffect, useState } from "react";
import { GoogleLogin } from "react-google-login";
import { gapi } from "gapi-script";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import background from "./welcomeBG4.gif";
const SignUpForm = ({ isShowSignUp }) => {
    const navigate = useNavigate();
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

    const responseGoogle = async (googleuser) => {
        console.log(googleuser);
        console.log(JSON.stringify({ 'email': googleuser.googleId, 'type': 'google' }));
        axios.post('http://localhost:3001/api/auth/login', {
            email: googleuser.profileObj.email,
            type: 'google'
          })
          .then(function (response) {
            localStorage.setItem("email",response.data.email)
            navigate('/mainmenu');
          })
          .catch(function (error) {
            if (error.response.data  == "google register") {
                axios.post('http://localhost:3001/api/auth/register', {
                    username: googleuser.googleId,
                    email: googleuser.profileObj.email,
                    password: "",
                  })
                  .then(function (response) {
                    axios.post('http://localhost:3001/api/auth/login', {
                    email: googleuser.profileObj.email,
                    type: 'google'
                  })
                  .then(function (response) {
                    console.log(response)
                  })
                  .catch(function (error) {
                    console.log(error)
                  });
                  })
                  .catch(function (error) {
                    console.log(error)
                  });
            }
          });
        // try {
        //     const response = await fetch('http://localhost:3001/login', {
        //         method: 'POST',
        //         headers: {
        //             'Content-Type': 'application/json',
        //         },
        //         body: JSON.stringify({ 'email': googleuser.profileObj.email, 'type': 'google' }),
        //     });
        //     if (response.ok) {
        //         console.log(response);
        //         const data = await response.json();
        //         //   console.log('Authentication token:', data.token);
        //         navigate('/mainmenu');

        //     } else {
        //         console.log('Invalid credentials:');
        //     }
        // } catch (error) {
        //     console.log(error);
        // }
        //  <Navigate to="/mainmenu" />
    }

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
        <div className={`${!isShowSignUp ? "activesu" : ""} showsu`}>

            <div className="signup-form">
                <div className="submitform-box solid">
                    <form>
                        <h1 className="signup-text" style={{ fontFamily: 'Itim, sans-serif' }} >Account Sign Up</h1>
                        <label style={{ fontFamily: 'Itim, sans-serif' }}>Username</label><br></br>
                        <input type="text" name="username" className="signup-box" /><br></br>
                        <label style={{ fontFamily: 'Itim, sans-serif' }}>Email</label><br></br>
                        <input type="text" name="email" className="signup-box" /><br></br>
                        <label style={{ fontFamily: 'Itim, sans-serif' }}>Password</label><br></br>
                        <input type="password" name="password" className="signup-box" /><br></br>
                        <label style={{ fontFamily: 'Itim, sans-serif' }}>Confirm Password</label><br></br>
                        <input type="confirmpassword" name="confirmpassword" className="signup-box" /><br></br>
                        <input style={{ fontFamily: 'Itim, sans-serif' }} type="submit" value="SIGN UP" className="signup-btn" />
                        <GoogleLogin
                            clientId={clientId}
                            buttonText="Google Signup"
                            onSuccess={responseGoogle}
                            onFailure={responseGoogle}
                            cookiePolicy={'single_host_origin'}
                            style={{
                            width:100,
                        }}
                        />
                    </form>
                </div>
            </div>
        </div>
      /</div>
    );
}

export default SignUpForm;