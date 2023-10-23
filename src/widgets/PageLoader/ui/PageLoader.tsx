import { classNames } from 'shared/lib/classNames/classNames';
import cl from './PageLoader.module.scss';
import { Loader } from 'shared/ui/Loader/Loader';

interface IPageLoaderProps {
    className?: string,
}

export const PageLoader = ({ className }: IPageLoaderProps) => {
    return (
        <div className={classNames(cl.pageLoader, {}, [className])}>
            <Loader />
        </div>
    );
};
