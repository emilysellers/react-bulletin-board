import { Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header.js';
import Auth from './components/Auth.js';
import Bulletins from './components/Bulletins/Bulletins.js';

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/auth" component={Auth} />
        <Route path="/bulletins" component={Bulletins} />
      </Switch>
    </>
  );
}

export default App;
