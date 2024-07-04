import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import UserForm from './components/UserForm';
import DataTable from './components/DataTable.tsx';
import Departments from './components/Departments.tsx';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UserForm />} />
        <Route path="/second" element={<SecondPage />} />
      </Routes>
    </Router>
  );
};

const SecondPage: React.FC = () => {
  const user = localStorage.getItem('user');
  if (!user) {
    return <Navigate to="/" replace />;
  }
  return (
    <div>
      <DataTable />
      <Departments />
    </div>
  );
};

export default App;
