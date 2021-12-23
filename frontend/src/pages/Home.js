import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import CalltoAction from '../components/CalltoAction'
import AboutUs from '../components/AboutUs'


const Home = () => {

        return(
            <>
                <h1>pROBANDO</h1>
                <NavBar/>
                    <CalltoAction/>
                    {/* <PlatosSlider/> */}
                    <AboutUs/>
                <Footer/>
            </>
        )
}
export default Home;