import React from 'react';
import {Link} from "react-router-dom";
import "./styles/index.scss";
import {classNames} from "shared/lib/classNames";
import {useTheme} from "app/providers/ThemeProvider";
import {AppRouter} from "app/providers/router";

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
                <AppRouter/>
            </main>
        </div>
    );
};

export default App;