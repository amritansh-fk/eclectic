import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";
import { FaSearch } from "react-icons/fa";
import { IoIosArrowDropdown, IoIosArrowDropup } from "react-icons/io";
import { PiSortAscending, PiCurrencyGbpBold } from "react-icons/pi";
import { FaArrowDownShortWide, FaArrowUpWideShort } from "react-icons/fa6";
import { FaSortNumericDown, FaSortNumericUpAlt, FaRegCalendarAlt, FaFilter } from "react-icons/fa";
import { FaThList } from "react-icons/fa";
import { TfiLayoutGrid3Alt } from "react-icons/tfi";

import { Dropdown, Select, Form, Radio } from 'semantic-ui-react';
import { Button, Header, Image, Modal, TransitionablePortal, Transition } from 'semantic-ui-react';
import "semantic-ui-css/components/dropdown.min.css";
import "semantic-ui-css/components/menu.min.css";
import "semantic-ui-css/components/item.min.css";
import "semantic-ui-css/components/icon.min.css";
import "semantic-ui-css/components/transition.min.css";

import "semantic-ui-css/components/modal.min.css";
// import "semantic-ui-css/components/accordion.min.css";
// import "semantic-ui-css/components/ad.min.css";
// import "semantic-ui-css/components/breadcrumb.min.css";

import "semantic-ui-css/components/button.min.css";
// import "semantic-ui-css/components/card.min.css";
// import "semantic-ui-css/components/checkbox.min.css";
// import "semantic-ui-css/components/comment.min.css";
// import "semantic-ui-css/components/container.min.css";
import "semantic-ui-css/components/dimmer.min.css";
import "semantic-ui-css/components/form.min.css";
import "semantic-ui-css/components/checkbox.min.css";

import "./style.scss";



// import { fetchDataFromApi } from "../../utils/api";
import ContentWrapper from "../../components/contentWrapper/ContentWrapper";
// import MovieCard from "../../components/movieCard/MovieCard";
// import Spinner from "../../components/spinner/Spinner";
// import noResults from "../../assets/no-results.png";
import Header1 from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import SearchCards from '../../components/searchCards/SearchCards';
import SearchPageCards from '../../components/searchPageCards/SearchPageCards';
import Trending from '../../pages/home/trending/Trending';

