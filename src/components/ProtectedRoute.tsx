import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectIsAuthenticated } from "../features/auth/authSlice";
import { selectAuthUser } from '../features/auth/authSlice';
import { useAppSelector } from '../app/hooks';

export const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const userAuth = useAppSelector(selectAuthUser);
  const isAuthenticated = useSelector(selectIsAuthenticated);

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }
  if(userAuth.role != 'administrator') {
    return <Navigate to="/forbidden" />;
  }
  return <>{children}</>;
};