import { Box, ThemeProvider, Typography, createTheme } from "@mui/material"
import { Header } from "./components/Header";
import Layout from "./components/Layout";
import { appTheme } from "./config/theme";
import { Routes, Route, Link } from "react-router-dom";
import { Footer } from "./components/Footer";
import ServiceList from "./features/services/ServiceList";
import ServiceEdit from "./features/services/ServiceEdit";
import { SnackbarProvider } from "notistack";
import ServiceCreate from "./features/services/ServiceCreate";


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
