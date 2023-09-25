import { Box, Paper, Typography } from "@mui/material";
import { useSnackbar } from "notistack";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  useGetServiceQuery,
  useUpdateServiceMutation,
} from "./serviceSlice";
import { Service } from "../../types/Service";
import { ServiceForm } from "./components/ServiceForm";

export const ServiceEdit = () => {
  const id = useParams().id as string;
  const { data: service, isFetching } = useGetServiceQuery({ id });
  const [isdisabled, setIsdisabled] = useState(false);
  const [updateService, status] = useUpdateServiceMutation();
  const [serviceState, setServiceState] = useState<Service>({} as Service);

  const { enqueueSnackbar } = useSnackbar();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    await updateService(serviceState);
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setServiceState({ ...serviceState, [name]: value });
  };


  useEffect(() => {
    if (service) {
      setServiceState(service.data);
    }
  }, [service]);

  useEffect(() => {
    if (status.isSuccess) {
      enqueueSnackbar("Service updated successfully", { variant: "success" });
      setIsdisabled(false);
    }
    if (status.error) {
      enqueueSnackbar("Service not updated", { variant: "error" });
    }
  }, [enqueueSnackbar, status.error, status.isSuccess]);

  return (
    <Box maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
      <Paper>
        <Box p={2}>
          <Box mb={2}>
            <Typography variant="h4">Edit Service</Typography>
          </Box>
        </Box>
        <ServiceForm
          isLoading={false}
          service={serviceState}
          isdisabled={isFetching || isdisabled}
          handleSubmit={handleSubmit}
          handleChange={handleChange}
        />
      </Paper>
    </Box>
  );
};