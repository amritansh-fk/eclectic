import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import "./style.scss";

import ContentWrapper from "../../components/contentWrapper/ContentWrapper";
import Header1 from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import Trending from '../../pages/home/trending/Trending';
import DetailsCarousel from '../../components/detailsCarousel/DetailsCarousel';

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
                <Breadcrumb.Section link onClick={() => navigate(`/auction-houses/4`)}>Bamfords Auctioneers &amp; Valuers</Breadcrumb.Section>
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
            <div className="midSection">
              <DetailsCarousel></DetailsCarousel>
              <div className="itemDetails">
                <div className="auctionDate"><div className="name">Auction Date:</div><div className="value">12 Jan 2023</div></div>
                <div className="hammerPrice"><div className="name">Hammer Price:</div><div className="value">£100</div></div>
                <div className="estimatePrice"><div className="name">Estimate Price:</div><div className="value">£350 - £550</div></div>
                <div className="auctionName"><div className="name">Auction Name:</div><div className="value">The Collector's Grand Tour: Curated Objects, Interior Design, Curiosities and Works from the Library - 1022 Lots</div></div>
                <div className="dividerLine"></div>
                <div className="itemDescription"><div className="name">Description:</div><div className="value">A 19th-century brass telescope with two draws for adjustability, bearing the signature of the manufacturer, Alfred J Natalis & Co., based in London. The telescope is leather-bound, and its length measures 36.5cm, extendable to 97cm. This antique item signifies a historical piece, appreciated for both its craftsmanship and functional design.</div></div>
              </div>
            </div>
            <div className="bottomSection">
                <div className="dividerLine"></div>
                <div className="auctionHouseName"><div className="name">Auctioneer:</div><div className="value"><a className="auctionHouseLink" target="_blank" href="https://www.bamfords-auctions.co.uk/">Bamfords Auctioneers &amp; Valuers</a></div></div>
                <div className="auctionHouseAddress"><div className="name">Address:</div><div className="value">The Derby Saleroom 46 Nottingham Road Spondon Derby Derbyshire DE21 7NL United Kingdom</div></div>
                <div className="auctionHouseEmail"><div className="name">Telephone(s):</div><div className="value">01332210000</div></div>
                <div className="auctionHousePhone"><div className="name">Email:</div><div className="value">sales@bamfords-auctions.co.uk</div></div>
                <div className="dividerLine"></div>
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