import { Navigate, Outlet } from 'react-router-dom';

export default function AuthPrivate({ authKey, redirectPath = '/info' }) {
  if (!authKey) {
    return (
      <Outlet />
    );
  }

  return <Navigate to={redirectPath} replace />;
}
