import { Box, Typography, Paper, FormControl, Grid } from '@mui/material'
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { Service, selectServiceById, updateService } from './serviceSlice';
import { ServiceForm } from './components/ServiceForm';

export default function ServiceEdit() {

  const id = useParams().id || "";
  const service = useAppSelector((state) => selectServiceById(state, id));
  const [serviceState, setServiceState] = useState<Service>(service);

  const dispatch = useAppDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setServiceState({ ...service, [name]: value });
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    dispatch(updateService(serviceState));
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
