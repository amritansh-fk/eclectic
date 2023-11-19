import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";
import { FaSearch } from "react-icons/fa";
import { IoIosArrowDropdown, IoIosArrowDropup } from "react-icons/io";
import { PiSortAscending, PiCurrencyGbpBold } from "react-icons/pi";
import { FaArrowDownShortWide, FaArrowUpWideShort } from "react-icons/fa6";
import { FaSortNumericDown, FaSortNumericUpAlt, FaRegCalendarAlt, FaFilter } from "react-icons/fa";

import { Dropdown } from 'semantic-ui-react';
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

import "./style.scss";



// import { fetchDataFromApi } from "../../utils/api";
import ContentWrapper from "../../components/contentWrapper/ContentWrapper";
// import MovieCard from "../../components/movieCard/MovieCard";
// import Spinner from "../../components/spinner/Spinner";
// import noResults from "../../assets/no-results.png";
import Header1 from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import SearchCards from '../../components/searchCards/SearchCards';

const sortByOptions = [
  { key: 'plh', value:'plh', text: <span><PiCurrencyGbpBold />  <FaArrowDownShortWide />   Price: Low to High</span> },
  { key: 'phl', value:'phl', text: <span><PiCurrencyGbpBold />  <FaArrowUpWideShort />   Price: High to Low</span> },
  { key: 'don', value:'don', text: <span><FaRegCalendarAlt />  <FaSortNumericDown />   Date: Oldest to Newest</span> },
  { key: 'dno', value:'dno', text: <span><FaRegCalendarAlt />  <FaSortNumericUpAlt />   Date: Newest to Oldest</span> }
]

const FilterSection = () => {
  const [showMore, setShowMore] = useState(true);
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
          <Button color='red' onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button
            content="Apply"
            labelPosition='right'
            icon='checkmark'
            onClick={() => setOpen(false)}
            positive
          />
        </Modal.Actions>
      </Modal>
      </TransitionablePortal>)
      
      }
      </>
    )
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

          {/* <div className="filterSection">
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


          </div> */}
          <FilterSection></FilterSection>

          <div className="searchCardsDiv">
            <div className="topBar">
            <div className="pageTitle">
                {`Search
                    results
                of '${query}'`}
            </div>
            {/* <div className="sortByDiv">
              Sort By
              <PiSortAscending />
            </div> */}
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
              {/* <button className="filterBtn" onClick={()=> setOpen(true)}>Filter</button> */}
              {/* <button class="ui button">Show Modal</button> */}
            </div>
            </div>
            <SearchCards></SearchCards>
          </div>
          {/* <SearchCards></SearchCards> */}
        </div>
      </div>
      <Footer></Footer>
    </>
  )
}

export default SearchResult