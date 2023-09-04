import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import { useAppSelector } from '../../app/hooks'
import { selectServices } from './serviceSlice';
import { Link } from 'react-router-dom';


export default function ServiceList() {

  const services = useAppSelector(selectServices);

  return (
    <Box maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Box display="flex" justifyContent="flex-end">
        <Button
          variant="contained"
          color="secondary"
          component={Link}
          to="/services/create"
          style={{ marginBottom: "1rem" }}
        >
          Novo Serviço
        </Button>
      </Box>
      <Typography variant="h3" component="h1">
        Service Lis AAA
      </Typography>
    </Box>
  )
}
