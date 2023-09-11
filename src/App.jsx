import './index.css';
import { styled } from 'styled-components';
import Ages from './components/age';
import {useEffect, useState} from "react";

function App() {  

  return (
    <div className='bg-offwhite min-h-full h-screen flex items-center justify-center'>
      <Ages />
    </div>
  )
}

export default App
