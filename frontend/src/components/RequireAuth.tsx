import React from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { APP_LOGIN_PAGE } from '../navigation/routes';
import useStore from '../store/store';

function RequireAuth() {
    //@ts-ignore
    const isAuthorised = useStore((state) => state.isAuthorised)
    const location = useLocation();

    return isAuthorised
        ? <Outlet />
        : <Navigate to={APP_LOGIN_PAGE} state={{ from: location }} replace />
}

export default RequireAuth