import { Box, Paper, Typography } from "@mui/material";
import { useSnackbar } from "notistack";
import { useEffect, useState } from "react";
import { Division } from "../../types/Division";
import { useCreateDivisionMutation } from "./divisionSlice";
import { DivisionForm } from "./components/DivisionForm";

export const DivisionCreate = () => {
  const { enqueueSnackbar } = useSnackbar();
  const [createDivision, status] = useCreateDivisionMutation();
  const [isdisabled, setIsdisabled] = useState(false);
  const [divisionState, setDivisionState] = useState<Division>({} as Division);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    await createDivision(divisionState);
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setDivisionState({ ...divisionState, [name]: value });
  };

  const handleToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setDivisionState({ ...divisionState, [name]: checked });
  };

  useEffect(() => {
    if (status.isSuccess) {
      enqueueSnackbar("Division created successfully", { variant: "success" });
      setIsdisabled(true);
    }
    if (status.error) {
      enqueueSnackbar("Division not created", { variant: "error" });
    }
  }, [enqueueSnackbar, status.error, status.isSuccess]);

  return (
    <Box sx={{ mt: 4, mb: 4 }}>
      <Paper>
        <Box p={2}>
          <Box mb={2}>
            <Typography variant="h4">Create Division</Typography>
          </Box>
        </Box>
        <DivisionForm
          isLoading={false}
          isdisabled={isdisabled}
          division={divisionState}
          handleSubmit={handleSubmit}
          handleChange={handleChange}
        />
      </Paper>
    </Box>
  );
};