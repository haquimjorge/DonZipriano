import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import CalltoAction from '../components/CalltoAction'
import AboutUs from '../components/AboutUs'


const Home = () => {

        return(
            <>
                <Navbar/>
                    <CalltoAction/>
                    <PlatosSlider/>
                    <AboutUs/>
                <Footer/>
            </>
        )
}
export default Home;