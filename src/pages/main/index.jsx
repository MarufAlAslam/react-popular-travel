import React, { useEffect, useState } from 'react'
import Navbar from '../../components/navbar'

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
        </>
    )
}

export default MainPage