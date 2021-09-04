import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import items from '../static/navLinks'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import { useGlobalContext } from '../context/context'
import styled from 'styled-components'
export const Home = () => {
  const [item, setItem] = React.useState('')
  const history = useHistory()
  const addItem = e => {
    e.preventDefault()
  }
    return (
      <Wrapper>
        <Navbar />
        <div className='body'>
          <h1 className='main-head'>Add items to your list</h1>
          <div className='input-form'>
            <form>
              <input
                type='text'
                placeholder='Item Name'
                className='input'
                value={item}
                onChange={e => setItem(e.target.value)}
              />
              <button type='submit' className='btn' onClick={addItem}>
                Add
              </button>
            </form>
          </div>
          <div className='list'>
            <div className='info'>
              <h1>List of items</h1>
              <h1>Total Items: {items.length}</h1>
            </div>
            <div className='section'>
              <ol className='items'>
                {items.map((item, index) => {
                  return (
                    <li key={index}>
                      <h2>{item.name}</h2>
                      <p>{item.date}</p>
                    </li>
                  )
                })}
              </ol>
            </div>
          </div>
        </div>
        <Footer />
      </Wrapper>
    )
}

const Wrapper = styled.div`
  .body {
    min-height: calc(100vh - 20vh);
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .main-head {
    text-align: center;
  }
  .input {
    outline: none;
    width: 25vw;
    padding: 1rem;
    height: 1.4vh;
    border-radius: 3px;
    outline: none;
    border: none;
    border-bottom: 1px solid gray;
    background-color: whitesmoke;
  }
  .btn {
    height: 6vh;
    border-radius: 3px;
    border: none;
    width: 10vw;
    background-color: #2c3e50;
    color: white;
    font-weight: 600;
    font-size: 1rem;
    margin-left: 1rem;
  }
  .btn:hover {
    cursor: pointer;
    background-color: #3f5772;
  }
  .list {
    /* background-color:red; */
    width: 50vw;
    padding: 10px;
    display: flex;
    flex-direction: column;
    /* align-items: center; */
  }
  .info {
    display: flex;
    justify-content: space-between;
    margin: 0 2rem;
  }
  .list {
    display: flex;
    justify-content: center;
  }
  .section {
    width: 50vw;
    background-color: #f5f6f8;
    border-radius: 10px;
    padding: 1rem;
  }
  .items {
    list-style-type: upper-roman;
  }
  .list h1 {
    margin-top: 2rem;
    text-align: center;
  }
  .items li {
    display: flex;
    justify-content: space-between;
  }
  .items li p {
    margin-right: 2rem;
  }

  @media (max-width: 700px) {
    .info {
      font-size: 0.6rem;
    }
    .info h1:nth-child(1) {
      margin-right: 2rem;
    }
    .list {
      width: 80vw;
      display: flex;
      /* justify-content: center; */
      align-items: center;
    }
    .section {
      width: 100%;
    }
  }
`
