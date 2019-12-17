# Startup

## Requirement
1. package `redux`
Dependency core redux.
```
npm install --save redux
// or, if using yarn
yarn add redux
```
2. package `react-redux`
Support dependency redux for library react js.
```
npm install --save react-redux
// or, if using yarn
yarn add react-redux
```

## How to use
```
import react from 'react';
import { createStore } from 'redux';

// setup reducer
const initialState = {
  number: 0
}
function counter(state = initialState, action) {
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
      return state
  }
}

let store = createStore(counter)

store.subscribe(() => {
  console.log(store.getState().number))
}

// setup action
const actionINC = () => {
  return {
    type: 'INCREMENT'
  }
}

const App = () => {
  return (
    <div>
      <h1>COUNTER</h1>
      <button onClick={actionINC}>INC</button>
    </div>
  )
}

export default App;
```

