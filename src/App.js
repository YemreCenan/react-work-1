import logo from './logo.svg';
import './App.css';
import Dashboard from './layouts/Dashboard'
import 'semantic-ui-css/semantic.min.css'
import { Container, Input } from 'semantic-ui-react';
import Navi from './layouts/Navi';
import {useState} from 'react';


function App() {
  return (
    
    <div className="App">
      <Navi/>  
     
      <Container className='main'>
       
      <Dashboard/>
      </Container>

    </div>
  );
}


export default App;
