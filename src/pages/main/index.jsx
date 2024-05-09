import React, { useEffect, useState } from 'react'

const MainPage = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch('./data.json')
            .then(response => response.json())
            .then(json => setData(json))
    }, [])

    console.log(data)
    return (
        <div>
            Main page
        </div>
    )
}

export default MainPage