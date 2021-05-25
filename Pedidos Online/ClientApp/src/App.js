import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { KitchenOrde } from './components/kitchenOrde'
import { CupOrde } from './components/CupOrde';
import { Orde } from './components/Orde';

import './custom.css'

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
            <Route exact path='/' component={Home} />
            <Route path='/kitchen-orde' component={KitchenOrde} />
            <Route path='/cup-orde' component={CupOrde} />
            <Route path='/orde' component={Orde} />
      </Layout>
    );
  }
}
