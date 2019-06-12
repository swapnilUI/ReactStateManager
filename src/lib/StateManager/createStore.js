import React, { Component } from 'react';
import { Provider } from './configureContext';

const createStore = (WrappedComponent, initialState) => {
  return class extends Component {
    state = {
      get: key => {
        if (!key) {
          throw new Error('State key has not provided');
        }
        return this.state[key]
      },
      set: (key, value, callback) => {
        if (!key) {
          throw new Error('State key has not provided');
        }
        if (!value) {
          throw new Error('State key has not provided');
        }

        const state = this.state;
        state[key] = value;
        this.setState(state, () => {
          callback();
        })
      },
      getStore: () => {
        const store = Object.keys(this.state).reduce((acc, key) => {
          if (typeof this.state[key] !== 'function') {
            return { ...acc, [key]: this.state[key] }
          } else {
            return acc;
          }
        }, {});
        return store;
      },
      remove: stateNode => {
        if (!stateNode) {
          throw new Error('State key has not provided');
        }
        const state = this.state;
        const reducedState = Object.keys(state).reduce((acc, key) => {
          if (key !== stateNode) {
            return { ...acc, [key]: state[key] }
          } else {
            return acc;
          }
        }, {});
        this.setState(reducedState)
      },
      ...initialState
    }
    render() {
      return (
        <Provider value={this.state}>
          <WrappedComponent {...this.props} />
        </Provider>
      );
    }
  }
}

export default createStore;