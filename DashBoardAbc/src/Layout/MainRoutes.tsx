import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import NewPublicRoute from "./NewPubicRoute";
import NewPrivateRoute from "./NewPrivateRoute";
import SignupPage from "../Component/LoginComponent/SignupPage";
import PrivateRoute from "./PrivateRoute";
import InnerContent from "./InnerContent";

const MainRoutes = () => (
  <Routes>
    {/** Protected Routes */}
    {/** Wrap all Route under ProtectedRoutes element */}
    <Route path="/" element={<NewPrivateRoute />}>
      <Route path="/" element={<InnerContent />}>
        <Route path="/" element={<Navigate replace to="dashboard" />} />
        <Route path="*" element={<PrivateRoute />} />
      </Route>
    </Route>
    {/** Public Routes */}
    {/** Wrap all Route under PublicRoutes element */}
    <Route path="/" element={<NewPublicRoute />}>
      <Route path="/login" element={<SignupPage />} />
    </Route>
  </Routes>
);

export default MainRoutes;
