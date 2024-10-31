import React from 'react'
import {
    Navigate,
    Route,
    HashRouter as Router, Routes,
    /* BrowserRouter as Router, Routes, */
} from "react-router-dom"
import { DashboardRoutes } from './DashboardRoutes'
import { Home } from '../components/public/Home'
import { Registro } from '../components/public/Registro'
import { Admin } from '../components/admin/Admin'
import { Programa } from '../components/public/Programa'

export const AppRouter = () => {

    return (
        <Router>
            <Routes>
                <Route path='/' element={<DashboardRoutes />}>
                    <Route index element={<Home />} />
                    <Route path='register' element={<Registro />} />
                    <Route path='admin' element={<Admin />} />

                    <Route path="*" element={<Navigate to="/" />} />
                </Route>
            </Routes>
        </Router>
    )
}
