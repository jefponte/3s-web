import { Box, Typography } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { Login } from "./features/auth/Login";
import { DivisionCreate } from "./features/divisions/DivisionCreate";
import { DivisionEdit } from "./features/divisions/DivisionEdit";
import { DivisionList } from "./features/divisions/DivisionList";
import { OrderCreate } from "./features/orders/OrderCreate";
import { OrderEdit } from "./features/orders/OrderEdit";
import { OrderList } from "./features/orders/OrderList";
import { ServiceCreate } from "./features/services/ServiceCreate";
import { ServiceEdit } from "./features/services/ServiceEdit";
import { ServiceList } from "./features/services/ServiceList";
import { UserEdit } from "./features/users/UserEdit";
import { UserList } from "./features/users/UserList";
import { UserProfile } from "./features/users/UserProfile";



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
          <Route path="/profile" element={<ProtectedRoute><UserProfile /></ProtectedRoute>} />

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
