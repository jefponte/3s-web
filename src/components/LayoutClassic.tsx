import styled from '@emotion/styled';
import { CssBaseline, ThemeProvider } from "@mui/material";
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect } from 'react';
import { useSelector } from "react-redux";
import "../3s-style.css";
import HeaderClassic from '../components/HeaderClassic';
import NavBar from '../components/NavBar';
import { selectIsAuthenticated } from "../features/auth/authSlice";
import { useAppTheme } from "../hooks/useAppTheme";
import CardFilter from './CardFilter';
import { FooterClassic } from './FooterClassic';
import { SnackbarProvider } from "notistack";
import { current } from '@reduxjs/toolkit';

const LayoutClassic = ({ children }: { children: React.ReactNode }) => {

    const [currentTheme, toggleCurrentTheme] = useAppTheme();
    const isAuthenticated = useSelector(selectIsAuthenticated);

    const ImageLogo = styled.img({
        width: "300px",
        padding: '10px'
    });

    return (
        <ThemeProvider theme={currentTheme}>
            <CssBaseline />
            <div data-bs-theme={currentTheme.palette.mode}>
                <div className="container">
                    <HeaderClassic isDark={currentTheme.palette.mode === "dark"} />
                    {isAuthenticated ? <NavBar toggle={toggleCurrentTheme}
                        isDark={currentTheme.palette.mode === "dark"}
                    /> : <></>}
                    <SnackbarProvider
                        autoHideDuration={2000}
                        maxSnack={3}
                        anchorOrigin={{ vertical: "top", horizontal: "right" }}
                    >
                        <main className="container card p-5">
                            <div className="row g-5">
                                <div className="col-md-12">
                                    {children}
                                </div>
                            </div>

                        </main>
                    </SnackbarProvider>
                </div>

                <FooterClassic />

            </div>
        </ThemeProvider>
    )
}

export { LayoutClassic };
