import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import reducers from './reducers/reducers'
import App from './App';
import './App.css'
import Welcome from './components/Welcome';
import About from './components/About'

const store = createStore(reducers)

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Welcome />} />
                <Route path="/game" element={<Navigate to="/game/easy" />} />
                <Route path="/game/:difficulty" element={
                    <App />
                } />
                <Route path="/about" element={<About />} />
            </Routes>
        </BrowserRouter>
    </Provider>
    ,
    document.getElementById('root'));