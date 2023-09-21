import { Box, ThemeProvider, Typography, createTheme } from "@mui/material"
import { Layout } from "./components/Layout";
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
import { Login } from "./features/auth/Login";
import { ProtectedRoute } from "./components/ProtectedRoute";



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
          <Route path="/" element={<ProtectedRoute><ServiceList /></ProtectedRoute>} />
          <Route path="/services" element={<ProtectedRoute><ServiceList /></ProtectedRoute>} />
          <Route path="/services/edit/:id" element={<ProtectedRoute><ServiceEdit /></ProtectedRoute>} />
          <Route path="/services/create" element={<ProtectedRoute><ServiceCreate /></ProtectedRoute>} />

          <Route path="/divisions" element={<ProtectedRoute><DivisionList /></ProtectedRoute>} />
          <Route path="/divisions/edit/:id" element={<ProtectedRoute><DivisionEdit /></ProtectedRoute>} />
          <Route path="/divisions/create" element={<ProtectedRoute><DivisionCreate /></ProtectedRoute>} />


          <Route path="/users" element={<ProtectedRoute><UserList /></ProtectedRoute>} />
          <Route path="/users/edit/:id" element={<ProtectedRoute><UserEdit /></ProtectedRoute>} />


          <Route path="/orders" element={<ProtectedRoute><OrderList /></ProtectedRoute>} />
          <Route path="/orders/edit/:id" element={<ProtectedRoute><OrderEdit /></ProtectedRoute>} />
          <Route path="/orders/create" element={<ProtectedRoute><OrderCreate /></ProtectedRoute>} />

          <Route path="/login" element={<Login />} />

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

export default App;
