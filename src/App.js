import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header.js';
import Auth from './components/Auth.js';
import Bulletins from './components/Bulletins/Bulletins.js';
import { useUser } from './context/UserContext.js';
import EditBulletin from './components/Bulletins/EditBulletin.js';

function App() {
  const { user } = useUser();
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/auth/:type" component={Auth} />
        <Route path="/bulletins/edit/:id" component={EditBulletin} />
        <Route path="/bulletins" component={Bulletins} />
        <Route exact path="/">
          <>
            {user && <Redirect to="/bulletins" />}
            {!user && <Redirect to="/auth/sign-in" />}
          </>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
