import { classNames } from 'shared/lib/classNames';
import cl from './Loader.module.scss';

interface ILoaderProps {
    className?: string,
}

export const Loader = ({ className }: ILoaderProps) => {
    return (
        <div className={classNames(cl.loader, {}, [className])}>
            <div/>
            <div/>
            <div/>
            <div/>
        </div>
    );
};
