import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from 'pages/Login';
import ResetPassword from 'pages/ResetPassword'
import Register from 'pages/Register';
import DashboardTable from 'common/components/molecules/DashboardTable'


const App = () => {


  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/dashboard" element={<DashboardTable />} />

        <Route path="user/password/reset/:token" element={<ResetPassword />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );


}

export default App
