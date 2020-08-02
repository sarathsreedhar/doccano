import React,{useContext} from 'react';
import { Switch, Route } from "react-router-dom";
import { ConnectedRouter } from 'connected-react-router';


import { Store } from "./redux/configureStore";
import PrivateRoute from './helpers/privateRoute';
import Layout from './components/partials/layout/layout';
import AuthLandingContainer from './containers/auth-landing';
import { history } from './redux/configureStore';
import { ThemeModeProvider } from "./providers/ThemeModeProvider";







import './App.css';

function App() {
  return (
    <ConnectedRouter history={history}>
        <Switch>
          <ThemeModeProvider>
            <Layout>
              <Route exact path="/" component={AuthLandingContainer}></Route>
            </Layout>
          </ThemeModeProvider>
            {/* <Route exact path="/" component={ AuthLandingContainer } ></Route> */}
        {/* <PrivateRoute  path="/project" component ={layout}></PrivateRoute> */}
    </Switch>
    </ConnectedRouter>
    
  );
}

export default App;
