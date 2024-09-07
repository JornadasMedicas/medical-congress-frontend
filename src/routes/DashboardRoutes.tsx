import React from 'react'
import { Navbar } from '../components/ui/Navbar'
import { Outlet } from 'react-router-dom'
import { Footer } from '../components/ui/Footer'
import { Stack } from '@mui/material'

export const DashboardRoutes = () => {
    return (
        <Stack>
            <Navbar />
            <main>
                <Outlet />
            </main>
            {/* <Footer /> */}
        </Stack>
    )
}
