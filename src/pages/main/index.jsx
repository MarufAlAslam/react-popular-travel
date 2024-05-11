import React, { useEffect, useState } from 'react'
import Navbar from '../../components/navbar'
import PageTitle from '../../components/pageTitle'
import Search from '../../components/search'
import Result from '../../components/result'

const MainPage = () => {
    const [formSubmitted, setFormSubmitted] = useState(false)
    const [data, setData] = useState([])

    useEffect(() => {
        fetch('./data.json')
            .then(response => response.json())
            .then(json => setData(json))
    }, [])

    const handleSubmit = (e) => {
        setFormSubmitted(true)
        e.preventDefault()
    }

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