import React from 'react';
import "./styles/index.scss";
import {classNames} from "shared/lib/classNames";
import {useTheme} from "app/providers/ThemeProvider";
import {AppRouter} from "app/providers/router";
import {Navbar} from "widgets/Navbar";
import {Sidebar} from "widgets/Sidebar";

const App = () => {
    const {theme} = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <Navbar/>
            <main className="main">
                <Sidebar />
                <AppRouter/>
            </main>
        </div>
    );
};

export default App;