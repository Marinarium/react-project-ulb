import React from 'react';
import { useTranslation } from 'react-i18next';
import { BugButton } from 'app/providers/ErrorBoundary';

const HomePage = () => {
    const { t } = useTranslation('home');

    return (
        <div>
            {t('title')}
            <BugButton />
        </div>
    );
};

export default HomePage;
