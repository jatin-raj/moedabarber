import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Booking from './components/Booking';
import Location from './components/Location';
import Policies from './components/Policies';
import Services from './components/Services';
import About from './components/About';
import Reviews from './components/Reviews';
import Footer from './components/Footer';
import useScrollReveal from './hooks/useScrollReveal';

function App() {
    useScrollReveal();

    return (
        <div className="App">
            <Navbar />
            <Hero />
            <div className="reveal"><About /></div>
            <div className="reveal"><Services /></div>
            <div className="reveal"><Reviews /></div>
            <div className="reveal"><Booking /></div>
            <div className="reveal"><Location /></div>
            <div className="reveal"><Policies /></div>
            <Footer />
        </div>
    );
}

export default App;
