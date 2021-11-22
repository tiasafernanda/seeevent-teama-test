import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomeLogin from '../pages/home-login/HomeLogin';
import SuccessLogin from '../pages/home-succes-login/SuccessLogin';
import LoginForm from '../pages/Login-Form/LoginForm';
import SignUpForm from '../pages/Sign-Up-Form/SignUpForm';
import SearchEvent from '../pages/searchEvent/SearchEvent';
// import CreateEvent from '../pages/createEvent/CreateEvent';
import AccountPage from '../account/Accountpage';
import CommentPage from '../comment/DetailPage';
import DetailPage from '../comment/DetailPage';

export default function Router() {
  return (
    <div>
      <Routes>
        <Route path='/' exact element={<HomeLogin />} />
        <Route path='/success' exact element={<SuccessLogin />} />
        <Route path='/login' exact element={<LoginForm />} />
        <Route path='/signup' exact element={<SignUpForm />} />
        <Route path='/search/:keyword' exact element={<SearchEvent />} />
        <Route path='/account-page' element={<AccountPage />} />
        <Route path='/comment-page' element={<CommentPage />} />
        <Route path='/detail-page/:id' element={<DetailPage />} />
        {/* <Route path='/create' exact element={<CreateEvent />} /> */}
      </Routes>
    </div>
  );
}
