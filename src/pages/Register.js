import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import styled from 'styled-components'
// import { useGlobalContext } from '../context/context'

const defaultState = {
  isLoggedIn: false,
  name: '',
  email: '',
  password: '',
  confirmPass: '',
  sex: ''
}
export const Register = () => {
  const [state, setState] = useState(defaultState)
  const history = useHistory()
  const handleRegister = async e => {
    e.preventDefault()
    const { name, email, password, confirmPass, sex } = state
    if (password !== confirmPass) {
      return window.alert("Password Doesn't Match'")
    }
    try {
      const res = await fetch('/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          email,
          password,
          confirmPass,
          sex
        })
      })
      const data = await res.json()
      if (data.status === 201) {
        window.alert(data)
      } else {
        history.push('/')
      }
      setState({
        ...state,
        name: '',
        email: '',
        password: '',
        confirmPass: '',
        sex: ''
      })
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <Wrapper>
      <div className='form-container'>
        <h1 className='login'>Registeration</h1>
        <div className='underline'></div>
        <form>
          <input
            type='text'
            name='name'
            className='pass-field'
            placeholder='Full Name'
            value={state.name}
            onChange={e => {
              setState(oldState => {
                return { ...oldState, name: e.target.value }
              })
            }}
          />
          <input
            type='text'
            className='email-field'
            name='email'
            placeholder='Email'
            value={state.email}
            onChange={e =>
              setState(oldState => {
                return { ...oldState, email: e.target.value }
              })
            }
          />
          <input
            type='password'
            name='password'
            className='pass-field'
            placeholder='Password'
            value={state.password}
            onChange={e =>
              setState(oldState => {
                return { ...oldState, password: e.target.value }
              })
            }
          />
          <input
            type='password'
            name='confirmPass'
            className='pass-field'
            placeholder='Re-enter Password'
            value={state.confirmPass}
            onChange={e =>
              setState(oldState => {
                return { ...oldState, confirmPass: e.target.value }
              })
            }
          />
          <div className='radio'>
            <input
              type='radio'
              id='male'
              name='sex'
              value='Male'
              onChange={e => {
                setState(oldState => {
                  return { ...oldState, sex: e.target.value }
                })
              }}
            />
            <label htmlFor='male'>Male</label>
            <input
              type='radio'
              id='female'
              name='sex'
              value='Female'
              onChange={e => {
                setState(oldState => {
                  return { ...oldState, sex: e.target.value }
                })
              }}
            />
            <label htmlFor='female'>Female</label>
          </div>
          <button type='submit' className='btn' onClick={handleRegister}>
            Sign up
          </button>
        </form>
      </div>
      <div className='register-area'>
        <h3>
          Already Have An Account?{' '}
          <span>
            <Link to='/'>Login</Link>
          </span>
        </h3>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background-color: #2c3e50;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  overflow-y: scroll;
  height: 100vh;
  .form-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    /* justify-content: center; */
    width: 30vw;
    border-radius: 5px;
    box-shadow: 0 0 4px white;
    min-height: 70vh;
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
    margin: 0.6rem 0;
  }
  .btn {
    width: 10vw;
    margin: 2rem auto;
    border: none;
    height: 5vh;
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
      width: 60vw;
      height: fit-content;
    }
    .btn {
      width: 40vw;
    }
    .register-area {
      width: 60vw;
    }
  }
  @media (max-width: 600px) {
    .form-container {
      width: 70vw;
    }
    .btn {
      width: 40vw;
    }
    .register-area {
      width: 70vw;
    }
  }
`
