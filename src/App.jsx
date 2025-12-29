import React, { useState } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Booking from './components/Booking';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
    const [activeSection, setActiveSection] = useState('home');
    const [menuOpen, setMenuOpen] = useState(false);

    return ( <
        div className = "min-h-screen bg-white" >
        <
        Header activeSection = { activeSection }
        setActiveSection = { setActiveSection }
        menuOpen = { menuOpen }
        setMenuOpen = { setMenuOpen }
        />

        {
            activeSection === 'home' && < Home setActiveSection = { setActiveSection }
            />} {
            activeSection === 'servicos' && < Services setActiveSection = { setActiveSection }
            />} { activeSection === 'portfolio' && < Portfolio / >
        } { activeSection === 'agendamento' && < Booking / > } { activeSection === 'contato' && < Contact / > }

        <
        Footer / >
        <
        /div>
    );
}