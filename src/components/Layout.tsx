import { AppBar, Box, CssBaseline, ThemeProvider } from "@mui/material";
import { Container } from "@mui/system";
import { SnackbarProvider } from "notistack";
import React, { useState } from "react";
import { useAppTheme } from "../hooks/useAppTheme";
import { Header } from "./Header";
import ResponsiveDrawer from "./ResponsiveDrawer";
import { Footer } from "./Footer";

const drawerWidth = 240;

export function Layout({ children }: { children: React.ReactNode }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [currentTheme, toggleCurrentTheme] = useAppTheme();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <ThemeProvider theme={currentTheme}>
      <CssBaseline />
      <Box sx={{ display: "flex" }}>
        <AppBar
          position="fixed"
          sx={{
            mt: 5,
            zIndex: 2,
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            ml: { sm: `${drawerWidth}px` },
          }}
        >
          <Header
            handleDrawerToggle={handleDrawerToggle}
            toggle={toggleCurrentTheme}
            theme={currentTheme.palette.mode === "dark" ? "dark" : "light"}
          />
        </AppBar>

        <ResponsiveDrawer isDark={currentTheme.palette.mode === "dark" } open={mobileOpen} onClose={handleDrawerToggle} />

        <SnackbarProvider
          autoHideDuration={2000}
          maxSnack={3}
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
        >
          <Container maxWidth="lg" sx={{ color: "white", mt: 25, mb: 2 }}>
            {children}
          </Container>
        </SnackbarProvider>
      </Box>
      <Footer/>
    </ThemeProvider>
  );
}