import { classNames } from 'shared/lib/classNames';
import cl from './NotFoundPage.module.scss';
import { useTranslation } from 'react-i18next';

interface INotFoundPageProps {
    className?: string,
}

export const NotFoundPage = ({ className }: INotFoundPageProps) => {
    const { t } = useTranslation();

    return (
        <h1 className={classNames(cl.notFoundPage, {}, [className])}>
            {t('notFound')}
        </h1>
    );
};
