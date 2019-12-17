# Project Directory Structure

```
...
|-- src
|  |-- actions
|  |  |-- counter.js
|  |-- reducers
|  |  |-- counter.js
|  |-- redux
|  |  |-- store.js
|  |  |-- middleware.js
|  |-- components
|  |-- screens
|  |  |-- Counter.js
|-- App.js
|-- index.js
...
```

## action
/src/actions/counter.js
```
export const actionIncrement = () => {
  return {
    type: 'INCREMENT'
  }
}

export const actionDecrement = () => {
  return {
    type: 'DECREMENT'
  }
}
```

## reducer
/src/reducers/counter.js
```
const initialState = {
  number: 0
}

const counter = (state = initialState, action) => {
  switch (action.type) {

    case 'INCREMENT':
      return {
        number: state.number + 1
      }

    case 'DECREMENT':
      return {
        number: state.number - 1
      }

    default:
      return state;
  }
}

export default counter;
```

## redux store
/src/redux/store.js
```
import { createStore, combineReducers } from 'redux';

import counter from '../reducers/counter';

// setup combine reducers, for multiple reducer
// ex = reducers articles, categories, comments
const reducers = combineReducers({
  counter
})

const store = createStore(reducers);

export default store
```

## screen Counter & and the process of changing the value state
1. Change export Component Counter to HOC (Hight Order Component) `connect` from redux.
What is HOC ? ... find it by yourself
```
...
export default connect()(Counter)
...
```
2. Create function `mapStateToProps`, to be entered into the `connect` parameter.
function `mapStateTopProps` is used for mapping state global to props for Component 
```
...
const mapStateToProps = (state) => {
  return {
    counter: state.counter
  }
}
...
```
3. Import action redux to component
```
...
import { actionIncrement } from '../actions/counter'
...
```
4. Call action redux with props dispatch
props.dispatch can be used when the component is exported using connect
```
...
<button onClick={() => this.props.actionIncrement()}>INC</button>
...
```
5. Call value state global with props from return function `mapStateToProps`
```
render() {
  return(
    ...
    <h2>{this.props.counter.number}</h2>
    ...
  )
}
...
```
6. Full Code
/src/screens/Counter.js
```
import React, { Component } from 'react'
import { connect } from 'react-redux'
// import action 
import { actionIncrement } from '../actions/counter'

class Counter extends Component {
  render() {
    return (
      <div>
        <h1>COUNTER</h1>
        <h2>{this.props.counter.number}</h2>
        <button onClick={() => this.props.actionIncrement()}>INC</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    counter: state.counter
  }
}

export default connect(mapStateToProps)(Counter)
```

