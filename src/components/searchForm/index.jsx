import React from 'react'

const SearchForm = ({ handleSubmit }) => {
    return (
        <>
            <form action="" onSubmit={handleSubmit}>
                <div className="flex justify-between items-center gap-3">
                    <input required type="text" className='border border-black px-4 py-2' placeholder='From' name="locFrom" id="" />
                    <input required type="text" className='border border-black px-4 py-2' placeholder='To' name="locTo" id="" />
                    <input required type="date" className='border border-black px-4 py-2' placeholder='' name="journeyDate" id="" />
                    <button className='border border-black px-4 py-2' type='button'>
                        Day -
                    </button>
                    <button className='border border-black px-4 py-2' type='button'>
                        Day +
                    </button>
                    <select name="journeyTime" className='border border-black px-4 py-2' id="">
                        <option value="anytime">Any Time</option>
                    </select>
                    <span className='text-xl'>+</span>
                    <select name="" className='border border-black px-4 py-2' id="">
                        <option value="adt">ADT</option>
                    </select>
                    <select required name="numPassanger" className='border border-black px-4 py-2' id="">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                    </select>
                    <span className='text-xl'>+</span>
                </div>
                <div className="line mt-3 mb-3 bg-[#818cf8] h-[1px]"></div>

                <div className="flex justify-between items-center">
                    <div className="left flex justify-start items-center gap-2">
                        <input type="checkbox" name="" id="extra" />
                        <label htmlFor="extra" className='text-sm'>Extra Options</label>
                    </div>

                    <div className="center flex justify-center items-center gap-3">
                        <span className='text-sm'>Environment</span>
                        <div className="flex justify-start items-center gap-2">
                            <input type="radio" name="env" checked id="dummy" />
                            <label htmlFor="dummy" className='text-sm'>Dummy</label>
                        </div>
                        <div className="flex justify-start items-center gap-2">
                            <input type="radio" name="env" id="pdt" />
                            <label htmlFor="pdt" className='text-sm'>PDT</label>
                        </div>
                    </div>
                    <div className="right flex justify-end items-center gap-2">
                        <button className='btn px-5 py-2 rounded-sm bg-[#2e3790] text-white text-sm'>
                            SEARCH
                        </button>
                    </div>
                </div>
            </form>
        </>
    )
}

export default SearchForm