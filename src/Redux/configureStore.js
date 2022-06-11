import { applyMiddleware, createStore } from 'redux';
import episodesReducer from './Reducer';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(episodesReducer, composeWithDevTools(applyMiddleware(thunk)))

export default store