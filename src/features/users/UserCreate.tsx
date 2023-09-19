import { Box, Paper, Typography } from "@mui/material";
import { useSnackbar } from "notistack";
import { useEffect, useState } from "react";
import { User } from "../../types/User";
import { useCreateUserMutation } from "./userSlice";
import { UserForm } from "./components/UserForm";

export const UserCreate = () => {
  const { enqueueSnackbar } = useSnackbar();
  const [createUser, status] = useCreateUserMutation();
  const [isdisabled, setIsdisabled] = useState(false);
  const [userState, setUserState] = useState<User>({} as User);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    await createUser(userState);
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserState({ ...userState, [name]: value });
  };

  const handleToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setUserState({ ...userState, [name]: checked });
  };

  useEffect(() => {
    if (status.isSuccess) {
      enqueueSnackbar("User created successfully", { variant: "success" });
      setIsdisabled(true);
    }
    if (status.error) {
      enqueueSnackbar("User not created", { variant: "error" });
    }
  }, [enqueueSnackbar, status.error, status.isSuccess]);

  return (
    <Box>
      <Paper>
        <Box p={2}>
          <Box mb={2}>
            <Typography variant="h4">Create User</Typography>
          </Box>
        </Box>
        <UserForm
          isLoading={false}
          isdisabled={isdisabled}
          user={userState}
          handleSubmit={handleSubmit}
          handleChange={handleChange}
        />
      </Paper>
    </Box>
  );
};