import { Box, Paper, Typography } from "@mui/material";
import { useSnackbar } from "notistack";
import { useEffect, useState } from "react";
import { Service } from "../../types/Service";
import { useCreateServiceMutation } from "./serviceSlice";
import { ServiceForm } from "./components/ServiceForm";

export const ServiceCreate = () => {
  const { enqueueSnackbar } = useSnackbar();
  const [createService, status] = useCreateServiceMutation();
  const [isdisabled, setIsdisabled] = useState(false);
  const [serviceState, setServiceState] = useState<Service>({} as Service);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    await createService(serviceState);
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setServiceState({ ...serviceState, [name]: value });
  };

  const handleToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setServiceState({ ...serviceState, [name]: checked });
  };

  useEffect(() => {
    if (status.isSuccess) {
      enqueueSnackbar("Service created successfully", { variant: "success" });
      setIsdisabled(true);
    }
    if (status.error) {
      enqueueSnackbar("Service not created", { variant: "error" });
    }
  }, [enqueueSnackbar, status.error, status.isSuccess]);

  return (
    <Box maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
      <Paper>
        <Box p={2}>
          <Box mb={2}>
            <Typography variant="h4">Create Service</Typography>
          </Box>
        </Box>
        <ServiceForm
          isLoading={false}
          isdisabled={isdisabled}
          service={serviceState}
          handleSubmit={handleSubmit}
          handleChange={handleChange}
        />
      </Paper>
    </Box>
  );
};