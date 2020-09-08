import { createStore, combineReducers, applyMiddleware } from 'redux';
import todoReducer from './todo';

const reducer = combineReducers({
  todo: todoReducer
});

// function myMiddleware(store) {
//   return function(next) {
//     return function(action) {

//     }
//   }
// }

const myMiddleware = store => next => action => {
  if (action.type === "ADD_TODO" && action.payload === "dit") {
    action.payload = "***"
  }
  return next(action);
}

export default createStore(
  reducer,
  applyMiddleware(myMiddleware)
);