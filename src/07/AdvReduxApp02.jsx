import React, { PureComponent } from 'react';
import { Provider } from 'react-redux';
import configureStore from './configureStore';
import { setLoading, resetLoading } from './actions/loadingActions';
import { setUser } from './actions/userActions';

class ReduxApp extends PureComponent {
  store = configureStore({ loading: false, name: 'test' });

  componentDidMount() {
    this.store.dispatch(setLoading(true));
    this.store.dispatch(resetLoading());
    this.store.dispatch(setUser({ name: 'KIM', age: 20 }));
  }

  render() {
    return <Provider store={this.store}>리덕스 예제</Provider>;
  }
}

export default ReduxApp;
