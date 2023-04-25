import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

export default function PrivateRoute({ authKey, redirectPath = '/error' }) {
  if (!authKey) {
    return <Navigate to={redirectPath} replace />;
  }

  return (
    <Outlet />
  );
}
