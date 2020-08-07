import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';

import App from './App';
import * as serviceWorker from './serviceWorker';

import './index.css';

// فقط اینجا هستش که باید اپ رو بیاری توی دام اینجکت کنی نه هیچ جای دیگه !!
ReactDOM.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>,
    document.getElementById('root'));

// enable service worker
serviceWorker.unregister();
