import { Box, Paper, Typography } from "@mui/material";
import { useSnackbar } from "notistack";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Order } from "../../types/Order";
import { OrderForm } from "./components/OrderForm";
import {
  useGetOrderQuery,
  useUpdateOrderMutation,
} from "./orderSlice";

export const OrderEdit = () => {
  const id = useParams().id as string;
  const { data: order, isFetching } = useGetOrderQuery({ id });
  const [isdisabled, setIsdisabled] = useState(false);
  const [updateOrder, status] = useUpdateOrderMutation();
  const [orderState, setOrderState] = useState<Order>({} as Order);

  const { enqueueSnackbar } = useSnackbar();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    await updateOrder(orderState);
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setOrderState({ ...orderState, [name]: value });
  };


  useEffect(() => {
    if (order) {
      console.log(order);
      setOrderState(order.data);
    }
  }, [order]);

  useEffect(() => {
    if (status.isSuccess) {
      enqueueSnackbar("Order updated successfully", { variant: "success" });
      setIsdisabled(false);
    }
    if (status.error) {
      enqueueSnackbar("Order not updated", { variant: "error" });
    }
  }, [enqueueSnackbar, status.error, status.isSuccess]);

  return (
    <Box>
      <Paper>
        <Box p={2}>
          <Box mb={2}>
            <Typography variant="h4">Edit Order</Typography>
          </Box>
        </Box>
        <OrderForm
          isLoading={false}
          order={orderState}
          isdisabled={isFetching || isdisabled}
          handleSubmit={handleSubmit}
          handleChange={handleChange}
        />
      </Paper>
    </Box>
  );
};