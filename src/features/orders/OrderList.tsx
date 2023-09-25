import { Box, Button, IconButton, Paper, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import {
  useGetOrdersQuery,
} from "./orderSlice";

import { GridFilterModel } from "@mui/x-data-grid";
import { useState } from "react";
import { OrderTable } from "./components/OrderTable";
import { Kamban } from "./components/Kamban";
import { MenuChangeView } from "./components/MenuChangeView";
import OpenInFullIcon from '@mui/icons-material/OpenInFull';
import AddIcon from '@mui/icons-material/Add';
import { QuiltOrderView } from "./components/QuiltOrderView";

export const OrderList = () => {
  const [view, setView] = useState<string>('quilt');

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


  if (error) {
    return <Typography>Error fetching orders</Typography>;
  }

  const ShowLayout = ({ layout }: { layout: string }) => {
    switch (layout) {
      case 'kamban':
        return (<Kamban />);
      case 'quilt':
        return (<QuiltOrderView />);
      default:
        return (<OrderTable
          data={data}
          isFetching={isFetching}
          perPage={options.perPage}
          rowsPerPage={options.rowsPerPage}
          handleOnPageChange={handleOnPageChange}
          handleOnPageSizeChange={handleOnPageSizeChange}
          handleFilterChange={handleFilterChange}
        />);
    }
  }
  return (
    <Box>
      <Box sx={{ justifyContent: 'flex-end', mb: 4, backgroundColor: "FF0000", display: 'flex' }}>
        <Box>
          <IconButton
            component={Link}
            to="/orders/create"
            aria-label="delete" size="large" sx={{ mb: 1, mr: 2 }}>
            <AddIcon fontSize="inherit" />
          </IconButton>
          <IconButton aria-label="delete" size="large" sx={{ mb: 1, mr: 2 }}>
            <OpenInFullIcon fontSize="inherit" />
          </IconButton>
          <MenuChangeView view={view} handleChange={handleChange} />
        </Box>
      </Box>
      <ShowLayout layout={view} />
    </Box>
  );
};