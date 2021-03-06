import React from 'react-dom/client';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import Store from './Components/Store/Store';

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <Provider store={Store}>
        <App />
    </Provider>)



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
