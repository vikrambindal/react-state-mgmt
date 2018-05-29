import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux';
import {BrowserRouter, Route} from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store/configureStore';

const store = configureStore();

ReactDOM.render(
    <Provider store={store} >
        <BrowserRouter>
            <Route path="/" component={App}/>
        </BrowserRouter>
    </Provider>, 
    document.getElementById('root'));
registerServiceWorker();
