import { classNames } from 'shared/lib/classNames/classNames'
import cl from './Button.module.scss'
import { type ButtonHTMLAttributes, type FC } from 'react'

export enum ThemeButton {
    CLEAR = 'clear',
    PRIMARY = 'primary',
    OUTLINE = 'outline'
}

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    theme?: ThemeButton
}

export const Button: FC<IButtonProps> = (props) => {
    const { className, theme, children, ...otherProps } = props;

    return (
        <button
            className={classNames(cl.button, {}, [className, cl[theme]])}
            type='button'
            {...otherProps}
        >
            {children}
        </button>
    );
};
