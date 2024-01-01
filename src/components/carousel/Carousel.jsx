import React, { useRef, forwardRef, useState } from "react";
import {
    BsFillArrowLeftCircleFill,
    BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import dayjs from "dayjs";

import ContentWrapper from "../contentWrapper/ContentWrapper";
import Img from "../lazyLoadImage/Img";
import cardimg from "../../../public/cardimg.png"
import { VscChromeClose } from "react-icons/vsc";

import "./style.scss";

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

const Card = forwardRef((props, ref) => {
    const {id,recentCards,name, setRecentCards} = props;
    const [show,setShow] = useState(true);
    const removeCard = (key) => {
        setRecentCards(recentCards.filter((data)=> data.id!=key))
    }
    return (
    <div className={`carouselItem${show ? "" : "hide" }` } ref = {ref}>
        <div className="posterBlock">
        <div className="crossCont" onClick={()=>removeCard(id)}>
            <VscChromeClose className="cross-margin"> </VscChromeClose>
        </div>
            <Img src={cardimg} />
            <div className="textBlock">
                <div className="price">{name}</div>
                <div className="price hammer">Hammer Price : £100</div>
            </div>
        </div>
    </div>
    );
});

const Carousel = ({ data, loading, endpoint, title }) => {
    const carouselContainer = useRef();
    const cardRef = useRef();
    const navigate = useNavigate();

    const reftest = useRef();

    const navigation = (dir) => {
        const container = carouselContainer.current;

        const scrollAmount =
            dir === "left"
                ? container.scrollLeft - (container.offsetWidth + 20)
                : container.scrollLeft + (container.offsetWidth + 20);

        container.scrollTo({
            left: scrollAmount,
            behavior: "smooth",
        });
        // window.scrollTo(300, 500);
        // container.scrollTo(300,0);
    };
    const [recentCards, setRecentCards] = useState(cardData);
    const showCards = recentCards.length!=0;
    

    const arrowClass = recentCards.length>5 ? "showAll": recentCards.length===5 ? "showMed": "";
    
    return (
        <div className="carousel">
            {showCards &&
            <ContentWrapper>
            
                <div className="carouselTitleParent">
                    <div className="carouselTitle">Recently viewed lots</div>
                    <div className="carouselTitleClear" onClick={()=> setRecentCards([])}>Clear All</div>
                </div>
                
                <BsFillArrowLeftCircleFill
                    className={`carouselLeftNav arrow ${arrowClass}`}
                    onClick={() => navigation("left")}
                />
                
                <BsFillArrowRightCircleFill
                    className={`carouselRighttNav arrow ${arrowClass}`}
                    onClick={() => navigation("right")}
                />
                                
                <div className="carouselItems" ref={carouselContainer}>
                    {recentCards.map((data)=>{
                        return <Card key={data.id} name = {data.name} setRecentCards = {setRecentCards} id = {data.id} recentCards = {recentCards} ref = {cardRef}></Card>
                    })}
                </div>
            </ContentWrapper>
            }
        </div>
    );
};

export default Carousel;