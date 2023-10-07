import React, {Suspense} from 'react';
import {Link, Route, Routes} from "react-router-dom";
import "./styles/index.scss";
import {AboutAsync} from "./pages/About/About.async";
import {HomeAsync} from "./pages/Home/Home.async";
import {useTheme} from "./theme/useTheme";
import {classNames} from "./helpers/classNames";

const App = () => {
    const {theme, toggleTheme} = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <nav className="nav">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <div className="settings">
                    <button onClick={toggleTheme}>Change Theme</button>
                </div>
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