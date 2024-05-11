import React, { useEffect, useState } from 'react'

const Result = ({ data }) => {
    const [message, setMessage] = useState('')

    useEffect(() => {
        setMessage(data[0]?.message)
    }, [data])
    return (
        <div className='py-2'>
            <div className="container">
                <p>{message}</p>
            </div>

            <div className="container">
                <table className='mt-5 table w-full'>
                    <thead className='bg-[#e5e7eb]'>
                        <tr>
                            <th className='font-normal text-[#4b5563] py-2 text-xs uppercase text-left pl-5'>Flight</th>
                            <th className='font-normal text-[#4b5563] py-2 text-xs uppercase'>Aircraft</th>
                            <th className='font-normal text-[#4b5563] py-2 text-xs uppercase'>Class</th>
                            <th className='font-normal text-[#4b5563] py-2 text-xs uppercase'>Fare</th>
                            <th className='font-normal text-[#4b5563] py-2 text-xs uppercase'>Route</th>
                            <th className='font-normal text-[#4b5563] py-2 text-xs uppercase'>Departure</th>
                            <th className='font-normal text-[#4b5563] py-2 text-xs uppercase'>Arrival</th>
                            <th className='font-normal text-[#4b5563] py-2 text-xs uppercase'></th>
                            <th className='font-normal text-[#4b5563] py-2 text-xs uppercase'>Duration</th>
                            <th className='font-normal text-[#4b5563] py-2 text-xs uppercase'>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data[0]?.flightOffer.map((item, index) => (
                            <tr key={index}>
                                <td className={`text-[#4b5563] py-1 text-xs text-left pl-5 ${index % 2 === 0 ? "bg-[#f3f4f6]" : "bg-[#e5e7eb]"}`}>{
                                    item.itineraries.map((segments, index) => (
                                        <span key={index}>
                                            {segments.segments.map((segment, index) => (
                                                <span key={index}>
                                                    {segment.marketingCarrier} {segment.aircraft}
                                                    <br />
                                                </span>
                                            ))}
                                        </span>
                                    ))
                                }</td>
                                <td className={`text-[#4b5563] py-1 text-xs text-center ${index % 2 === 0 ? "bg-[#f3f4f6]" : "bg-[#e5e7eb]"}`}>{
                                    item.itineraries.map((segments, index) => (
                                        <span key={index}>
                                            {segments.segments.map((segment, index) => (
                                                <span key={index}>
                                                    {segment.flightNumber}
                                                    <br />
                                                </span>
                                            ))}
                                        </span>
                                    ))
                                }</td>
                                <td className={`text-[#4b5563] py-1 text-xs text-center ${index % 2 === 0 ? "bg-[#f3f4f6]" : "bg-[#e5e7eb]"}`}>{
                                    item.class.map((item) => (
                                        item.map((classItem, index) => (
                                            <span key={index}>
                                                {classItem}
                                                <br />
                                            </span>
                                        )
                                        )))}
                                </td>
                                <td className={`text-[#4b5563] py-1 text-xs text-center ${index % 2 === 0 ? "bg-[#f3f4f6]" : "bg-[#e5e7eb]"}`}>{
                                    item.fareBasis.map((fares) => (
                                        fares.map((fare, index) => (
                                            <span key={index}>
                                                {fare}
                                                <br />
                                            </span>
                                        )
                                        )))}
                                </td>
                                <td className={`text-[#4b5563] py-1 text-xs text-center ${index % 2 === 0 ? "bg-[#f3f4f6]" : "bg-[#e5e7eb]"}`}>{
                                    item.itineraries.map((segments, index) => (
                                        <span key={index}>
                                            {segments.segments.map((segment, index) => (
                                                <span key={index}>
                                                    {segment.departure.iataCode} - {segment.arrival.iataCode}
                                                    <br />
                                                </span>
                                            ))}
                                        </span>
                                    ))
                                }</td>
                                <td className={`text-[#4b5563] py-1 text-xs text-center ${index % 2 === 0 ? "bg-[#f3f4f6]" : "bg-[#e5e7eb]"}`}>{
                                    item.itineraries.map((segments, index) => (
                                        <span key={index}>
                                            {segments.segments.map((segment, index) => (
                                                <span key={index}>
                                                    {segment.departure.at}
                                                    <br />
                                                </span>
                                            ))}
                                        </span>
                                    ))
                                }</td>
                                <td className={`text-[#4b5563] py-1 text-xs text-center ${index % 2 === 0 ? "bg-[#f3f4f6]" : "bg-[#e5e7eb]"}`}>{
                                    item.itineraries.map((segments, index) => (
                                        <span key={index}>
                                            {segments.segments.map((segment, index) => (
                                                <span key={index}>
                                                    {segment.arrival.at}
                                                    <br />
                                                </span>
                                            ))}
                                        </span>
                                    ))
                                }</td>
                                <td className={`text-[#4b5563] py-1 text-xs text-center ${index % 2 === 0 ? "bg-[#f3f4f6]" : "bg-[#e5e7eb]"}`}>----</td>
                                <td className={`text-[#4b5563] py-1 text-xs text-center ${index % 2 === 0 ? "bg-[#f3f4f6]" : "bg-[#e5e7eb]"}`}>{
                                    item.itineraries.map((segments, index) => (
                                        <span key={index}>
                                            {segments.duration}
                                        </span>
                                    ))
                                }</td>
                                <td className={`text-[#4b5563] py-1 text-xs text-center ${index % 2 === 0 ? "bg-[#f3f4f6]" : "bg-[#e5e7eb]"}`}>{item.price}
                                    <br />
                                    <button className='btn text-xs rounded-sm bg-[#312e81] text-white px-3 py-2 mt-1'>SELECT</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Result