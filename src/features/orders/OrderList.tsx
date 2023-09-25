import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import {
  useGetOrdersQuery,
} from "./orderSlice";

import { GridFilterModel } from "@mui/x-data-grid";
import { useState } from "react";
import { OrderTable } from "./components/OrderTable";

export const OrderList = () => {
  const [options, setOptions] = useState({
    page: 1,
    search: "",
    perPage: 10,
    rowsPerPage: [10, 20, 30],
  });
  const { data, isFetching, error } = useGetOrdersQuery(options);


  function handleOnPageChange(page: number) {
    setOptions({ ...options, page: page + 1 });
  }

  function handleOnPageSizeChange(perPage: number) {
    setOptions({ ...options, perPage });
  }

  function handleFilterChange(filterModel: GridFilterModel) {
    if (!filterModel.quickFilterValues?.length) {
      return setOptions({ ...options, search: "" });
    }

    const search = filterModel.quickFilterValues.join("");
    setOptions({ ...options, search });
  }


  if (error) {
    return <Typography>Error fetching orders</Typography>;
  }

  return (
    <Box maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
      <Box display="flex" justifyContent="flex-end">
        <Button
          variant="contained"
          component={Link}
          to="/orders/create"
          style={{ marginBottom: "1rem" }}
        >
          Abrir Chamado
        </Button>
      </Box>
      <OrderTable
        data={data}
        isFetching={isFetching}
        perPage={options.perPage}
        rowsPerPage={options.rowsPerPage}
        handleOnPageChange={handleOnPageChange}
        handleOnPageSizeChange={handleOnPageSizeChange}
        handleFilterChange={handleFilterChange}
      />
    </Box>
  );
};