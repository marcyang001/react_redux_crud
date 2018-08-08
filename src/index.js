import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { createStore } from 'redux';

// pass the store into our components 
// to do that let's use the Provider component from the react-redux library
import { Provider } from 'react-redux';

import postReducer from './reducers/postReducer';

// the createStore method will allow us to create the store but we are not done yet. 
// This method needs a special argument and 
// this argument goes by a special name called the REDUCER

const store = createStore(postReducer);


// Provider component uses something 
// called React Context which allows you 
// to pass the store object to any components 
// that needs to access it without the need to pass props. 

// with the Provider component so that all the child components in our app can get access to the store. 

ReactDOM.render(
	<Provider store={store}>
	<App />
	</Provider>, document.getElementById('root')
);



