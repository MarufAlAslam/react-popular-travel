import React, { useState } from 'react'
import SearchForm from '../searchForm'

const Search = () => {
    const [activeBtn, setActiveBtn] = useState('Round Trip')
    const changeState = (value) => {
        setActiveBtn(value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const form = e.target

        const locFrom = form.locFrom.value
        const locTo = form.locTo.value
        const journeyDate = form.journeyDate.value
        const journeyTime = form.journeyTime.value
        const numPassanger = form.numPassanger.value

        const data = {
            locFrom,
            locTo,
            journeyDate,
            journeyTime,
            numPassanger
        }

        console.log(data)
    }
    return (
        <div className='pt-5'>
            <div className="container">
                <div className="flex justify-center items-center">
                    <button onClick={() => changeState("Round Trip")} className={`btn text-sm border border-[#312e81] py-1 px-6 ${activeBtn === "Round Trip" ? "bg-[#312e81] text-white" : "bg-white text-black"}`}>Round Trip</button>
                    <button onClick={() => changeState("One Way")} className={`btn text-sm border border-[#312e81] border-l-0 py-1 px-6 ${activeBtn === "One Way" ? "bg-[#312e81] text-white" : "bg-white text-black"}`}>One Way</button>
                    <button onClick={() => changeState("Multi City")} className={`btn text-sm border border-[#312e81] border-l-0 py-1 px-6 ${activeBtn === "Multi City" ? "bg-[#312e81] text-white" : "bg-white text-black"}`}>Multi City</button>
                </div>

                <div className="line mt-6 mb-3 bg-[#818cf8] h-[1px]"></div>
                <SearchForm handleSubmit={handleSubmit} />
                <div className="line mt-3 bg-[#818cf8] h-[1px]"></div>
            </div>
        </div>
    )
}

export default Search