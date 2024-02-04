import React from 'react'
import { Binance, CoinDCX, CoinDesk, Forbes, Fortune, Mint, TechTimes, TheTokenizer, WazirX, Entrepreneur } from '../Assets/PartnersLogos'

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Partners = () => {
    return (

        <div className=' min-h-[50vh] '>

            <div>

                <p className="partner-text text-center text-5xl  text-blue-900 p-5">Partners</p>
                <p className="partner-text text-center text-xl text-gray-400">Our partners are leading the industry in cryptocurrency technology and financial services.  <br /> They help us to provide you with the best possible service </p>


                <div>

                    <Carousel
                        additionalTransfrom={0}
                        arrows
                        autoPlay
                        autoPlaySpeed={3000}
                        centerMode={false}
                        className="grayscale hover:grayscale-0 bg-white py-10 px-4   "
                        containerClass="container-with-dots"
                        customTransition="all 1s linear"
                        dotListClass=""
                        draggable
                        focusOnSelect={false}
                        infinite
                        itemClass=""
                        keyBoardControl
                        minimumTouchDrag={80}
                        pauseOnHover
                        renderArrowsWhenDisabled={false}
                        renderButtonGroupOutside={false}
                        renderDotsOutside={false}
                        responsive={{
                            desktop: {
                                breakpoint: {
                                    max: 3000,
                                    min: 1024
                                },
                                items: 3,
                                partialVisibilityGutter: 40
                            },
                            mobile: {
                                breakpoint: {
                                    max: 464,
                                    min: 0
                                },
                                items: 1,
                                partialVisibilityGutter: 30
                            },
                            tablet: {
                                breakpoint: {
                                    max: 1024,
                                    min: 464
                                },
                                items: 2,
                                partialVisibilityGutter: 30
                            }
                        }}
                        rewind={false}
                        rewindWithAnimation={false}
                        rtl={false}
                        shouldResetAutoplay
                        showDots={false}
                        sliderClass=""
                        slidesToSlide={2}
                        swipeable
                        transitionDuration={1000}
                    >


                        <img src={Binance} alt="Binance" />
                        <img src={CoinDCX} alt="CoinDCX" />
                        <img src={CoinDesk} alt="CoinDesk" />
                        <img src={Forbes} alt="Forbes" />
                        <img src={Fortune} alt="Fortune" />
                        <img src={Mint} alt="Mint" />
                        <img src={TechTimes} alt="TechTimes" />
                        <img src={TheTokenizer} alt="TheTokenizer" />
                        <img src={Entrepreneur} alt="Entrepreneur" />
                        <img src={WazirX} alt="WazirX" />




                    </Carousel>
                </div>



            </div>



        </div>
    )
}

export default Partners