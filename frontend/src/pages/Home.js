import React from 'react'
import NavBar from '../components/NavBar'
import Hero from '../components/Hero'
import Separator from '../components/Separator'
import MainPasta from '../components/MainPasta'
import MainChef from '../components/MainChef'
import MainPizza from '../components/MainPizza'
// import Footer from '../components/Footer'
// import CalltoAction from '../components/CalltoAction'
// import AboutUs from '../components/AboutUs'


const Home = () => {

        return(
            <>
                
                <NavBar/>
                <Hero/>
                <Separator/>
                <MainPasta/>
                <Separator/>
                <MainChef/>
                <Separator/>
                <MainPizza/>
                <Separator/>
                    {/* <CalltoAction/> */}
                    {/* <PlatosSlider/> */}
                    {/* <AboutUs/> */}
                {/* <Footer/> */}
            </>
        )
}
export default Home;