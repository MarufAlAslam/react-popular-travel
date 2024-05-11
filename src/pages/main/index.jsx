import React, { useEffect, useState } from 'react'
import Navbar from '../../components/navbar'
import PageTitle from '../../components/pageTitle'
import Search from '../../components/search'
import Result from '../../components/result'

const MainPage = () => {
    const [data, setData] = useState([])
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

        const formData = {
            locFrom,
            locTo,
            journeyDate,
            numPassanger
        }

        console.log(formData)
    }
    return (
        <>
            <Navbar />
            <PageTitle />
            <Search handleSubmit={handleSubmit} />
            <Result data={data} />
        </>
    )
}

export default MainPage