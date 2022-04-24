import { Route, Switch } from 'react-router-dom';
import Catalogo from './Pages/Catalogo';
import Home from './Pages/Home';
import SobreNos from './Pages/SobreNos';

function App() {
  return (
    <>
      <Switch>
        <Route exact path='/catalogo' component={Catalogo} />
        <Route exact path='/sobre' component={SobreNos} />
        <Route exact path='/' component={Home} />
      </Switch>
    </>
  );
}

export default App;
