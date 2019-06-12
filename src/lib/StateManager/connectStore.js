import React, { Component } from 'react';
import { Consumer } from './configureContext';

const connectStore = (WrappedComponent) => {
  return class extends Component {
    render() {
      return (
        <Consumer>
          {state => <WrappedComponent store={state} {...this.props} />}
        </Consumer>
      )
    }
  }
}

export default connectStore;

