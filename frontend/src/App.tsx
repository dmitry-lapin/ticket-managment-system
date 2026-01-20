import React from 'react'
import './App.css'
import Sidebar from './components/Sidebar/Sidebar.tsx';

const App: React.FC = () => {
  return (
    <main className='h-screen flex flex-row'>
      <Sidebar/>
    </main>
  );
}

export default App
