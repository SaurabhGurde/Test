import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
// import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
// const middleware = [thunk];
// const composeenhancers = window.__redux_devtools_extension_compose__;
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    
  },

});
