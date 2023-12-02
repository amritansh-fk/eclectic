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
        "name": "WW II British medal",
        "Hammer Price" : "£100"
    },
    {
        "id":1,
        "name": "18th Century Lamp",
        "Hammer Price" : "£100"
    },
    {
        "id":2,
        "name": "WW II British medal",
        "Hammer Price" : "£100"
    },
    {
        "id":3,
        "name": "18th Century Lamp",
        "Hammer Price" : "£100"
    },
    {
        "id":4,
        "name": "WW II British medal",
        "Hammer Price" : "£100"
    },
    {
        "id":5,
        "name": "WW II British medal",
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