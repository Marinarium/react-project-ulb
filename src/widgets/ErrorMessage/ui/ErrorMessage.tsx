import { classNames } from 'shared/lib/classNames';
import cl from './ErrorMessage.module.scss';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';

interface IErrorMessageProps {
    className?: string,
}

export const ErrorMessage = ({ className }: IErrorMessageProps) => {
    const { t } = useTranslation()

    const reloadPage = () => {
        location.reload();
    }

    return (
        <div className={classNames(cl.errorMessage, {}, [className])}>
            <h1 className={cl.title}>{t('errorMessage')}</h1>
            <Button
                className={cl.button}
                onClick={reloadPage}>
                {t('reloadButton')}
            </Button>
        </div>
    );
};
