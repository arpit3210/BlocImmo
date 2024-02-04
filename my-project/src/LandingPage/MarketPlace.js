import React from 'react'

import { MarketplaceCardDetails } from '../Constants/MarketplaceCardDetails'

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";




const MarketPlace = () => {




    return (
        <div className='flex flex-col justify-center items-center   py-20 '>

            <div>
                <h1 className='text-4xl text-blue-800 text-center font-bold'> Our Marketplace</h1>
                <h2 className='text-blue-800 text-center text-xl'>Explore the best properties in the world</h2>

            </div>
          
                <div className=' lg:max-w-screen-xl w-[100vw] px-10 py-10 '>

                    <Carousel  additionalTransfrom={0}
  arrows
  autoPlay
  autoPlaySpeed={2000}
  centerMode={false}
  className="lg:min-h-[80vh]  lg:px-6"
  containerClass="container-with-dots"
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
        max: 545,
        min: 0
      },
      items: 1,
      partialVisibilityGutter: 30
    },
    tablet: {
      breakpoint: {
        max: 1024,
        min: 545
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
  swipeable >
                        {MarketplaceCardDetails.map((property) => (
                            <MarketPlaceCard
                                key={property.Title }
                                ImageUrl={property.ImageUrl}
                                Title={property.Title}
                                Place={property.Place}
                                PropertyClass={property.PropertyClass}
                                TargetedInvestorIRR={property.TargetedInvestorIRR}
                                TargetedAverageCashYield={property.TargetedAverageCashYield}
                                TargetedEquityMultiple={property.TargetedEquityMultiple}
                                MinimumInvestment={property.MinimumInvestment}
                                urlLink={property.urlLink}

                            />
                        ))}
                    </Carousel>

                </div>


<div className='my-10'>
<MarketPlaceButton />
</div>
               
            </div>

     
    )
}

export default MarketPlace




const MarketPlaceCard = ({ ImageUrl, Title, Place, PropertyClass, TargetedInvestorIRR, TargetedAverageCashYield, TargetedEquityMultiple, MinimumInvestment, urlLink }) => {
    return (
        <div className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 rounded-3xl border border-blue-950 w-80 h-[460px] overflow-hidden'>

            <div className='relative'>
                <img src={ImageUrl} alt={Title} className='w-full h-[200px] object-cover' />
                <div className='absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-white'>
                    <h1 className='text-3xl font-semibold'>{Title}</h1>
                    <p className='text-lg'>{Place}</p>
                    <p className='text-lg'>{PropertyClass}</p>
                </div>
            </div>

            <div className='flex flex-col justify-center text-xl text-blue-800 items-center py-4 gap-5'>
                <h2>Targeted Investor IRR: {TargetedInvestorIRR}</h2>
                <h2>Targeted Average Cash Yield: {TargetedAverageCashYield}</h2>
                <h2>Targeted Equity Multiple: {TargetedEquityMultiple}</h2>
                <h2>Minimum Investment: {MinimumInvestment}</h2>
            </div>

            <div className='flex justify-center items-center'>
                <a href={urlLink} target='_blank' rel='noopener noreferrer'>
                    <button className='hover:bg-red-700 hover:text-white border border-red-600 text-red-600 py-3 px-4 rounded-xl'>View Properties</button>
                </a>
            </div>

        </div>
    );
};



const MarketPlaceButton = () => {
    return (
        <div>

            <div className='flex justify-center items-center'>
                <button className='hover:bg-red-700 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 hover:text-white  border border-red-600 text-red-600 py-4 px-14 text-2xl rounded-xl '> View Properties </button>
            </div>

        </div>
    )
}

