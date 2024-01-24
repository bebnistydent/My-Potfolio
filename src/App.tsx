import React from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import {StyledBtn, StyledBtn2} from  './components/styled.button';
import {Card, WrapButtons} from './components/Card.div';
import { createGlobalStyle } from "styled-components";


function App() {
  return (
    <div>
    
      <Card>
        

      <img src="Rectangle 1.png" alt='picture' />

      <h1>Headline</h1>

      <p>Faucibus. Faucibus.<br></br> 
      Sit sit sapien sit tempusrisu ut.<br></br> 
      Sit molestie ornare in venen</p>

      
<WrapButtons>

  <StyledBtn>See more</StyledBtn>
  <StyledBtn2>Save</StyledBtn2>
  

  </WrapButtons>



  </Card>

    </div>
  );
}


const Menu = styled.nav `
ul {
  list-style-type: none;
  display: flex;
  
  
}

li > a {
  color: green;
  display: inline-block;
}
  li + li {
    margin-left: 20px;
  }
`
export default App;


