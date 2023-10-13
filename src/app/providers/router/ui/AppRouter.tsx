import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'shared/config/routerConfig/routerConfig';
import { PageLoader } from 'widgets/PageLoader';

export const AppRouter = () => {
    return (
        <Routes>
            {Object.values(routeConfig).map(({ path, element }) =>
                <Route key={path} path={path} element={<Suspense fallback={
                    <div className="content"><PageLoader /></div>
                }>
                    <div className="content">{element}</div>
                </Suspense>}/>
            )}
        </Routes>
    );
};
