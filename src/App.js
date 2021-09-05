
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.css';
import Pokelist from './Pokelist';
import Pokemon from './Pokemon';

function App() {
  return (
    <>
    <BrowserRouter>
      <Switch>
        <Route path="/p/:id">
          <Pokemon/>
        </Route>
        <Route match="*">
          <Pokelist/>
        </Route>
      </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
