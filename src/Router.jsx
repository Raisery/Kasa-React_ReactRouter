import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Error404 from './pages/Error404/Error404'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import FicheLogement from './pages/Fiche-Logement/Fiche-Logement'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

function Router() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='*' element={<Error404 />} />
                <Route exact path='/' element= {<Home />} />
                <Route exact path='/About' element= {<About />} />
                <Route exact path='/Fiche-Logement/:id' element= {<FicheLogement />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default Router