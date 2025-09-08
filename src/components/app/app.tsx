import {BrowserRouter, Route, Routes} from 'react-router-dom';

import {Main} from '../../pages/Main';
import {Favorites} from '../../pages/Favorites';
import {Login} from '../../pages/Login';
import {Property} from '../../pages/Property';
import {Page404} from '../../pages/Page404';
import {ProtectedRoute} from '../ProtectedRoute';
import {AuthorizationStatus} from '../../data/enumAuthorizationStatus';
import {AppRoute} from '../../data/enumAppRoute';


function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Main />}/>
        <Route path={AppRoute.Login} element={<Login />}/>
        <Route path={AppRoute.Favorites} element={
          <ProtectedRoute authorizationStatus={AuthorizationStatus.NoAuth}>
            <Favorites />
          </ProtectedRoute>
        }
        />
        <Route path={AppRoute.Property} >
          <Route path=':id' element={<Property />} />
        </Route>
        <Route path="*" element={<Page404/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
