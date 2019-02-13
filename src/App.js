import React, { Component } from 'react';
import { Provider } from 'react-redux';
import './App.css';
import CoinsList from './components/CoinsList';
import Head from './components/Header';
import configureStore from './redux/configureStore'
import Foot from "./components/Footer";
const store = configureStore();


class App extends Component {
  render() {
    return (
        <Provider store={store}>
          <div className = "bg">
              <Head/>
              <CoinsList/>
              <Foot/>
          </div>
        </Provider>

    );
  }
}

export default App;
