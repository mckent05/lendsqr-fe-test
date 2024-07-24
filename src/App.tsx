import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/Login/LoginPage';
import Main from './pages/Main';
import Dashboard from './pages/Dashboard/Dashboard';
import UserDetails from './pages/UserDetails/UserDetails';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path='/dashboard/' element= {<Main />}>
          <Route index element={<Dashboard />} />
          <Route index path='users' element={<Dashboard />} />
          <Route index path='/dashboard/users/:id' element={<UserDetails />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
