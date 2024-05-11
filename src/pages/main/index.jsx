import React, { useEffect, useState } from 'react'
import Navbar from '../../components/navbar'
import PageTitle from '../../components/pageTitle'
import Search from '../../components/search'
import Result from '../../components/result'

const MainPage = () => {
    const [formSubmitted, setFormSubmitted] = useState(false)
    const [data, setData] = useState([])
    const [formData, setFormData] = useState({})

    useEffect(() => {
        fetch('./data.json')
            .then(response => response.json())
            .then(json => setData(json))
    }, [])

    const handleSubmit = (e) => {
        setFormSubmitted(true)
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
            {formSubmitted && <Result data={data} />}
        </>
    )
}

export default MainPage