import React from 'react'

const MarketPlace = () => {
    return (
        <div className='flex flex-col gap-10 justify-center min-h-screen min-w-[100vw] py-20 items-center'>

            <div>
                <h1 className='text-4xl text-blue-800 text-center font-bold'> Our Marketplace</h1>
                <h2 className='text-blue-800 text-center text-xl'>Explore the best properties in the world</h2>

            </div>
            <div className='flex flex-col justify-center  gap-10'>
                <div className='flex flex-row justify-center gap-20 items-center '>
                    <MarketPlaceCard />
                    <MarketPlaceCard />
                    <MarketPlaceCard />
                </div>
                <MarketPlaceButton />
            </div>

        </div>
    )
}

export default MarketPlace




const MarketPlaceCard = () => {
    return (
        <div className=' transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300  rounded-3xl border border-blue-950  w-80 h-[460px]  overflow-hidden'>


            <div className=' '>
                <div className=''>

                    <img src="https://redswan.io/wp-content/uploads/2021/06/aviator-hotel.webp" alt="" />
                </div>
                <div className='flex flex-col justify-center text-xl text-blue-800 items-center py-4 gap-5'>
                    <h2>Targeted Investor IRR: –</h2>
                    <h2>Targeted Average Cash Yield: –</h2>
                    <h2>Targeted Equity Multiple: –</h2>
                    <h2>Minimum Investment: –</h2>
                </div>

                <div className='flex justify-center items-center'>
                    <button className='hover:bg-red-700 hover:text-white  border border-red-600 text-red-600 py-3 px-4 rounded-xl '> View Properties </button>
                </div>
            </div>

        </div>
    )
}

const MarketPlaceButton = () => {
    return (
        <div>

            <div className='flex justify-center items-center'>
                <button className='hover:bg-red-700 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 hover:text-white  border border-red-600 text-red-600 py-4 px-14 text-2xl rounded-xl '> View Properties </button>
            </div>

        </div>
    )
}

