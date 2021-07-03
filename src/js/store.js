import { createStore, compose, applyMiddleware } from "redux";
import userReducer from './reducers/userReducer';
import thunk from "redux-thunk";


const devtools =
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
  typeof window.__REDUX_DEVTOOLS_EXTENSION__ === "undefined"
? a => a
: window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(
  userReducer,
  compose(applyMiddleware(thunk), devtools)
);

export default store;
  