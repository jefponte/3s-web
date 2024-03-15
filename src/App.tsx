import { Box } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { Login } from "./features/auth/Login";
import { DivisionCreate } from "./features/divisions/DivisionCreate";
import { DivisionEdit } from "./features/divisions/DivisionEdit";
import { DivisionList } from "./features/divisions/DivisionList";
import { OrderCreate } from "./features/orders/OrderCreate";
import { OrderList } from "./features/orders/OrderList";
import { ServiceCreate } from "./features/services/ServiceCreate";
import { ServiceEdit } from "./features/services/ServiceEdit";
import { ServiceList } from "./features/services/ServiceList";
import { UserEdit } from "./features/users/UserEdit";
import { UserList } from "./features/users/UserList";
import { AuthProfile } from "./features/auth/AuthProfile";
import { NotFoundCard } from "./components/NotFoundCard";
import { NotificationList } from "./features/notifications/NotificationList";
import { OrderSelect } from "./features/orders/OrderSelect";
import { Kamban } from "./features/orders/components/Kamban";



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
          <Route path="/" element={<ProtectedRoute><OrderList /></ProtectedRoute>} />

          <Route path="/orders" element={<ProtectedRoute><OrderList /></ProtectedRoute>} />
          <Route path="/orders/:id" element={<ProtectedRoute><OrderSelect /></ProtectedRoute>} />
          <Route path="/orders/create" element={<ProtectedRoute><OrderCreate /></ProtectedRoute>} />


          <Route path="/services" element={<ProtectedRoute><ServiceList /></ProtectedRoute>} />
          <Route path="/services/edit/:id" element={<ProtectedRoute><ServiceEdit /></ProtectedRoute>} />
          <Route path="/services/create" element={<ProtectedRoute><ServiceCreate /></ProtectedRoute>} />

          <Route path="/divisions" element={<ProtectedRoute><DivisionList /></ProtectedRoute>} />
          <Route path="/divisions/edit/:id" element={<ProtectedRoute><DivisionEdit /></ProtectedRoute>} />
          <Route path="/divisions/create" element={<ProtectedRoute><DivisionCreate /></ProtectedRoute>} />


          <Route path="/users" element={<ProtectedRoute><UserList /></ProtectedRoute>} />
          <Route path="/users/edit/:id" element={<ProtectedRoute><UserEdit /></ProtectedRoute>} />
          <Route path="/profile" element={<ProtectedRoute><AuthProfile /></ProtectedRoute>} />

          <Route path="/notifications" element={<ProtectedRoute><NotificationList /></ProtectedRoute>} />



          <Route path="/login" element={<Login />} />

          <Route path="*" element={<NotFoundCard/>} />
        </Routes>
      </Layout>

    </Box>

  )
}

export default App;
