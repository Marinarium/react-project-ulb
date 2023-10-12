import { classNames } from 'shared/lib/classNames';
import cl from './ThemeSwitcher.module.scss';
import { useTheme } from 'app/providers/ThemeProvider';
import ThemeIcon from 'shared/assets/icons/theme.svg';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';

interface IThemeSwitcherProps {
    className?: string
}

export const ThemeSwitcher = ({ className }: IThemeSwitcherProps) => {
    const { toggleTheme } = useTheme();
    const { t } = useTranslation();
    return (
        <Button theme={ThemeButton.CLEAR}
            className={classNames(cl.themeSwitcher, {}, [className])}
            onClick={toggleTheme}
            aria-label={t('sidebar.theme')}
        >
            <ThemeIcon width="30px" height="30px"/>
        </Button>
    );
};
