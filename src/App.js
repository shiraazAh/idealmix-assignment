import React from 'react';
import Layout from './hoc/Layout';
import Content from './container/Content/Content';

function App() {
  return (
    <div>
      <Layout>
        <Content></Content>
      </Layout>
    </div>
  );
}

export default App;
