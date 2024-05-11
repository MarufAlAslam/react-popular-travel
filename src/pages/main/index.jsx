import React from 'react'
import Navbar from '../../components/navbar'
import PageTitle from '../../components/pageTitle'
import Search from '../../components/search'
import Result from '../../components/result'

const MainPage = () => {
    return (
        <>
            <Navbar />
            <PageTitle />
            <Search />
            <Result />
        </>
    )
}

export default MainPage