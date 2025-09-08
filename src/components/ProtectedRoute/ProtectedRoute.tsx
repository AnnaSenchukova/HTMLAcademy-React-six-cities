import { ReactElement, PropsWithChildren } from 'react';
import { Navigate } from 'react-router-dom';

type ProtectedRouteProps = PropsWithChildren<{
  isAuthenticated: boolean;
}>;

export function ProtectedRoute ({ children, isAuthenticated }: ProtectedRouteProps): ReactElement {
  return isAuthenticated ? {children} : <Navigate to="/login" replace />;
}
