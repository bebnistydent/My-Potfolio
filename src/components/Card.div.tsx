import { styled } from "styled-components"


export const Card = styled.div `
     display: grid;
     justify-content: center; 
     align-Items: center;
     gap: 20px;
     padding-top: 40px;

     button {
        cursor: pointer;
     }

    

    

@media screen and (max-width: 800px) {
    flex-direction: column;
    
}

`

export const WrapButtons = styled.div `
display: flex;

gap: 20px;

@media screen and (max-width: 800px) {
    flex-direction: column;
}

`