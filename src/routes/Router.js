import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeLogin from "../pages/home-login/HomeLogin";
import SuccessLogin from "../pages/home-succes-login/SuccessLogin";
import LoginForm from "../pages/Login-Form/LoginForm";
import SignUpForm from "../pages/Sign-Up-Form/SignUpForm";

export default function Router() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<HomeLogin />} />
          <Route path="/success" element={<SuccessLogin />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/signup" element={<SignUpForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
