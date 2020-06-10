import { createStore, applyMiddleware } from 'redux';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers/index.jsx';

export default function configureStore(initialState) {

  return createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(reduxImmutableStateInvariant()))
  );
}
