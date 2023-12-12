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
    const {id,recentCards,name, setRecentCards, showLotNum} = props;
    const [show,setShow] = useState(true);
    const removeCard = (key) => {
        setRecentCards(recentCards.filter((data)=> data.id!=key))
    }
    const navigate = useNavigate();
    
    return (
    <div className={`carouselItem${show ? "" : "hide" }` } onClick={() => navigate(`/explore/item/${id}`)}>
        <div className="posterBlock">
            <Img src={cardimg} />
            <div className="textBlock">
                <div className="price">{name}</div>
                <div className="price hammer">Hammer Price : £100</div>
                {!showLotNum ? <div className="price date">Date: 01/12/2023</div>: <div className="price date">Lot 1</div>}
            </div>
        </div>
    </div>
    );
};
const SearchCards = ({ data, fromSearch, mediaType, showLotNum }) => {
    const { url } = useSelector((state) => state.home);
    const navigate = useNavigate();
    const [recentCards, setRecentCards] = useState(cardData);
    return (
    <div className="searchCards" >
        {recentCards.map((data)=>{
            return <Card key={data.id} name = {data.name} setRecentCards = {setRecentCards} id = {data.id} recentCards = {recentCards} showLotNum = {showLotNum}></Card>
        })}
    </div>
    );
};

export default SearchCards;


// import React from "react";
// import  { useRef, forwardRef, useState } from "react";
// import dayjs from "dayjs";
// import { useNavigate } from "react-router-dom";
// import { useSelector } from "react-redux";

// import "./style.scss";
// import Img from "../lazyLoadImage/Img";
// import cardimg from "../../../public/cardimg.png"

// const cardData = [
//     {
//         "id":0,
//         "name": "WW II British medal",
//         "Hammer Price" : "£100"
//     },
//     {
//         "id":1,
//         "name": "18th Century Lamp",
//         "Hammer Price" : "£100"
//     },
//     {
//         "id":2,
//         "name": "WW II British medal",
//         "Hammer Price" : "£100"
//     },
//     {
//         "id":3,
//         "name": "18th Century Lamp",
//         "Hammer Price" : "£100"
//     },
//     {
//         "id":4,
//         "name": "WW II British medal",
//         "Hammer Price" : "£100"
//     },
//     {
//         "id":5,
//         "name": "WW II British medal",
//         "Hammer Price" : "£100"
//     },
// ]


// const Card = (props) => {
//     console.log("HELLLLOOO")
//     const {id,recentCards,name, setRecentCards} = props;
//     const [show,setShow] = useState(true);
//     const removeCard = (key) => {
//         setRecentCards(recentCards.filter((data)=> data.id!=key))
//     }
//     console.log(recentCards);
    
//     return (
//     <div className="posterBlock">
//         {/* <div className="posterImg"> */}
//             <Img src={cardimg} className="posterImg" />
//             <div className="textBlock">
//                 <div className="price">{name}</div>
//                 <div className="price">Hammer Price : £100</div>
//             </div>
//         {/* </div> */}
//     </div>
//     );
// };
// const SearchCards = ({ data, fromSearch, mediaType }) => {
//     const { url } = useSelector((state) => state.home);
//     const navigate = useNavigate();
//     const [recentCards, setRecentCards] = useState(cardData);
//     return (
//     <div className="movieCard" >
//         {recentCards.map((data)=>{
//             return <Card key={data.id} name = {data.name} setRecentCards = {setRecentCards} id = {data.id} recentCards = {recentCards} ></Card>
//         })}
//     </div>
//     );
// };

// export default SearchCards;