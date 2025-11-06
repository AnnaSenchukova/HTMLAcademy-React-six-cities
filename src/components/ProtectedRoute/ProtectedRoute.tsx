import {ReactElement} from 'react';

import {AuthorizationStatus} from '../../const/enumAuthorizationStatus';
import {Navigate} from 'react-router-dom';

type ProtectedRouteProps = {
  authorizationStatus: AuthorizationStatus;
  children: ReactElement;
};

export function ProtectedRoute({children, authorizationStatus}: ProtectedRouteProps): ReactElement {
  return authorizationStatus === AuthorizationStatus.Auth ? children : <Navigate to="/login" replace/>;
}
