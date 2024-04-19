import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import DashboardTable from 'common/components/molecules/DashboardTable'
import Login from 'pages/Login';
import ResetPassword from 'pages/ResetPassword'


const App = () => {


  return (
    <div className="App">
      <Routes>
        <Route path="/dashboard" element={<DashboardTable />} />

        <Route path="user/password/reset/:token" element={<ResetPassword />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );


}

export default App
