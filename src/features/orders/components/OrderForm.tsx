import {
  Box,
  Button,
  FormControl,
  Grid,
  TextField,
} from "@mui/material";

  import { Link } from "react-router-dom";
import { Order } from "../../../types/Order";

  type Props = {
    order: Order;
    isdisabled?: boolean;
    isLoading?: boolean;
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  };

  export function OrderForm({
    order,
    isdisabled = false,
    isLoading = false,
    handleSubmit,
    handleChange
  }: Props) {
    return (
      <Box p={2}>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>


            <Grid item xs={12}>
              <FormControl fullWidth>
                <TextField
                  required
                  name="description"
                  label="Description"
                  inputProps={{ "data-testid": "description" }}
                  disabled={isdisabled}
                  onChange={handleChange}
                  value={order.description || ""}
                />
              </FormControl>
            </Grid>


            <Grid item xs={12}>
              <Box display="flex" gap={2}>
                <Button variant="contained" component={Link} to="/orders">
                  Back
                </Button>

                <Button
                  type="submit"
                  variant="contained"
                  color="secondary"
                  disabled={isdisabled || isLoading}
                >
                  {isLoading ? "Loading..." : "Save"}
                </Button>
              </Box>
            </Grid>
          </Grid>
        </form>
      </Box>
    );
  }