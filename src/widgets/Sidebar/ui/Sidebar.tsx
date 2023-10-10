import {classNames} from "shared/lib/classNames";
import cl from "./Sidebar.module.scss";
import React, {useState} from "react";
import {Button, ThemeButton} from "shared/ui/Button/Button";
import {ThemeSwitcher} from "widgets/ThemeSwitcher";

interface ISidebarProps {
    className?: string,
}

export const Sidebar = ({className}: ISidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);

    const onToggle = () => {
        setCollapsed(prev => !prev);
    }

    return (
        <aside className={classNames(cl.sidebar, {[cl.collapsed]: collapsed}, [className])}>
            <Button theme={ThemeButton.PRIMARY} onClick={onToggle}>Toggle!</Button>
            <div className={cl.switchers}>
                <ThemeSwitcher/>
            </div>
        </aside>
    );
};