import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Chat } from './components/chat';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/user/:userId/chat/:chatId' element={<Chat />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
