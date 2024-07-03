import React from 'react';
import Bio from './components/Bio';
import './styles/App.css';
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Comic from "./components/Comic"

function App() {
    return (
        <div className="App">
            <Bio />
            <Projects />
            <Skills />
            <Comic />
        </div>
    );
}

export default App;