const sortByOptions = [
  { key: 'plh', value:'plh', text: <span><PiCurrencyGbpBold />  <FaArrowDownShortWide />   Price: Low to High</span> },
  { key: 'phl', value:'phl', text: <span><PiCurrencyGbpBold />  <FaArrowUpWideShort />   Price: High to Low</span> },
  { key: 'don', value:'don', text: <span><FaRegCalendarAlt />  <FaSortNumericDown />   Date: Oldest to Newest</span> },
  { key: 'dno', value:'dno', text: <span><FaRegCalendarAlt />  <FaSortNumericUpAlt />   Date: Newest to Oldest</span> }
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
                <span>Estimate</span>
              </h3>
            </header>
            <div class="container content">
                <div class="customEstimateFacet">
                    <input className="side-filter" type="number" placeholder="min"></input>
                    <div className="toLabel"><label>to</label></div>
                    <input className="side-filter" type="number" placeholder="max"></input>
                </div>
            </div>

            {/* Year section */}
            <header className="filter-header">
              <h3>
                <span>Year</span>
              </h3>
            </header>
            <div class="containerYear">
              <Form>
                <Form.Field>
                  <Radio
                    label='All available years'
                    name='radioGroup'
                    value='this'
                    checked={selectedOption === true}
                    onChange={handleChange}
                  />
                </Form.Field>
                <Form.Field>
                  <Radio
                    label='Select year range'
                    name='radioGroup'
                    value='that'
                    checked={selectedOption === false}
                    onChange={handleChange}
                  />
                </Form.Field>
              </Form>

              <div class="customEstimateFacet">
                <Select className = "ui selection year" placeholder={minYear} value = {minYear} options={countryOptions} onChange={handleYearClickMin}/>
                <Select className = "ui selection year" placeholder={maxYear} value = {maxYear} options={countryOptions} onChange={handleYearClickMax} />
              </div>

                {/* <div class="customEstimateFacet">
                    <input className="side-filter" type="number" placeholder="min"></input>
                    <div className="toLabel"><label>to</label></div>
                    <input className="side-filter" type="number" placeholder="max"></input>
                </div> */}
            </div>


              

            

            <header className="filter-header">
              <h3>
                <span>Auction House</span>
              </h3>
            </header>
            <div class="container content">
                <div class="customEstimateFacet">
                    <input className="auctionHouseInput" type="text" name="min" placeholder="Enter auction house name" ></input>
                    <div className="inputSearch">
                        <FaSearch className=""> </FaSearch>
                    </div>
                </div>
                <div className="auctionHouseNames">
                    <ul>
                      <li>
                        <div class="checkboxes__item">
                          <label class="checkbox style-b">
                            <input type="checkbox"/>
                            <div class="checkbox__checkmark"></div>
                            <div class="checkbox__body">Bamfords</div>
                          </label>
                        </div>
                      </li>
                      <li>
                        <div class="checkboxes__item">
                          <label class="checkbox style-b">
                            <input type="checkbox"/>
                            <div class="checkbox__checkmark"></div>
                            <div class="checkbox__body">Ashley Waller Auctioneers</div>
                          </label>
                        </div>
                      </li>
                      <li>
                        <div class="checkboxes__item">
                          <label class="checkbox style-b">
                            <input type="checkbox"/>
                            <div class="checkbox__checkmark"></div>
                            <div class="checkbox__body">British Toy Auctions</div>
                          </label>
                        </div>
                      </li>
                      <li>
                        <div class="checkboxes__item">
                          <label class="checkbox style-b">
                            <input type="checkbox"/>
                            <div class="checkbox__checkmark"></div>
                            <div class="checkbox__body">Tim Davidson Auctions Ltd</div>
                          </label>
                        </div>
                      </li>
                      <li>
                        <div class="checkboxes__item">
                          <label class="checkbox style-b">
                            <input type="checkbox"/>
                            <div class="checkbox__checkmark"></div>
                            <div class="checkbox__body">Loddon Auctions Ltd</div>
                          </label>
                        </div>
                      </li>
                    </ul>
                </div>

                {
                showMore 
                ?
                <button class="auctionHouseShowMore" onClick={() => setShowMore(!showMore)}>
                    Show more
                  <IoIosArrowDropdown className="showMoreButton"/>
                </button>
                :
                <button class="auctionHouseShowMore" onClick={() => setShowMore(!showMore)}>
                    Show less
                  <IoIosArrowDropup className="showMoreButton"/>
                </button>
                }
            </div>


          </div>
    </>
  )
}

const SearchResult = () => {

  const { query } = useParams();

  const navigate = useNavigate()
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
        // trigger={<Button className="filters-button">Filters <FaFilter className="filter-logo"/></Button>}
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

  return (
    <>
      <Header1 activeTab={"priceGuide"} showLogo={true}></Header1>
      <div className="searchResultsPage">
        <div className="searchInput">
          <input type="text"
          placeholder='e.g Mickey Mouse, Lalique, Apothecary Cabinet' 
          onKeyUp={searchQueryHandler}
          onChange = {(e) => setQuery(e.target.value)
          }
          />
          <button onClick={searchQueryHandlerButton}>Search</button>
        </div>
        <div className="par">
          <FilterSection></FilterSection>
          <div className="searchCardsDiv">
            <div className="topBar">
            <div className="pageTitle">
                {`We found 6 search
                    results
                for '${query}'`}
            </div>
            <div className="filterAndSort">
              <Dropdown
                placeholder='Sort By'
                // search
                selection
                // value="AVS"

                icon='sort'
                options={sortByOptions}
                className="sortByDropdown"
              />
              <FilterModal></FilterModal>
              <div className="viewToggle">
                <TfiLayoutGrid3Alt className="gridLogo"  onClick={handleGridViewClick} fill={showGridView ? "#0074e0" : ""}/>
                <FaThList className="listLogo" onClick={handleListViewClick} fill={!showGridView ? "#0074e0" : ""}/>
              </div>
              {/* <button className="filterBtn" onClick={()=> setOpen(true)}>Filter</button> */}
              {/* <button class="ui button">Show Modal</button> */}
            </div>
            </div>
            {showGridView ? <SearchCards></SearchCards>: <SearchPageCards></SearchPageCards> }
          </div>
          {/* <SearchCards></SearchCards> */}
        </div>
        <Trending></Trending>
      </div>
      <Footer></Footer>
    </>
  )
}

export default SearchResult