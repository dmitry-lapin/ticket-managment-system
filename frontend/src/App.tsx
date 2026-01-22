import React from 'react'
import './App.css'
import Sidebar from './components/Sidebar/Sidebar.tsx';
import './styles/theme.css';
import './styles/components.css'

const App: React.FC = () => {
  return (
    <main className='h-screen flex flex-row test'>
      <Sidebar/>
    </main>
  );
}

export default App
