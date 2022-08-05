import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import PublicRoute from "./PubicRoute";
import ProtectedRoute from "./ProtectedRoute";
import MainLayout from "./MainLayout";
import InnerContent from "./InnerContent";
import SignupPage from "../Component/LoginComponent/SignupPage";
const MainRoutes = () => (
  <Routes>
    <Route path="/" element={<ProtectedRoute />}>
      <Route path="/" element={<InnerContent />}>
        <Route path="/" element={<Navigate replace to="dashboard" />} />
        <Route path="*" element={<MainLayout />} />
      </Route>
    </Route>
    <Route path="/" element={<PublicRoute />}>
      <Route path="/login" element={<SignupPage/>} />
    </Route>
  </Routes>
);
export default MainRoutes;
