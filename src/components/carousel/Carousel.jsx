import React, { useRef } from "react";
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

const Card = ({name}) => {
    return (
    <div className="carouselItem">
        <div className="posterBlock">
        <div className="crossCont">
            <VscChromeClose className="cross-margin"> </VscChromeClose>
        </div>
            <Img src={cardimg} />
            <div className="textBlock">
                <div className="price">{name}</div>
                <div className="price">Hammer Price : £100</div>
            </div>
        </div>
    </div>
    );
};

const Carousel = ({ data, loading, endpoint, title }) => {
    const carouselContainer = useRef();
    const navigate = useNavigate();

    const reftest = useRef();

    const navigation = (dir) => {
        const container = carouselContainer.current;
        console.log("****")
        console.log(carouselContainer)

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
        console.log(scrollAmount);
        console.log(container.offsetWidth + 20);
    };

    return (
        <div className="carousel">
            <ContentWrapper>
                
                <div className="carouselTitle">Recently viewed lots</div>
                
                <BsFillArrowLeftCircleFill
                    className="carouselLeftNav arrow"
                    onClick={() => navigation("left")}
                />
                
                <BsFillArrowRightCircleFill
                    className="carouselRighttNav arrow"
                    onClick={() => navigation("right")}
                />

                <div className="carouselItems" ref={carouselContainer}>
                    <Card name = "WW II British medal"></Card>
                    <Card name = "18th Century Lamp"></Card>
                    <Card name = "WW II British medal"></Card>
                    <Card name = "18th Century Lamp"></Card>
                    <Card name = "WW II British medal"></Card>
                </div>
                
            </ContentWrapper>
        </div>
    );
};

export default Carousel;