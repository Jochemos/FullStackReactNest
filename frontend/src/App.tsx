import React from 'react';
import NavBar from './components/NavBar/NavBar.js';
import Home from './components/Home/Home.js';
import About from './components/About/About.js';
import Skills from './components/Skills/Skills.js';
import Loan from './components/Loan/Loan.js';
import Contact from './components/Contact/Contact.js';

const App = () => {
    return (
        <div className="App">
            <NavBar />
            <Home />
            <About />
            <Skills />
            <Loan />
            <Contact />
        </div>
    );
};

export default App;
