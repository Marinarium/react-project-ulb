import { classNames } from 'shared/lib/classNames';
import cl from './Sidebar.module.scss';
import React, { useState } from 'react';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher/';
import { useTranslation } from 'react-i18next';

interface ISidebarProps {
    className?: string
}

export const Sidebar = ({ className }: ISidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);
    const { t } = useTranslation();

    const onToggle = () => {
        setCollapsed(prev => !prev);
    }

    return (
        <aside className={classNames(cl.sidebar, { [cl.collapsed]: collapsed }, [className])}>
            <Button theme={ThemeButton.PRIMARY} onClick={onToggle}>{t('sidebar.tgl')}</Button>
            <div className={cl.switchers}>
                <ThemeSwitcher/>
                <LangSwitcher className={cl.lang}/>
            </div>
        </aside>
    );
};
