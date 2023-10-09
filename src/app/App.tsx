import React from 'react';
import "./styles/index.scss";
import {classNames} from "shared/lib/classNames";
import {useTheme} from "app/providers/ThemeProvider";
import {AppRouter} from "app/providers/router";
import {Navbar} from "widgets/Navbar";

const App = () => {
    const {theme, toggleTheme} = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <Navbar />
            <main className="main">
                <div className="settings">
                    <button onClick={toggleTheme}>Change Theme</button>
                </div>
                <AppRouter/>
            </main>
        </div>
    );
};

export default App;