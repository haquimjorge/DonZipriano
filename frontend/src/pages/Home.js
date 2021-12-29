import React from 'react'
import NavBar from '../components/NavBar'
import Hero from '../components/Hero'
import Separator from '../components/Separator'
import MainPasta from '../components/MainPasta'
import MainChef from '../components/MainChef'
import MainPizza from '../components/MainPizza'
import MainReservas from '../components/MainReservas'
import Footer from '../components/Footer'
import ComentariosClientes from '../components/ComentariosClientes'


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
                <MainReservas/>
                <Separator/>
                <ComentariosClientes/>
                <Footer/>
                
            </>
        )
}
export default Home;