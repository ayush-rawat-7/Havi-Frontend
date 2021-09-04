import React, { useState } from 'react'
import styled from 'styled-components'
import { Home } from './Home'
import { Link, useHistory } from 'react-router-dom'
import { useGlobalContext } from '../context/context'
export const Login = () => {
  const history = useHistory()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {
    isLoggedIn,
    setIsLoggedIn,
    name,
    e_mail,
    date,
    setState
  } = useGlobalContext()

  const handleLogin = async e => {
    e.preventDefault()
    const res = await fetch('http://localhost:5000/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email,
        password
      })
    })
    const data = await res.json()
    if (res.status === 200 && data) {
      setIsLoggedIn(true)
      setState(oldState => {
        return {
          ...oldState,
          name: data.name,
          e_mail: data.email,
          date: data.date
        }
      });
      history.push('/')
    } else {
      window.alert('Invalid Credentials ')
    }
  }

  if (isLoggedIn) {
    return <Home />
  } else {
    return (
      <Wrapper>
        <div className='form-container'>
          <h1 className='login'>Login To Havi</h1>
          <div className='underline'></div>
          <form>
            <input
              type='text'
              className='email-field'
              name='email'
              placeholder='Email'
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <input
              type='password'
              name='password'
              className='pass-field'
              placeholder='Password'
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
            <button type='submit' className='btn' onClick={handleLogin}>
              Login
            </button>
          </form>
        </div>
        <div className='register-area'>
          <h3>
            Don't Have An Account?{' '}
            <span>
              <Link to='/register'>Signup</Link>
            </span>
          </h3>
        </div>
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  background-color: #2c3e50;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
  .form-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    /* justify-content: center; */
    width: 30vw;
    border-radius: 5px;
    box-shadow: 0 0 4px white;
    min-height: 50vh;
    background: white;
    margin-top: 2rem;
  }
  .login {
    margin-top: 2rem;
  }
  form {
    display: flex;
    flex-direction: column;
    margin-top: 2rem;
  }
  .underline {
    width: 10vw;
    height: 2px;
    background: gray;
  }
  .email-field {
    border: none;
    height: 2vh;
    width: 15rem;
    padding: 1rem;
    border-radius: 3px;
    /* box-shadow: 0px 2px 1px black; */
    outline: none;
    border-bottom: 1px solid gray;
  }
  .pass-field {
    border: none;
    height: 2vh;
    width: 15rem;
    padding: 1rem;
    border-radius: 3px;
    /* box-shadow: 0 0 2px black; */
    outline: none;
    border-bottom: 1px solid gray;
    margin: 1rem 0;
  }
  .btn {
    width: 10vw;
    margin: 2rem auto;
    border: none;
    height: 6vh;
    color: white;
    background-color: #2c3e50;
    border-radius: 2px;
  }
  .btn:hover {
    background-color: #3f5772;
    cursor: pointer;
  }
  .register-area {
    width: 30vw;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    margin-top: 1rem;
    height: 10vh;
    border-radius: 5px;
    box-shadow: 0 0 4px white;
  }
  a {
    text-decoration: none;
    color: rgb(14, 124, 226);
  }
  a:hover {
    color: rgb(70, 159, 241);
  }

  @media (max-width: 1200px) {
    .form-container {
      width: 50vw;
      height: fit-content;
    }
    .register-area {
      width: 50vw;
    }
    .btn {
      width: 20vw;
      height: 7vh;
    }
  }
  @media (max-width: 630px) {
    .form-container {
      width: 70vw;
      height: fit-content;
    }
    .register-area {
      width: 70vw;
    }
  }
`
