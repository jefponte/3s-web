import { Box, Paper, Typography } from "@mui/material";
import { useSnackbar } from "notistack";
import { useEffect, useState } from "react";
import { Order } from "../../types/Order";
import { OrderForm } from "./components/OrderForm";
import { useCreateOrderMutation } from "./orderSlice";

export const OrderCreate = () => {
  const { enqueueSnackbar } = useSnackbar();
  const [createOrder, status] = useCreateOrderMutation();
  const [isdisabled, setIsdisabled] = useState(false);
  const [orderState, setOrderState] = useState<Order>({} as Order);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    await createOrder(orderState);
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setOrderState({ ...orderState, [name]: value });
  };

  const handleToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setOrderState({ ...orderState, [name]: checked });
  };

  useEffect(() => {
    if (status.isSuccess) {
      enqueueSnackbar("Order created successfully", { variant: "success" });
      setIsdisabled(true);
    }
    if (status.error) {
      enqueueSnackbar("Order not created", { variant: "error" });
    }
  }, [enqueueSnackbar, status.error, status.isSuccess]);

  return (
    <Box sx={{ mt: 4, mb: 4 }}>
      <Paper>
        <Box p={2}>
          <Box mb={2}>
            <Typography variant="h4">Create Order</Typography>
          </Box>
        </Box>
        <OrderForm
          isLoading={false}
          isdisabled={isdisabled}
          order={orderState}
          handleSubmit={handleSubmit}
          handleChange={handleChange}
        />
      </Paper>
    </Box>
  );
};