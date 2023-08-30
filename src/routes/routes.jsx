import { React } from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';

import HomePage from '../pages/home/Home';
import LoginPage from '../pages/login/Login';

const Rotas = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route Component={LoginPage} path='/' exact />
                <Route Component={HomePage} path='/home' />
            </Routes>
        </BrowserRouter>
    );
}

export default Rotas;