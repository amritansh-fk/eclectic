import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import "./style.scss";

import ContentWrapper from "../../components/contentWrapper/ContentWrapper";
import Header1 from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import Trending from '../../pages/home/trending/Trending';

import { Breadcrumb, Divider } from 'semantic-ui-react'
import "semantic-ui-css/components/breadcrumb.min.css";
import "semantic-ui-css/components/divider.min.css";

const Details = () => {

  const { query } = useParams();
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate()
  const searchQueryHandler = (e) => {
    if(e.key === 'Enter' && searchQuery.length > 0){
      navigate(`/search/${searchQuery}`)
      // alert("het")
    }
  }
  const searchQueryHandlerButton = (e) => {
    if(searchQuery.length > 0){
      navigate(`/search/${searchQuery}`)
    }
  }
  const sections = [
    { key: 'home', content: 'Price Guide', link: true },
    { key: 'registration', content: 'Auction Catalogues', link: true },
    { key: 'info', content: 'Ashley Waller Auctioneers', link:true },
    { key: 'auction', content: 'The Collector\'s Grand Tour: Curated Objects, Interior Design, Curiosities and Works from the Library - 1022 Lots', active: true },
  ]
  const handleSignUp = () => {
    alert("Sign Up");
  }
  return (
    <>
      <Header1 activeTab={"homeTab"} showLogo={true}></Header1>
      <div className="searchResultsPage">
        <div className="searchInput">
          <input type="text"
          placeholder='e.g Mickey Mouse, Lalique, Apothecary Cabinet' 
          onKeyUp={searchQueryHandler}
          onChange = {(e) => setSearchQuery(e.target.value)
          }
          />
          <button onClick={searchQueryHandlerButton}>Search</button>
        </div>
        <ContentWrapper>
          <div className="detailsPage">
            <div className="dividerLine"></div>
            <div className="breadcrumDiv">
              <div className="back" onClick={() => navigate(-1)} >Back to search</div>| 
              <Breadcrumb className="breadcrumb">
                <Breadcrumb.Section link onClick={() => navigate(`/`)}>Price Guide</Breadcrumb.Section>
                <Breadcrumb.Divider>/</Breadcrumb.Divider>
                <Breadcrumb.Section link onClick={() => navigate(`/all-auctions/`)}>Auction Catalogues</Breadcrumb.Section>
                <Breadcrumb.Divider>/</Breadcrumb.Divider>
                <Breadcrumb.Section link onClick={() => navigate(`/auction-houses/4`)}>Ashley Waller Auctioneers</Breadcrumb.Section>
                <Breadcrumb.Divider>/</Breadcrumb.Divider>
                <Breadcrumb.Section active link onClick={() => navigate(`/auction/44`)}>The Collector's Grand Tour: Curated Objects, Interior Design, Curiosities and Works from the Library - 1022 Lots</Breadcrumb.Section>
              </Breadcrumb>
            </div>
            <div className="dividerLine"></div>
            <div className="lotNameDiv">
              <div className="lotNumber"><div className="lot">LOT</div> <div className="number">995</div></div>
              <div className="lotBar"></div>
              <div className="lotName">A 19th century brass two-draw telescope, signed Alfred J Natalis & Co, London, leather bound, 36.5cm extending to 97cm long</div>
            </div>
          </div>
        </ContentWrapper>
        <Trending></Trending>
      </div>
      <Footer></Footer>
    </>
  )
}

export default Details 