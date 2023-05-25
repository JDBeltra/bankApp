import React from 'react'
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';

import { Bank } from '../components/Bank';
import { Header } from '../components/layout/Header';
import { Abonar } from '../components/Abonar';
import { Historial } from '../components/Historial';
import { Login } from '../components/Login';
import { Navegar } from '../components/layout/Navegar';


export const RouterPrincipal = () => {

    return (
        <Router>
            {/* Cabecera del app */}
            <Header />
            {/* Contenido de la app */}
            <Routes>
                    <Route path="/abonar" element={<Abonar />} />
                    <Route path="/bank" element={<Bank />} />
                    <Route path="/historial" element={<Historial />} />
                    <Route path="/login" element={<Login />} />
                    <Route index element={<Login />} />
                    <Route path='*' element={<Login />} />
                {/* <Route path='*' element={(
                    <>
                        <h1> Error 404</h1>
                        <strong>Esa ruta no existe</strong>
                    </>
                )} /> */}
            </Routes>

            {/* Navegacion del programa */}
            <Navegar />

        </Router>
    )

}
