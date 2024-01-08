import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import 'semantic-ui-css/semantic.min.css'

import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import Details from "./pages/details/Details";
import SearchResult from "./pages/searchResult/SearchResult";
import Explore from "./pages/explore/Explore";
import Auction from "./pages/auction/Auction";
import AuctionHouse from "./pages/auctionHouse/AuctionHouse";
import SignUp from "./pages/signUp/SignUp"
import PageNotFound from "./pages/404/PageNotFound";

function App() {
  useEffect(() => {
    // window.history.scrollRestoration = 'manual'
    window.scrollTo(0, 0);
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path="/explore/item/:id" element={<Details />} />
        <Route path="/search/:query" element={<SearchResult />} />
        <Route path="/explore/movie" element={<Explore />} />
        <Route path="/about" element={<SearchResult />} />
        <Route path="/auction/:id" element={<Auction />} />
        <Route path="/auction-houses/:id" element={<AuctionHouse />} />
        <Route path="/sign-in" element={<SignUp />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      {/* <Footer></Footer> */}
    </BrowserRouter>
  )
}

export default App
