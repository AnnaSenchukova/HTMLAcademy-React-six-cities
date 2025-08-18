import {MainPage} from '../../pages/MainPage';
import {Favorites} from '../../pages/Favorites';
import {Login} from '../../pages/Login';
import {Property} from '../../pages/Property';


function App(): JSX.Element {
  return (
    <div>
      <MainPage/>
      <Favorites/>
      <Login />
      <Property />
    </div>
  );
}

export default App;
