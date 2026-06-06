import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles.css';
import App from './App';
import { PatientApp } from './apps/patient/PatientApp';
import { DoctorApp } from './apps/doctor/DoctorApp';
import { AdminApp } from './apps/admin/AdminApp';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/patient" element={<PatientApp />} />
        <Route path="/doctor" element={<DoctorApp />} />
        <Route path="/admin" element={<AdminApp />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
