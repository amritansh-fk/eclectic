import React, { useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import "./style.scss";
import useFetch from '../../../hooks/useFetch'
import  Img from '../../../components/lazyLoadImage/Img'
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper'
import { useEffect } from 'react';
import { LazyLoadComponent } from 'react-lazy-load-image-component';
const HeroBanner = () => {
  const [query, setQuery] = useState("");

  const navigate = useNavigate()

  const {data, loading} = useFetch('users')
  const ref = useRef();

  // useEffect(()=> {
  //   const container = ref.current;
  //   console.log("dddv")
  //   console.log(container);
  //   container.addEventListener('mouseenter', () => {
  //     container.play();
  //     alert("sss");
  //     });
  //     return () => {container.removeEventListener("mouseenter",container.pause())}
    
  // }, [])

  const searchQueryHandler = (e) => {
    if(e.key === 'Enter' && query.length > 0){
      navigate(`/search/${query}`)
      // alert("het")
    }
  }
  const searchQueryHandlerButton = (e) => {
    if(query.length > 0){
      navigate(`/search/${query}`)
      // alert("het")
    }
  }
  return (
    <div className="heroBanner">
      {/* <div className="backdrop-img">
        <Img src = "https://i.ibb.co/Gk31RWQ/Original-PSD-File-Copy.png"></Img>
      </div> */}
      <ContentWrapper>
        <div className="heroBannerContent">
          {/* <span className="subTitle">GUUCHU</span> */}
          {/* <span className="subTitle">PUCCHU</span> */}
          {/* <span className="brandName">ECLECTIC</span> */}
          {/* <div className="brandImage">
            <Img src = "https://i.ibb.co/w6kz0Z5/Original-PSD-File-Copy.jpg"></Img>
          </div> */}

          
          {/* <video class="brandVideo" autoPlay muted>
            <source src="https://i.imgur.com/CMsXFMq.mp4" type="video/mp4" />
          </video> */}

          {/* Cropped Image */}
          <LazyLoadComponent>
            <video className="brandVideo" autoPlay muted playsInline ref = {ref} onMouseOver={event => event.target.play()}>
              <source src="https://i.imgur.com/qwE9Gmg.mp4" type="video/mp4" />
            </video>
          </LazyLoadComponent>
          

          <span className="brandTitle">Find out what your antiques are worth</span>
          <div className="searchInput">
            <input type="text"
            placeholder='e.g Mickey Mouse, Lalique, Apothecary Cabinet' 
            onKeyUp={searchQueryHandler}
            onChange = {(e) => setQuery(e.target.value)
            }
            />
            <button onClick={searchQueryHandlerButton}>Search</button>
          </div>
        </div>
        </ContentWrapper>
        {/* <video id="background-video" autoplay loop muted poster="https://assets.codepen.io/6093409/river.jpg">
          <source src="https://assets.codepen.io/6093409/river.mp4" type="video/mp4"/>
        </video>  */}
    </div>
  )
}

export default HeroBanner