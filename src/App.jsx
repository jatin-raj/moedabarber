import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Booking from './components/Booking';
import Location from './components/Location';
import Policies from './components/Policies';
import Services from './components/Services';
import Footer from './components/Footer';

function App() {
    return (
        <div className="App">
            <Navbar />
            <Hero />
            <Booking />
            <Location />
            <Policies />
            <Services />
            <Footer />
        </div>
    );
}

export default App;
