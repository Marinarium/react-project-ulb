import { classNames } from 'shared/lib/classNames';
import cl from './BugButton.module.scss';
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { useEffect, useState } from 'react';

interface IBugButtonProps {
    className?: string,
}

export const BugButton = ({ className }: IBugButtonProps) => {
    const { t } = useTranslation()
    const [error, setError] = useState(false)

    const createBug = () => {
        setError(true);
    }

    useEffect(() => {
        if (error) {
            throw new Error();
        }
    }, [error])

    return (
        <Button
            onClick={createBug}
            theme={ThemeButton.PRIMARY}
            className={classNames(cl.bugButton, {}, [className])}
        >
            {t('errorButton')}
        </Button>
    );
};
