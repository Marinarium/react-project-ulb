import React, {Suspense} from 'react';
import {Link, Route, Routes} from "react-router-dom";
import "./index.scss";
import {AboutAsync} from "./pages/About/About.async";
import {HomeAsync} from "./pages/Home/Home.async";

const App = () => {
    return (
        <div className="app">
            <nav className="nav">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
            </nav>
            <main className="main">
                <Suspense fallback={<p>Loading...</p>}>
                <Routes>
                    <Route path="/" element={<HomeAsync/>}/>
                    <Route path="/about" element={<AboutAsync/>}/>
                </Routes>
                </Suspense>
            </main>
        </div>
    );
};

export default App;