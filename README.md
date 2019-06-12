# State Manager

## Introduction

This is a small state management library created using **react contextAPI**. By using this library you can set and get state by connecting your component with store.

## How to use

Usage of this library is very easy.

You can create store by wrapping your main component in
**createStore** HOC exported by library and make sure to pass intial state.

~~~~
import { createStore } from '../lib/stateManager'

class App extends React.Component{
    ...
}

const intialState = {
    incidents:[]
}

export default createStore(App, initialState)

~~~~

Now you need to connect this store to component using **connectStore** HOC in which you want stored state.

~~~~

import { connectStore } from '../lib/stateManager'

class Incidents extends React.Component{
    ...
}

const intialState = {
    incidents:[]
}

export default connectStore(Incidents)

~~~~


### Set state , get state and getStore

When you connect component, connectStore HOC attaches store prop to your component's props which has methodes to set and get state.
Also you can get whole store.

##### Set state

`store.set(key, value, callback)`

~~~~

this.props.store.set('incidents',[
    {
        title:'incident title',
        assignee:'assignee name',
        status:'Done'
    }
]);

~~~~

Note- here you can pass callback method to do any action after setting state in store.

##### Get state

`store.get(key)`

~~~~

const incidents = this.props.store.get('incidents');

~~~~

#### Get whole store

`store.getState()`

~~~~

const wholeStore = this.props.store.getStore();

~~~~
