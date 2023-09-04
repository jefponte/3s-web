import { Box, ThemeProvider, Typography, createTheme } from "@mui/material"
import { Header } from "./components/Header";
import Layout from "./components/Layout";
import { appTheme } from "./config/theme";
import { Routes, Route, Link } from "react-router-dom";
import { EventList } from "./features/events/EventList";
import { EventSelect } from "./features/events/EventSelect";
import { Footer } from "./components/Footer";


function App() {
  return (
    <ThemeProvider theme={appTheme}>
      <Box
        component="main"
        sx={{
          height: "100vh"
        }}
      >

        <Header />
        <Layout>
          <Routes>
            <Route path="/" element={<EventList />} />
            <Route path="/events" element={<EventList />} />
            <Route path="/events/:id" element={<EventSelect />} />
            <Route path="*" element={
              <Box sx={{ color: "white" }}>
                <Typography variant="h1">404</Typography>
                <Typography variant="h2">Página não encontrada</Typography>
              </Box>} />
          </Routes>
        </Layout>
        <Footer/>
      </Box>

    </ThemeProvider>
  )
}

export default App
