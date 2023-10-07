import React, {Suspense} from 'react';
import {Link, Route, Routes} from "react-router-dom";
import "./styles/index.scss";
import {classNames} from "shared/lib/classNames";
import {useTheme} from "app/providers/ThemeProvider";
import {AboutPage} from "pages/AboutPage";
import {HomePage} from "pages/HomePage";

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
                        <Route path="/" element={<HomePage/>}/>
                        <Route path="/about" element={<AboutPage/>}/>
                    </Routes>
                </Suspense>
            </main>
        </div>
    );
};

export default App;