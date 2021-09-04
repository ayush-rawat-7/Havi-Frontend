import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useGlobalContext } from '../context/context'
export const Navbar = () => {
const {isLoggedIn,setIsLoggedIn} = useGlobalContext()
const logout = () => {
  setIsLoggedIn(false)
}
  return (
    <Wrapper>
      <div className='logo-container'>
        <div className='img'>
          <img
            src='https://havi.com/themes/custom/havi/havi_logo-420x147.png'
            alt=''
          />
        </div>
      </div>
      <div className='links'>
        <ul>
          <li>
            <Link to='/home'>Home</Link>
          </li>
          <li>
            <Link to='/admin'>Admin</Link>
          </li>
          <li className='logout'>
            <Link to="/"onClick={logout}>Logout</Link>
          </li>
        </ul>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 5rem;
  background-color: #2c3e50;
  img {
    width: 10rem;
    object-fit: cover;
  }
  ul{
      padding: 10px;
      width: 10rem;
      display: flex;
      justify-content: space-around;
  }
  li{
    list-style-type: none;
  }
  a{
      text-decoration: none;
      color: white;
      font-weight: 600;
      margin: 0 1.5rem;
  }
  a:hover{
      color: rgb(142, 191, 241);
  }
`
