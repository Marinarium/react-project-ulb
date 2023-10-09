import {classNames} from "shared/lib/classNames";
import cl from "./ThemeSwitcher.module.scss";
import {useTheme} from "app/providers/ThemeProvider";
import ThemeIcon from "shared/assets/icons/theme.svg";
import {Button, ThemeButton} from "shared/ui/Button/Button";

interface IThemeSwitcherProps {
    className?: string,
}

export const ThemeSwitcher = ({className}: IThemeSwitcherProps) => {
    const {toggleTheme} = useTheme();

    return (
        <Button theme={ThemeButton.CLEAR} className={classNames(cl.themeSwitcher, {}, [className])}
                onClick={toggleTheme}>
            <ThemeIcon width="30px" height="30px"/>
        </Button>
    );
};