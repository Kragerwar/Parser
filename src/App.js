import React, { Component } from 'react';
import './App.css';
import Students from './components/Students';
import StudentsSimple from './components/StudentsSimple';

import { Provider } from 'react-redux';
import configureStore from './redux/configureStore'
const store = configureStore();


class App extends Component {
  render() {
    return (
        <Provider store={store}>
          <div>
            <Students/>
            <hr/>
            <StudentsSimple/>
          </div>

        </Provider>

    );
  }
}

export default App;
