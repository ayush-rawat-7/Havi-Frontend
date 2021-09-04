import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
export const Error = () => {
  return (
    <Wrapper>
      <h1>404 Not Found</h1>
      <p>The page you are trying to reach is not available.</p>
      <Link to='/'>
        <button>Back Home</button>
      </Link>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  background-color: aliceblue;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    font-size: 4rem;
    font-weight: 700;
  }
  p {
    margin-top: -1rem;
    font-size: 1.5rem;
  }
  button {
    border: none;
    width: 10vw;
    height: 6vh;
    background-color: #2c3e50;
    color: white;
    border-radius: 4px;
  }
  button:hover {
    background-color: #3f5772;
    cursor: pointer;
  }
  @media (max-width: 700px) {
    button {
      width: 20vw;
      height: 10vh;
    }
  }
`
