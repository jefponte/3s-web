import {
  Button,
  FormControl,
  FormLabel,
  Grid,
  RadioGroup,
  TextField,
} from "@mui/material";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";
// import { AutoCompleteFields } from "../../../components/AutoCompleteFields";
// import { InputFile } from "../../../components/InputFile";
// import { RatingsList } from "../../../components/RatingsList";
// import { CastMember } from "../../../types/CastMembers";
// import { Category } from "../../../types/Category";
// import { Genre } from "../../../types/Genres";
import { Order } from "../../../types/Order";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

type Props = {
  order: Order;
  // genres?: Genre[];
  // categories?: Category[];
  // castMembers?: CastMember[];
  isDisabled?: boolean;
  isLoading?: boolean;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export function OrderForm({
  order,
  // genres,
  // categories,
  // castMembers,
  isDisabled = false,
  isLoading = false,
  handleSubmit,
  handleChange
}: Props) {


  const editorStyle = {
    height: '200px',
  };

  return (
    <Box p={2}>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6} sx={{ "& .MuiTextField-root": { my: 2 } }}>
            <FormControl fullWidth>
              <TextField
                name="title"
                label="Serviço"
                value={order.description}
                disabled={isDisabled}
                onChange={handleChange}
                inputProps={{ "data-testid": "title" }}
              />
            </FormControl>
            <Grid item xs={12}>
            <FormControl fullWidth>
              <ReactQuill
                theme="snow"
                value={""}
                onChange={(props) => {
                  // handleChange({ name: "description", value: props });

                }}
                style={editorStyle}
              />

            </FormControl>
          </Grid>



            <Grid item xs={12}>

              {/* <AutoCompleteFields
                name="cast_members"
                label="Cast Members"
                isLoading={isLoading}
                isDisabled={isDisabled}
                values={order.description}
                options={castMembers}
                handleChange={handleChange}
              /> */}
            </Grid>

            <Grid item xs={12}>
              <Grid
                container
                alignContent={"center"}
                justifyContent={"space-between"}
                spacing={2}
              >
                <Grid item xs={5}>
                  {/* <AutoCompleteFields
                    name="genres"
                    label="Genres"
                    isLoading={isLoading}
                    isDisabled={isDisabled}
                    values={order.genres}
                    options={genres}
                    handleChange={handleChange}
                  /> */}
                </Grid>

                <Grid item xs={5}>
                  {/* <AutoCompleteFields
                    name="categories"
                    label="Categories"
                    isLoading={isLoading}
                    isDisabled={false}
                    values={order.categories}
                    options={categories}
                    handleChange={handleChange}
                  /> */}
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={6} sx={{ "& .MuiTextField-root": { my: 2 } }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <TextField
                    name="year_launched"
                    label="Campus"
                    disabled={isDisabled}
                    onChange={handleChange}
                    value={order.description}
                    inputProps={{ "data-testid": "year_launched" }}
                  />
                </FormControl>
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <FormControl fullWidth>
                  <TextField
                    name="year_launched"
                    label="Local/Sala"
                    disabled={isDisabled}
                    onChange={handleChange}
                    value={order.description}
                    inputProps={{ "data-testid": "year_launched" }}
                  />
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <FormControl fullWidth>
                  <TextField
                    name="duration"
                    label="Patrimônio"
                    disabled={false}
                    value={order.description}
                    onChange={handleChange}
                    inputProps={{ "data-testid": "duration" }}
                  />
                </FormControl>
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <FormControl fullWidth>
                  <TextField
                    name="year_launched"
                    label="Ramal"
                    disabled={isDisabled}
                    onChange={handleChange}
                    value={order.description}
                    inputProps={{ "data-testid": "year_launched" }}
                  />
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <FormControl fullWidth>
                  <TextField
                    name="duration"
                    label="E-mail"
                    disabled={false}
                    value={order.description}
                    onChange={handleChange}
                    inputProps={{ "data-testid": "duration" }}
                  />
                </FormControl>
              </Grid>
            </Grid>
            <FormControl fullWidth>
              <Box mt={2} mb={2}>
                <FormLabel component="legend">Rating</FormLabel>
              </Box>
              <RadioGroup
                row
                name="rating"
                value={order.rating}
                onChange={handleChange}
              >
                {/* <RatingsList isDisabled={isDisabled} /> */}
              </RadioGroup>
            </FormControl>

            <FormControl fullWidth>
              {/* <InputFile
                onAdd={handleAddThumbnail}
                onRemove={handleRemoveThumbnail}
                placeholder="Thumbnail"
                data-testid="thumbnail-input"
              /> */}
              {/* <InputFile
                onAdd={handleAddBanner}
                onRemove={handleRemoveBanner}
                placeholder="Banner"
                data-testid="banner-input"
              /> */}
            </FormControl>

            <FormControl fullWidth>
              {/* <InputFile
                onAdd={handleAddOrder}
                onRemove={handleRemoveOrder}
                placeholder="Order"
                data-testid="order-input"
              /> */}
              {/* <InputFile
                onAdd={handleAddTrailer}
                onRemove={handleRemoveTrailer}
                placeholder="Trailer"
                data-testid="trailer-input"
              /> */}
            </FormControl>
          </Grid>
        </Grid>

        <Box display="flex" sx={{ my: 2 }} gap={2}>
          <Button variant="contained" component={Link} to="/orders">
            Back
          </Button>

          <Button
            type="submit"
            color="secondary"
            variant="contained"
            disabled={isDisabled || isLoading}
          >
            {isLoading ? "Loading..." : "Save"}
          </Button>
        </Box>
      </form>
    </Box>
  );
}
