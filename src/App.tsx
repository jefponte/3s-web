import { Box, ThemeProvider, Typography, createTheme } from "@mui/material"
import {Layout} from "./components/Layout";
import { lightTheme, darkTheme } from "./config/theme";
import { Routes, Route, Link } from "react-router-dom";
import { ServiceList } from "./features/services/ServiceList";
import { ServiceEdit } from "./features/services/ServiceEdit";
import { ServiceCreate } from "./features/services/ServiceCreate";
import { SnackbarProvider } from "notistack";
import { DivisionList } from "./features/divisions/DivisionList";
import { DivisionEdit } from "./features/divisions/DivisionEdit";
import { DivisionCreate } from "./features/divisions/DivisionCreate";
import { UserList } from "./features/users/UserList";
import { UserEdit } from "./features/users/UserEdit";
import { UserCreate } from "./features/users/UserCreate";
import { OrderList } from "./features/orders/OrderList";
import { OrderEdit } from "./features/orders/OrderEdit";
import { OrderCreate } from "./features/orders/OrderCreate";



function App() {
  return (
        <Box
          component="main"
          sx={{
            height: "100vh"
          }}
        >


          <Layout>
            <Routes>
              <Route path="/" element={<ServiceList />} />
              <Route path="/services" element={<ServiceList />} />
              <Route path="/services/edit/:id" element={<ServiceEdit />} />
              <Route path="/services/create" element={<ServiceCreate />} />

              <Route path="/divisions" element={<DivisionList />} />
              <Route path="/divisions/edit/:id" element={<DivisionEdit />} />
              <Route path="/divisions/create" element={<DivisionCreate />} />


              <Route path="/users" element={<UserList />} />
              <Route path="/users/edit/:id" element={<UserEdit />} />
              <Route path="/users/create" element={<UserCreate />} />

              <Route path="/orders" element={<OrderList />} />
              <Route path="/orders/edit/:id" element={<OrderEdit />} />
              <Route path="/orders/create" element={<OrderCreate />} />


              <Route path="*" element={
                <Box>
                  <Typography variant="h1">404</Typography>
                  <Typography variant="h2">Página não encontrada</Typography>
                </Box>} />
            </Routes>
          </Layout>

        </Box>

  )
}

export default App
