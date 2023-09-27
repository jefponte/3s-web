import { Box, Grid, IconButton, Paper, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import {
  useGetOrdersQuery,
} from "./orderSlice";

import AddIcon from '@mui/icons-material/Add';
import DirectionsIcon from '@mui/icons-material/Directions';
import MenuIcon from '@mui/icons-material/Menu';
import OpenInFullIcon from '@mui/icons-material/OpenInFull';
import SearchIcon from '@mui/icons-material/Search';
import Divider from '@mui/material/Divider';
import InputBase from '@mui/material/InputBase';
import { GridFilterModel } from "@mui/x-data-grid";
import * as React from 'react';
import { useState } from "react";
import { Kamban } from "./components/Kamban";
import { MenuChangeView } from "./components/MenuChangeView";
import { OrderTable } from "./components/OrderTable";
import { QuiltOrderView } from "./components/QuiltOrderView";
import { TableOpenedOrders } from "./components/TableOpenedOrders";

export const OrderList = () => {
  const [view, setView] = useState<string>('list');

  const handleChange = (event: React.MouseEvent<HTMLElement>, nextView: string) => {
    setView(nextView);
  };

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
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setTimeout(() => {
      setOptions({ ...options, search: value });
    }, 500);
  };

  if (error) {
    return <Typography>Error fetching orders</Typography>;
  }


  return (
    <Box sx={{ mb: 4 }}>
      <Grid container spacing={3}>
        <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
          <Box sx={{ justifyContent: 'flex-start', mb: 4, display: 'flex' }}>
            <Paper
              component="form"
              sx={{ p: '2px 4px', display: 'flex', alignItems: 'center' }}
            >
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Pesquisar"
                onChange={handleSearchChange}
                inputProps={{ 'aria-label': 'pesquisar' }}
              />
              <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                <SearchIcon />
              </IconButton>
            </Paper>
          </Box>
        </Grid>
        <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
          <Box sx={{ justifyContent: 'flex-end', mb: 4, display: 'flex' }}>
            {/*<IconButton
              component={Link}
              to="/orders/create"
              aria-label="delete" size="large" sx={{ mb: 1, mr: 2 }}>
              <AddIcon fontSize="inherit" />
            </IconButton>
             <IconButton aria-label="delete" size="large" sx={{ mb: 1, mr: 2 }}>
              <OpenInFullIcon fontSize="inherit" />
            </IconButton> */}
            <MenuChangeView view={view} handleChange={handleChange} />
          </Box>
        </Grid>
      </Grid>

      {view === 'kamban' ? (<Kamban data={data} />) : (<OrderTable
        data={data}
        isFetching={isFetching}
        perPage={options.perPage}
        rowsPerPage={options.rowsPerPage}
        handleOnPageChange={handleOnPageChange}
        handleOnPageSizeChange={handleOnPageSizeChange}
        handleFilterChange={handleFilterChange}
      />)}

    </Box>
  );
};