import { Box, ThemeProvider, Typography, createTheme } from "@mui/material"
import { Header } from "./components/Header";
import Layout from "./components/Layout";
import { appTheme } from "./config/theme";
import { Routes, Route, Link } from "react-router-dom";
import { Footer } from "./components/Footer";
import { ServiceList } from "./features/services/ServiceList";
import { ServiceEdit } from "./features/services/ServiceEdit";
import { ServiceCreate } from "./features/services/ServiceCreate";
import { SnackbarProvider } from "notistack";
import { DivisionList } from "./features/divisions/DivisionList";
import { DivisionEdit } from "./features/divisions/DivisionEdit";
import { DivisionCreate } from "./features/divisions/DivisionCreate";



function App() {
  return (
    <ThemeProvider theme={appTheme}>
      <SnackbarProvider
        maxSnack={3}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right"
        }}
      >
        <Box
          component="main"
          sx={{
            height: "100vh"
          }}
        >

          <Header />
          <Layout>
            <Routes>
              <Route path="/" element={<ServiceList />} />
              <Route path="/services" element={<ServiceList />} />
              <Route path="/services/edit/:id" element={<ServiceEdit />} />
              <Route path="/services/create" element={<ServiceCreate />} />

              <Route path="/divisions" element={<DivisionList />} />
              <Route path="/divisions/edit/:id" element={<DivisionEdit />} />
              <Route path="/divisions/create" element={<DivisionCreate />} />


              <Route path="/users" element={<ServiceList />} />
              <Route path="/users/edit/:id" element={<ServiceEdit />} />
              <Route path="/users/create" element={<ServiceCreate />} />

              <Route path="*" element={
                <Box>
                  <Typography variant="h1">404</Typography>
                  <Typography variant="h2">Página não encontrada</Typography>
                </Box>} />
            </Routes>
          </Layout>
          <Footer />
        </Box>
      </SnackbarProvider>
    </ThemeProvider>
  )
}

export default App
