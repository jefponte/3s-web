import { Box, Paper, Typography } from "@mui/material";
import { useSnackbar } from "notistack";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  useGetDivisionQuery,
  useUpdateDivisionMutation,
} from "./divisionSlice";
import { Division } from "../../types/Division";
import { DivisionForm } from "./components/DivisionForm";

export const DivisionEdit = () => {
  const id = useParams().id as string;
  const { data: division, isFetching } = useGetDivisionQuery({ id });
  const [isdisabled, setIsdisabled] = useState(false);
  const [updateDivision, status] = useUpdateDivisionMutation();
  const [divisionState, setDivisionState] = useState<Division>({} as Division);

  const { enqueueSnackbar } = useSnackbar();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    await updateDivision(divisionState);
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setDivisionState({ ...divisionState, [name]: value });
  };


  useEffect(() => {
    if (division) {
      setDivisionState(division.data);
    }
  }, [division]);

  useEffect(() => {
    if (status.isSuccess) {
      enqueueSnackbar("Division updated successfully", { variant: "success" });
      setIsdisabled(false);
    }
    if (status.error) {
      enqueueSnackbar("Division not updated", { variant: "error" });
    }
  }, [enqueueSnackbar, status.error, status.isSuccess]);

  return (
    <Box sx={{ mt: 4, mb: 4 }}>
      <Paper>
        <Box p={2}>
          <Box mb={2}>
            <Typography variant="h4">Edit Division</Typography>
          </Box>
        </Box>
        <DivisionForm
          isLoading={false}
          division={divisionState}
          isdisabled={isFetching || isdisabled}
          handleSubmit={handleSubmit}
          handleChange={handleChange}
        />
      </Paper>
    </Box>
  );
};