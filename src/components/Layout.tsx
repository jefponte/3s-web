import { Box, Card, Container } from '@mui/material'
import React from 'react'
import { PanelTitle } from './PanelTitle'

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <Box>
            <Container
                maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
                <PanelTitle />

                {children}

            </Container>
        </Box>
    )
}
