import React from 'react';
import Layout from './hoc/Layout/Layout';
import Content from './containers/Pizza/Pizza';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import { Route, Switch } from 'react-router-dom';


// App layout with react router
function App() {
  return (
    <div>
      <Layout>
        <Switch>
        <Route path="/favourite" component={BurgerBuilder} exact/>
        <Route path="/" component={Content} exact/>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
