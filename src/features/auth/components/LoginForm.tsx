import {
    Alert,
    Box,
    Button,
    FormControl,
    Grid,
    TextField
} from "@mui/material";
import { useState } from 'react';
import { Credentials, useLoginMutation, useSendLogOutMutation } from '../authApiSlice';

import { Link } from "react-router-dom";


type Props = {
    credentials: Credentials;
    isdisabled?: boolean;
    isLoading?: boolean;
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};


export const LoginForm = ({
    credentials,
    isdisabled = false,
    isLoading = false,
    handleSubmit,
    handleChange
}: Props) => {



    const [errorLogin, setErrorLogin] = useState({ valid: true, text: "" });
    const [errorPassword, setErrorPassowrd] = useState({ valid: true, text: "" });

    function validateLogin() {
        if (credentials.login.length > 1) {
            setErrorLogin({ valid: true, text: "" });
        } else {
            setErrorLogin({ valid: false, text: "Digite no mínimo 1 caractere" });
        }
    }

    function validatePassword() {
        if (credentials.password.length > 3) {
            setErrorPassowrd({ valid: true, text: "" });
        } else {
            setErrorPassowrd({ valid: false, text: "Digite no mínimo 3 caracteres" });
        }
    }

    return (
        <Box p={2}>
            <form
                onSubmit={(event) => {
                    event.preventDefault();
                    handleSubmit(event);
                }}
            >

                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <FormControl fullWidth>
                            {errorLogin.valid ? (
                                ""
                            ) : (
                                <Alert severity="error">{errorLogin.text}</Alert>
                            )}
                            <TextField
                                required={true}
                                value={credentials.login}
                                onChange={handleChange}
                                name="login"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                error={!errorLogin.valid}
                                onBlur={validateLogin}
                                helperText={errorLogin.text}
                                label="Login do SIG"
                                variant="outlined"
                                margin="normal"
                                fullWidth
                            />
                        </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                        <FormControl fullWidth>
                            <TextField
                                required={true}
                                name="password"
                                value={credentials.password}
                                onChange={handleChange}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                error={!errorPassword.valid}
                                onBlur={validatePassword}
                                helperText={errorPassword.text}
                                label="Senha do SIG"
                                variant="outlined"
                                margin="normal"
                                type="password"
                                fullWidth
                                autoComplete="off"
                            />
                        </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                        <Box display="flex" gap={2}>
                            <Button
                                disabled={!(errorPassword.valid && errorLogin.valid && !isLoading)}
                                type="submit"
                                variant="contained"
                            >
                                {isLoading ? "Aguarde..." : "Logar"}
                            </Button>
                        </Box>
                    </Grid>
                </Grid>

            </form>
        </Box>
    )
}
