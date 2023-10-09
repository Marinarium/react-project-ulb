import {classNames} from "shared/lib/classNames";
import cl from "./Button.module.scss";
import {ButtonHTMLAttributes, FC} from "react";

export enum ThemeButton {
    CLEAR = 'clear',
    PRIMARY = 'primary'
}

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string,
    theme?: ThemeButton,
}

export const Button: FC<IButtonProps> = (props) => {
    const {className, theme, children, ...otherProps} = props;

    return (
        <button className={classNames(cl.button, {}, [className, cl[theme]])} {...otherProps}>
            {children}
        </button>
    );
};