import React from 'react'
import {
    Navigate,
    Route,
    BrowserRouter as Router, Routes,
} from "react-router-dom"
import { DashboardRoutes } from './DashboardRoutes'
import { Home } from '../components/Home'
import { About } from '../components/About'

export const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<DashboardRoutes />}>
                    <Route index element={<Home />} />
                    <Route path='about' element={<About />} />

                    <Route path="*" element={<Navigate to="/" />} />
                </Route>
            </Routes>
        </Router>
    )
}
