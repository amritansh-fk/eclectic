import React, { useState, useEffect } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
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
import Img from "../../components/lazyLoadImage/Img"

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

const cardData = [
    {
        "id":0,
        "name": "A 19th century Grand Tour brown patinated bronze model, of the Arc de Triomphe, rectangular marble base, 15.5cm high, c.1860",
        "Hammer Price" : "£100"
    },
    {
        "id":1,
        "name": "A Chinese bronze temple vase, of Yuan form, dragon mask loose ring handles, Qing Dynasty Qianlong reign mark to foot rim, 32cm high",
        "Hammer Price" : "£100"
    },
    {
        "id":2,
        "name": "A late 19th/early 20th century antiquarian's facsimile triptych, after the Ghent altarpiece, the panels printed after Jan van Eyck with The Adoration of The Mystic Lamb and religious figures, 50cm high x 154cm wide when open",
        "Hammer Price" : "£100"
    },
    {
        "id":3,
        "name": "A 10\" terrestrial globe, by George Phillip & Son Ltd, London, geometric base, 34cm high, published 1959",
        "Hammer Price" : "£100"
    },
    {
        "id":4,
        "name": "A Regency mahogany and brass marquetry rectangular writing box, outlined with inlaid bands of leafy scrolls, hinged cover enclosing a fitted interior, 51cm wide, c.1825",
        "Hammer Price" : "£100"
    },
    {
        "id":5,
        "name": "Friendly Society, Trade Union and Masonic Interest - a large early 20th century marching banner, Sheffield Equalized Independent Druids, Hardwick Lodge No. 325 266cm high, 284cm wide",
        "Hammer Price" : "£100"
    },
]
const descprtion = "Bamfords is a family run business and since its formation in 2002 has grown in size and reputation. Rising as a phoenix out of the ashes of Neales of Derby its core team have worked together for over 20 years. Based in the heart of the UK, with great road and rail links, Bamfords has rapidly overtaken competitors and grown into the position it is in today, one of Britain's great auction houses.Headed by one of the country's most recognised antiques faces, James Lewis, Bamfords enjoy a comfortable position being the parent company to Neales of Nottingham, est. 1840, Richardson and Linnell, est. 1899 and Noel Wheatcroft.Bamfords employs over 30 members of staff, including auctioneers and world renowned specialists. The Bamfords team is not limited to the UK, links with firms in North America, Africa and Asia gives us a reach far beyond our location.Based in two very different Derbyshire locations our salerooms offer one thing in common, a great service and a fun antiques buying or selling experience. Our Derby auction house is only three turns from London, set alongside the A52, it offers three salerooms, nine departments and a coffee shop, all under one roof. Our Rowsley saleroom just outside Bakewell in the Peak District National Park is thought to be the only auction house located in an out of town shopping centre, with over 750 car parking spaces, on-site restaurant and shops, buying and selling at auction has never been easier or more pleasurable.For deliveries, both sites have easy unloading/loading facilities, however if you require help our dedicated team of experienced haulage staff and vehicles can assist.Bamfords welcomes everybody - have a look at the Calendar to find out when we hold our Auctions or go to the Auctions page to see what is going under the hammer.";
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
  const [accordionShow, setAccordionShow] = useState(true);
  
  const location = useLocation();
  const showAllAuctions = location.pathname === "/auction-houses/all"
  
  return (
    <>
      <Header1 activeTab={"homeTab"} showLogo={true}></Header1>
      <div className="searchResultsPage auctionHouse">
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
          <div className="searchCardsDiv">
            <div className="topBar">
            <div className="pageTitle">
                <span className="countResult">6</span>
                <span> Auctions </span>
            </div>
            { !showAllAuctions && <div className="auctionTitle">
                <div className="dividerLine"></div>
                <div className="auctionHouseName">Bamfords Auctioneers &amp; Valuers</div>
                <div className="auctionHouseDescprtion">
                    {descprtion.length>=250 ? 
                    <div className="auctionHouseDescprtionDiv">
                        <span className={`auctionDesc ${accordionShow?"partial":"full"}`}>{accordionShow ? descprtion.substring(0,250)+"..." : descprtion} <a className="showDescBtn" onClick={()=> setAccordionShow(!accordionShow)}>{accordionShow?"Show More":"Show Less"}</a></span>
                    </div>
                        : <span className={`auctionDesc ${accordionShow?"partial":"full"}`}>{descprtion}</span>}
                </div>
                <Img src = "https://cdn.globalauctionplatform.com/7a973975-9aa8-4b2e-bfc5-a3ed01219269/logo/bamfords%20logo_on%20blue%20ground.jpg" className="auctionHouseImg"></Img>
                <div className="auctionHouseAddress"><div className="name">Address:</div><div className="value"><FaLocationDot className="locationIcon" style={{marginRight:"5px"}} />The Derby Auction House, 46 Nottingham Road, Spondon, Derby, DE21 7NL, United Kingdom</div></div>
                <div className="auctionHouseEmail"><div className="name">Telephone(s):</div><div className="value"><FaPhone className="phoneIcon"/> 01332210000</div></div>
                <div className="auctionHousePhone"><div className="name">Email:</div><div className="value"><MdOutlineMailOutline className="emailIcon"/> sales@bamfords-auctions.co.uk</div></div>
              <div className="dividerLine"></div>
            </div>}
            {/* <div className="filterAndSort">
              <Dropdown
                placeholder='Sort By'
                selection
                icon='sort'
                options={sortByOptions}
                className="sortByDropdown"
              />
              <div className="viewToggle">
                <TfiLayoutGrid3Alt className="gridLogo"  onClick={handleGridViewClick} fill={showGridView ? "#0074e0" : ""}/>
                <FaThList className="listLogo" onClick={handleListViewClick} fill={!showGridView ? "#0074e0" : ""}/>
              </div>
            </div> */}
            </div>
            {/* {showGridView ? <SearchCards showLotNum = {true}></SearchCards>: <SearchPageCards></SearchPageCards> } */}
            <SearchPageCards data = {data} showHammerPrice = {false}></SearchPageCards>
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