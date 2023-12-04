import React from "react";
import  { useRef, forwardRef, useState } from "react";
import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import "./style.scss";
import Img from "../lazyLoadImage/Img";
import cardimg from "../../../public/cardimg.png"

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


const Card = (props) => {
    const {id,recentCards,name, setRecentCards} = props;
    const [show,setShow] = useState(true);
    const removeCard = (key) => {
        setRecentCards(recentCards.filter((data)=> data.id!=key))
    }
    
    return (
    <div className={`carouselItem${show ? "" : "hide" }` }>
        <div className="posterBlock">
            <Img src={cardimg} />
        </div>
        <div className="textBlock">
            <div className="price name">{name}</div>
            <div className="price">Hammer Price : <div className="name">£100</div></div>
            <div className="price">Date: <div className="name">01/12/2023</div></div>
            <div className="price">Lot 235</div>
            <div className="price">Estimate : <div className="name">£100</div></div>
            <div className="price">Chalkwell Auctions</div>
        </div>
    </div>
    );
};
const SearchPageCards = ({ data, fromSearch, mediaType }) => {
    const { url } = useSelector((state) => state.home);
    const navigate = useNavigate();
    const [recentCards, setRecentCards] = useState(cardData);
    const [listView, setLlistView] = useState(true);
    return (
    <div className={`searchPageCards ${listView ? "showListView": ""}`}>
        {recentCards.map((data)=>{
            return <Card key={data.id} name = {data.name} setRecentCards = {setRecentCards} id = {data.id} recentCards = {recentCards} ></Card>
        })}
    </div>
    );
};

export default SearchPageCards;