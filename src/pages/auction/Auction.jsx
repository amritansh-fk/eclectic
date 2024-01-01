import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { IoIosArrowDropdown, IoIosArrowDropup } from "react-icons/io";
import { PiSortAscending, PiCurrencyGbpBold } from "react-icons/pi";
import { FaArrowDownShortWide, FaArrowUpWideShort } from "react-icons/fa6";
import { FaSortNumericDown, FaSortNumericUpAlt, FaRegCalendarAlt, FaFilter } from "react-icons/fa";
import { FaThList } from "react-icons/fa";
import { TfiLayoutGrid3Alt } from "react-icons/tfi";
import { BsSortNumericDown,BsSortNumericDownAlt } from "react-icons/bs";
import { TbSortDescendingNumbers, TbSortAscendingNumbers } from "react-icons/tb";
import { FaLocationDot } from "react-icons/fa6";
import { CiCalendarDate } from "react-icons/ci";
import { FaPhone } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";

import { Dropdown, Accordion } from 'semantic-ui-react';
import { Button, Header, Image, Modal, TransitionablePortal, Transition } from 'semantic-ui-react';
import "semantic-ui-css/components/dropdown.min.css";
import "semantic-ui-css/components/menu.min.css";
import "semantic-ui-css/components/item.min.css";
import "semantic-ui-css/components/icon.min.css";
import "semantic-ui-css/components/transition.min.css";
import "semantic-ui-css/components/modal.min.css";
import "semantic-ui-css/components/button.min.css";
import "semantic-ui-css/components/dimmer.min.css";
import "semantic-ui-css/components/form.min.css";
import "semantic-ui-css/components/checkbox.min.css";
import "semantic-ui-css/components/accordion.min.css";

import "./style.scss";

import ContentWrapper from "../../components/contentWrapper/ContentWrapper";
import Header1 from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import SearchCards from '../../components/searchCards/SearchCards';
import SearchPageCards from '../../components/searchPageCards/SearchPageCards';
import Trending from '../../pages/home/trending/Trending';

const sortByOptions = [
  { key: 'plh', value:'plh', text: <span><PiCurrencyGbpBold />  <FaArrowDownShortWide />   Price: Low to High</span> },
  { key: 'phl', value:'phl', text: <span><PiCurrencyGbpBold />  <FaArrowUpWideShort />   Price: High to Low</span> },
  { key: 'don', value:'don', text: <span><TbSortAscendingNumbers />   Lot Number: Begining to Ending</span> },
  { key: 'ela', value:'ela', text: <span><TbSortDescendingNumbers />   Lot Number: Ending to Begining</span> },
]

const countryOptions = [
  { key: 'aa', value: 'aa', text: '2000' },
  { key: 'af', value: 'af', text: '2001' },
  { key: 'ax', value: 'ax', text: '2002' },
  { key: 'al', value: 'al', text: '2003' },
  { key: 'dz', value: 'dz', text: '2004' },
  { key: 'as', value: 'as', text: '2005' },
  { key: 'ad', value: 'ad', text: '2006' },
  { key: 'ao', value: 'ao', text: '2007' },
  { key: 'ai', value: 'ai', text: '2008' },
  { key: 'ag', value: 'ag', text: '2009' },
  { key: 'ar', value: 'ar', text: '2010' },
  { key: 'am', value: 'am', text: '2011' },
  { key: 'aw', value: 'aw', text: '2012' },
  { key: 'au', value: 'au', text: '2013' },
  { key: 'at', value: 'at', text: '2014' },
  { key: 'az', value: 'az', text: '2015' },
  { key: 'bs', value: 'bs', text: '2016' },
  { key: 'bh', value: 'bh', text: '2017' },
  { key: 'bd', value: 'bd', text: '2018' },
  { key: 'bb', value: 'bb', text: '2019' },
  { key: 'by', value: 'by', text: '2020' },
  { key: 'be', value: 'be', text: '2021' },
  { key: 'bz', value: 'bz', text: '2022' },
  { key: 'bj', value: 'bj', text: '2023' },
]

const data = [
  {
      "id":0,
      "name": "The Collector's Grand Tour: Curated Objects, Interior Design, Curiosities and Works from the Library - 1022 Lots      ",
      "Hammer Price" : "£100"
  }
]

const FilterSection = () => {
  const [showMore, setShowMore] = useState(true);
  const [selectedOption, setSelectedOption] = useState(true);
  const [minYear,setMinYear] = useState(2000);
  const [maxYear,setMaxYear] = useState(2023);

  const handleChange = () => {
    setMinYear(2000);
    setMaxYear(2023);
    setSelectedOption(!selectedOption)
  }
  const handleYearClickMin = (event) => {
    setMinYear(event.target.text);
    setSelectedOption(false);
  }
  const handleYearClickMax = (event) => {
    setMaxYear(event.target.text);
    setSelectedOption(false);
  }


  return (
    <>
    <div className="filterSection">
            <div className="filterHeading">Filters</div>
            
            <header className="filter-header">
              <h3>
                <span>Hammer Price</span>
              </h3>
            </header>
            <div class="container content">
                <div class="customEstimateFacet">
                    <input className="side-filter" type="number" placeholder="min"></input>
                    <div className="toLabel"><label>to</label></div>
                    <input className="side-filter" type="number" placeholder="max"></input>
                </div>
            </div>
          </div>
    </>
  )
}

