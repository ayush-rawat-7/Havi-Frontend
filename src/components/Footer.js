import React from 'react'
import styled from 'styled-components'
export const Footer = () => {
    return (
        <Wrapper>
            <h4>Copyright &copy; Havi</h4>
        </Wrapper>
    )
}

const Wrapper = styled.div`
width: 100%;
height: 5rem;
margin-bottom:0;
margin-top: 2rem;
background-color: #2c3e50;
display: flex;
justify-content: center;   
h4{
    color: white;
} 
`