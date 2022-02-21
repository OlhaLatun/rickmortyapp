import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { React, useState } from 'react';

import Login from '../Login'
import NotFound from '../NotFound'
import List from '../List'
import Character from '../Character'

function App() {
  
  const [character, setCharacter] = useState(null)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Login />} />
        <Route path={character} element={<Character character={character} />} />      
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
