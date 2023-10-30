import React, { useState, useEffect } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { SlMenu } from "react-icons/sl";
import { VscChromeClose } from "react-icons/vsc";
import { useNavigate, useLocation } from "react-router-dom";

import "./style.scss";

import ContentWrapper from "../contentWrapper/ContentWrapper";
// import logo from "../../assets/movix-logo.svg";

const Header = ({activeTab}) => {
    const [show, setShow] = useState("top");
    const [lastScrollY, setLastScrollY] = useState(0);
    const [mobileMenu, setMobileMenu] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();


    useEffect(() => {
      window.scrollTo(0, 0);
    }, [location]);

    const controlNavbar = () => {
      if (window.scrollY > 200) {
          if (window.scrollY > lastScrollY && !mobileMenu) {
              setShow("hide");
          } else {
              setShow("show");
          }
      } else {
          setShow("top");
      }
      setLastScrollY(window.scrollY);
    };

    useEffect(() =>{
      window.addEventListener("scroll", controlNavbar)

      return () => {window.removeEventListener("scroll",controlNavbar)}
    },[lastScrollY])
    
    const openMobileMenu = () => {
      setMobileMenu(true)
    }


    const navigationHandler = (type) => {
      if (type === "movie") {
          navigate("/explore/movie");
      } else if (type === "about") {
        navigate("/about");
      }
      else if (type === "/") {
        navigate("/");
      }
      else {
          navigate("/explore/tv");
      }
      setMobileMenu(false);
    };

    const handleSignUp = () => {
      alert("Sign Up");
    }


    return (
        <header className={`header ${mobileMenu ? "mobileView" : "" } ${show}`}>
          {/* <ContentWrapper> */}
            <ul className="menuItems">
              
              <li className={`menuItem ${activeTab=='homeTab'?'activeTab3':''}`} onClick={() => navigationHandler("/")}>
                Price Guide
              </li>
              {/* <li className={`menuItem ${activeTab=='priceGuideTab'?'activeTab3':''}`} onClick={() => navigationHandler("movie")}>
                Price Guide
              </li> */}
              <li className={`menuItem ${activeTab=='detailsTab'?'activeTab3':''}`} onClick={() => navigationHandler("tv")}>
                Lottery
              </li>
              <li className={`menuItem ${activeTab=='aboutTab'?'activeTab3':''}`} onClick={() => navigationHandler("about")}>
                About Us
              </li>
              
              <button className="signUpBtn signBtn" onClick={handleSignUp}>Sign Up</button>
              <button className="signInBtn signBtn">Sign In</button>
            </ul>
            <div className="mobileMenuItems">
              { mobileMenu ? <VscChromeClose onClick={()=> setMobileMenu(false)}/> : <SlMenu onClick={openMobileMenu} />}
            </div>
            
          {/* </ContentWrapper> */}
        </header>
    );
};

export default Header;
