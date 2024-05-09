import React, { useEffect, useState } from 'react'
import Navbar from '../../components/navbar'
import PageTitle from '../../components/pageTitle'
import Search from '../../components/search'

const MainPage = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch('./data.json')
            .then(response => response.json())
            .then(json => setData(json))
    }, [])

    console.log(data)
    return (
        <>
            <Navbar />
            <PageTitle />
            <Search />
        </>
    )
}

export default MainPage