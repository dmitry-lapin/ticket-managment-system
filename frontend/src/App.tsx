import React from 'react'
import './App.css'

import TicketsPage from './pages/TicketsPage.tsx';
import MainPage from './pages/MainPage.tsx';
import { AppLayout } from './layout/appLayout.tsx';

import { Routes, Route } from 'react-router';

const App: React.FC = () => {
  return (
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<MainPage />} />
          <Route path="/tickets" element={<TicketsPage/>} />
        </Route>

      {/* на будущее */}
      {/* <Route path="/tickets/new" element={<TicketCreatePage />} /> */}
      {/* <Route path="/tickets/:id/edit" element={<TicketEditPage />} /> */}
    </Routes>
  );
}

export default App
