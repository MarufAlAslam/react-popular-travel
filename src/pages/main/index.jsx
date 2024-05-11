import React, { useEffect, useState } from 'react'
import Navbar from '../../components/navbar'
import PageTitle from '../../components/pageTitle'
import Search from '../../components/search'
import Result from '../../components/result'

const MainPage = () => {
    const [data, setData] = useState([])
    const [formData, setFormData] = useState({})
    const [journeyStartedFrom, setJourneyStartedFrom] = useState([])
    const [journeyEndedTo, setJourneyEndedTo] = useState('')
    const [flightDate, setFlightDate] = useState('')
    const [availableSeats, setAvailableSeats] = useState(0)

    console.log(journeyStartedFrom, journeyEndedTo, flightDate, availableSeats)

    useEffect(() => {
        fetch('./data.json')
            .then(response => response.json())
            .then(json => setData(json))
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()

        const form = e.target

        const locFrom = form.locFrom.value.toUpperCase()
        const locTo = form.locTo.value.toUpperCase()
        const journeyDate = form.journeyDate.value
        const numPassanger = form.numPassanger.value

        const submittedData = {
            locFrom,
            locTo,
            journeyDate,
            numPassanger
        }

        setFormData(submittedData)
    }


    console.log(formData)

    return (
        <>
            <Navbar />
            <PageTitle />
            <Search handleSubmit={handleSubmit} />
            <Result
                data={data}
                journeyStartedFrom={journeyStartedFrom}
                setJourneyStartedFrom={setJourneyStartedFrom}
                setJourneyEndedTo={setJourneyEndedTo}
                setFlightDate={setFlightDate}
                setAvailableSeats={setAvailableSeats} />
        </>
    )
}

export default MainPage