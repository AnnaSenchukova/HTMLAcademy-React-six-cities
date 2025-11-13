import {BrowserRouter, Route, Routes} from 'react-router-dom';

import {Main} from '../../pages/Main';
import {Favorites} from '../../pages/Favorites';
import {Login} from '../../pages/Login';
import {Property} from '../../pages/Property';
import {Page404} from '../../pages/Page404';
import {ProtectedRoute} from '../ProtectedRoute';
import {AuthorizationStatus} from '../../const/enumAuthorizationStatus';
import {AppRoute} from '../../const/enumAppRoute';
import {mockPlacesCard} from '../../mocks/mockPlacesCard';


function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path={AppRoute.Root} element={<Main />}/>
        <Route path={AppRoute.Login} element={<Login />}/>
        <Route path={AppRoute.Favorites} element={
          <ProtectedRoute authorizationStatus={AuthorizationStatus.Auth}>
            <Favorites places={mockPlacesCard} />
          </ProtectedRoute>
        }
        />
        <Route
          path={AppRoute.OfferDetails}
          element={<Property authorizationStatus={AuthorizationStatus.Auth as AuthorizationStatus} /> }
        />
        <Route path='*' element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
