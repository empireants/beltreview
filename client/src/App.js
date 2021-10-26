import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import NewProperty from './views/NewProperty';
import PropertiesList from './views/PropertiesList';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/nueva-propiedad">
            <NewProperty />
          </Route>
          <Route exact path="/propiedades">
            <PropertiesList/>
          </Route>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
