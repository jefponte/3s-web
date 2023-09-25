import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import {
  useDeleteDivisionMutation,
  useGetDivisionsQuery,
} from "./divisionSlice";

import { GridFilterModel } from "@mui/x-data-grid";
import { useSnackbar } from "notistack";
import { useEffect, useState } from "react";
import { DivisionTable } from "./components/DivisionTable";

export const DivisionList = () => {
  const { enqueueSnackbar } = useSnackbar();
  const [options, setOptions] = useState({
    page: 1,
    search: "",
    perPage: 10,
    rowsPerPage: [10, 20, 30],
  });
  const { data, isFetching, error } = useGetDivisionsQuery(options);
  const [deleteDivision, { error: deleteError, isSuccess: deleteSuccess }] =
  useDeleteDivisionMutation();

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

  async function handleDeleteDivision(id: string) {
    await deleteDivision({ id });
  }

  useEffect(() => {
    if (deleteSuccess) {
      enqueueSnackbar(`Division deleted`, { variant: "success" });
    }
    if (deleteError) {
      enqueueSnackbar(`Division not deleted`, { variant: "error" });
    }
  }, [deleteSuccess, deleteError, enqueueSnackbar]);

  if (error) {
    return <Typography>Error fetching divisions</Typography>;
  }

  return (
    <Box maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
      <Box display="flex" justifyContent="flex-end">
        <Button
          variant="contained"
          component={Link}
          to="/divisions/create"
          style={{ marginBottom: "1rem" }}
        >
          Adicionar Serviço
        </Button>
      </Box>
      <DivisionTable
        data={data}
        isFetching={isFetching}
        perPage={options.perPage}
        rowsPerPage={options.rowsPerPage}
        handleDelete={handleDeleteDivision}
        handleOnPageChange={handleOnPageChange}
        handleOnPageSizeChange={handleOnPageSizeChange}
        handleFilterChange={handleFilterChange}
      />
    </Box>
  );
};