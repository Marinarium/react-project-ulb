import React from "react";
import {classNames} from "shared/lib/classNames";
import cl from "./Navbar.module.scss";
import {AppLink} from "shared/ui/AppLink/AppLink";
import {useTranslation} from "react-i18next";

interface INavbarProps {
    className?: string;
}

export const Navbar = ({className}: INavbarProps) => {
    const {t} = useTranslation();

    return (
        <nav className={classNames(cl.navbar, {}, [className])}>
            <AppLink to="/">{t('navbar.home')}</AppLink>
            <AppLink to="/about">{t('navbar.about')}</AppLink>
        </nav>
    );
};

