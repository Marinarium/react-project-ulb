import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'shared/config/routerConfig/routerConfig';

export const AppRouter = () => {
    return (
        <Suspense fallback={<p>Loading...</p>}>
            <div className="content">
                <Routes>
                    {Object.values(routeConfig).map(({ path, element }) =>
                        <Route key={path} path={path} element={element}/>
                    )}
                </Routes>
            </div>
        </Suspense>
    );
};
