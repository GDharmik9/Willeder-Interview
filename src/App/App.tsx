import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import DashboardTable from 'common/components/molecules/DashboardTable'
import Login from 'pages/Login';


const App = () => {


  return (
    <div className="App">
      <Routes>
        <Route path="/dashboard" element={<DashboardTable />} />

        <Route path="/" element={<Login />} />
      </Routes>
    </div>
  );


}

export default App
