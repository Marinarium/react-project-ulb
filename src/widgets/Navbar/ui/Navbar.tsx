import React from "react";
import {classNames} from "shared/lib/classNames";
import cl from "./Navbar.module.scss";
import {AppLink} from "shared/ui/AppLink/AppLink";
import {ThemeSwitcher} from "widgets/ThemeSwitcher";

interface INavbarProps {
    className?: string;
}

export const Navbar = ({className}: INavbarProps) => {
    return (
        <nav className={classNames(cl.navbar, {}, [className])}>
            <AppLink to="/">Home</AppLink>
            <AppLink to="/about">About</AppLink>
            <ThemeSwitcher/>
        </nav>
    );
};

