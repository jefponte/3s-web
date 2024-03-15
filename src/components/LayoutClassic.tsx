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
                                <div className="col-md-8">
                                    {children}
                                </div>
                                <div className="col-md-4">
                                    <div className="position-sticky">

                                        {isAuthenticated ? <CardFilter /> : <></>}
                                        <div className="p-4 mb-3 bg-body-tertiary rounded">
                                            <h4 className="fst-italic">3s em novas tecnologias</h4>
                                            <p className="mb-0">Esta versão do 3s foi reconstruída utilizando o React e o Typescript. Além de estar na esteira de software com deploys automatizado e diversas técnicas e práticas mais recentes do mercado.</p>
                                        </div>

                                    </div>
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
