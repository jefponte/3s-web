import { Box, Typography, Paper, FormControl, Grid } from '@mui/material'
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { Service, createService, selectServiceById, updateService } from './serviceSlice';
import { ServiceForm } from './components/ServiceForm';

export default function ServiceCreate() {

  const [serviceState, setServiceState] = useState<Service>({} as Service);
  const dispatch = useAppDispatch();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setServiceState({ ...serviceState, [name]: value });
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const randomNumber = Math.random() * 0x100000000;
    const uniqueId = randomNumber.toString(16);
    dispatch(createService({...serviceState, id: uniqueId}));
  }
  return (
    <Box>
      <Paper>
        <Box p={2}>
          <Box mb={2}>
            <Typography variant="h4">Editar Serviço</Typography>
          </Box>
        </Box>
        <Box p={2}>
          <ServiceForm
            service={serviceState}
            isLoading={false}
            handleSubmit={handleSubmit}
            handleChange={handleChange}
          />
        </Box>
      </Paper>

    </Box>
  )
}
