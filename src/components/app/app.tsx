import {BrowserRouter, Route, Routes} from 'react-router-dom';

import {Main} from '../../pages/Main';
import {Favorites} from '../../pages/Favorites';
import {Login} from '../../pages/Login';
import {Property} from '../../pages/Property';
import {Page404} from '../../pages/Page404';
import {ProtectedRoute} from '../../components/ProtectedRoute';


function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Main />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/favorites" element={
            <ProtectedRoute isAuthenticated={false}>
              <Favorites />
            </ProtectedRoute>
          }
          />
          <Route path="/offer" >
            <Route path=':id' element={<Property />} />
          </Route>
        </Route>
        <Route path="*" element={<Page404/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
