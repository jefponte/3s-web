import { Box, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Service } from './serviceSlice'

export default function ServiceCreate() {
  const [service, setService] = useState<Service>({} as Service);
  return (
    <Box>
      <Typography variant="h3" component="h1">
        Service Create
      </Typography>
    </Box>
  )
}
