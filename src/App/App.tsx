import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from 'pages/Login';
import Register from 'pages/Register';
import ResetPassword from 'pages/ResetPassword'
import ForgetPassword from 'pages/ForgetPassword'
import DashboardTable from 'common/components/molecules/DashboardTable'


const App = () => {


  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<DashboardTable />} />
        <Route path="/forget-password" element={<ForgetPassword />} />
        <Route path="user/password/reset/:token" element={<ResetPassword />} />

      </Routes>
    </div>
  );


}

export default App