const SearchResult = () => {

  const { query } = useParams();
  const [searchQuery, setSearchQuery] = useState("");

  const navigate = useNavigate()
  const searchQueryHandler = (e) => {
    if(e.key === 'Enter' && searchQuery.length > 0){
      navigate(`/search/${searchQuery}`)
    }
  }
  const searchQueryHandlerButton = (e) => {
    if(searchQuery.length > 0){
      navigate(`/search/${searchQuery}`)
    }
  }

  const [open, setOpen] = useState(false)
  const FilterModal = () => {
    const animation = "fly down";
    const duration = 600;
    return (
      <>
      <Button className="filters-button" onClick={()=> setOpen(true)}>Filters <FaFilter className="filter-logo"/></Button>
      { open && 
      (<TransitionablePortal open={open}
            // transition={"fly down"}
            // duration={600}
            transition={{ animation, duration }}

            >
      <Modal
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
      >
        <Modal.Header>Filter your results</Modal.Header>
        <Modal.Content text>
        <Modal.Description>
          <FilterSection></FilterSection>
        </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button color='gray' onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button
            color='black'
            content="Apply"
            labelPosition='right'
            icon='checkmark'
            onClick={() => setOpen(false)}
          />
        </Modal.Actions>
      </Modal>
      </TransitionablePortal>)
      
      }
      </>
    )
  }

  const [showGridView, setShowGridView] = useState(true);
  const handleGridViewClick = () => {
    setShowGridView(true);
  }
  const handleListViewClick = () => {
    setShowGridView(false);
  }
  const [accordionShow, setAccordionShow] = useState(false);

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
        <div className="par">
          {/* <FilterSection></FilterSection> */}
          <div className="searchCardsDiv">
            <div className="topBar">
            <div className="auctionTitle">
                <div className="dividerLine"></div>
                <div className="auctionHouseName">The Collector's Grand Tour: Curated Objects, Interior Design, Curiosities and Works from the Library - 1022 Lots</div>
                <div className="auctionDate"><CiCalendarDate className="calendorIcon"/> 23 Nov 2023 10:00 GMT</div>
                <div className="auctionLocation"><FaLocationDot className="locationIcon"/> Derby</div>
                <Accordion>
                    <Accordion.Title
                      active={accordionShow}
                      index={0}
                      onClick={() => setAccordionShow(!accordionShow)}
                      className="auctionHouseTitle"
                    >
                      {!accordionShow ? "Show Auction house details": "Hide Auction house details"}
                    </Accordion.Title>
                    <Accordion.Content active={accordionShow} className="accordionContent">
                      <div className="auctionHouseName1"><div className="name">Auctioneer:</div><div className="value"><a className="auctionHouseLink" target="_blank" href="https://www.bamfords-auctions.co.uk/">Bamfords Auctioneers &amp; Valuers</a></div></div>
                      <div className="auctionHouseAddress"><div className="name">Address:</div><div className="value">The Derby Saleroom 46 Nottingham Road Spondon Derby Derbyshire DE21 7NL United Kingdom</div></div>
                      <div className="auctionHouseEmail"><div className="name">Telephone(s):</div><div className="value"><FaPhone className="phoneIcon"/> 01332210000</div></div>
                      <div className="auctionHousePhone"><div className="name">Email:</div><div className="value"><MdOutlineMailOutline className="emailIcon"/> sales@bamfords-auctions.co.uk</div></div>
                    </Accordion.Content>
                  </Accordion>
              <div className="dividerLine"></div>
            </div>
            <div className="filterAndSort">
              <Dropdown
                placeholder='Sort By'
                selection
                icon='sort'
                options={sortByOptions}
                className="sortByDropdown"
              />
              {/* <FilterModal></FilterModal> */}
              <div className="viewToggle">
                <TfiLayoutGrid3Alt className="gridLogo"  onClick={handleGridViewClick} fill={showGridView ? "#0074e0" : ""}/>
                <FaThList className="listLogo" onClick={handleListViewClick} fill={!showGridView ? "#0074e0" : ""}/>
              </div>
            </div>
            </div>
            {showGridView ? <SearchCards showLotNum = {true}></SearchCards>: <SearchPageCards></SearchPageCards> }
          </div>
        </div>
        <Trending></Trending>
        </ContentWrapper>
      </div>
      <Footer></Footer>
    </>
  )
}

export default SearchResult