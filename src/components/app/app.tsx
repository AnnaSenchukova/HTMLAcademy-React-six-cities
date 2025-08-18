import {Main} from '../../pages/Main';
import {Favorites} from '../../pages/Favorites';
import {Login} from '../../pages/Login';
import {Property} from '../../pages/Property';
import {MainEmpty} from '../../pages/MainEmpty';
import {FavoritesEmpty} from '../../pages/FavoritesEmpty';
import {PropertyNotLogged} from '../../pages/PropertyNotLogged';


function App(): JSX.Element {
  return (
    <div>
      <Main />
      <MainEmpty />
      <Favorites/>
      <FavoritesEmpty />
      <Login />
      <Property />
      <PropertyNotLogged />
    </div>
  );
}

export default App;
