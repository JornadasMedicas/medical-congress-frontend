import React from 'react'
import {
    Navigate,
    Route,
    HashRouter as Router, Routes,
    /* BrowserRouter as Router, Routes, */
} from "react-router-dom"
import { DashboardRoutes } from './DashboardRoutes'
import { Home } from '../components/Home'
import { Registro } from '../components/Registro'

export const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<DashboardRoutes />}>
                    <Route index element={<Home />} />
                    <Route path='register' element={<Registro />} />

                    <Route path="*" element={<Navigate to="/" />} />
                </Route>
            </Routes>
        </Router>
    )
}
