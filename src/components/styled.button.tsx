import { styled } from "styled-components"
import { MyAnimation } from "../Styles/Animations"


export const StyledBtn = styled.button `
 border: none;
 background-color: #4E71FE;
padding: 10px 20px;
margin: 10px;
border-radius: 5px;
width: 86px;
height: 30px;
font-size: 10px;
color: white;


&:hover {
    background-color: red;
    animation: ${MyAnimation} 2s;
}


`


 export const StyledBtn2 = styled(StyledBtn) `
 border: 2px solid;
 background-color: white;
 border-color:  #4E71FE;
 color: #4E71FE;
    
`


