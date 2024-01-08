import React, { useState, useEffect } from "react";
import Img from "../../components/lazyLoadImage/Img"


import "./style.scss";

import ContentWrapper from "../../components/contentWrapper/ContentWrapper";
import Header1 from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import signUpLogo from "../../../public/img-login1.svg"
const SearchResult = () => {
    const [signUpToggle, setSignUpToggle] = useState(false)
    return (
        <>
        <Header1 showLogo={true}></Header1>
        {/* <div classNameName="dummyDiv" style={{minHeight:"1000px"}}></div> */}
        <div className="login">
                <div className="login__content">
                    <div className="login__img">
                        <img src={signUpLogo} alt=""></img>
                    </div>

                    <div className="login__forms">
                        <form action="" className={`login__registre ${signUpToggle?"none":"block"}`} id="login-in">
                            <h1 className="login__title">Sign In</h1>
        
                            <div className="login__box">
                                <i className='bx bx-user login__icon'></i>
                                <input type="text" placeholder="Name" className="login__input" />
                            </div>
        
                            <div className="login__box">
                                <i className='bx bx-lock-alt login__icon'></i>
                                <input type="password" placeholder="Password" className="login__input" />
                            </div>

                            <a href="#" className="login__forgot">Forgot password?</a>

                            <a href="#" className="login__button">Sign In</a>

                            <div>
                                <span className="login__account">Don't have an Account ?</span>
                                <span className="login__signin" id="sign-up" onClick={()=> setSignUpToggle(!signUpToggle)}>Sign Up</span>
                            </div>
                        </form>

                        <form action="" className={`login__create ${signUpToggle?"block":"none"}`} id="login-up">
                            <h1 className="login__title">Create Account</h1>
        
                            <div className="login__box">
                                <i className='bx bx-user login__icon'></i>
                                <input type="text" placeholder="Name" className="login__input" />
                            </div>
        
                            <div className="login__box">
                                <i className='bx bx-at login__icon'></i>
                                <input type="text" placeholder="Email" className="login__input" />
                            </div>

                            <div className="login__box">
                                <i className='bx bx-lock-alt login__icon'></i>
                                <input type="password" placeholder="Password" className="login__input" />
                            </div>

                            <a href="#" className="login__button">Sign Up</a>

                            <div>
                                <span className="login__account">Already have an Account ?</span>
                                <span className="login__signup" id="sign-in" onClick={()=> setSignUpToggle(!signUpToggle)}>Sign In</span>
                            </div>

                            <div className="login__social">
                                <a href="#" className="login__social-icon"><i className='bx bxl-facebook' ></i></a>
                                <a href="#" className="login__social-icon"><i className='bx bxl-twitter' ></i></a>
                                <a href="#" className="login__social-icon"><i className='bx bxl-google' ></i></a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        <Footer></Footer>
        </>
    )
}

export default SearchResult