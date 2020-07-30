import React from 'react';
import Layout from './hoc/Layout';
import Content from './containers/Content/Content';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder'
import { Route, Switch } from 'react-router-dom'

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
