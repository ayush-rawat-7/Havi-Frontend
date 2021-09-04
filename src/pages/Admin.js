import React from 'react'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import users from '../static/dummyData'
import styled from 'styled-components'
export const Admin = () => {
  const [list, setList] = React.useState()
  const getUsers = async () => {
    const res = await fetch('/users', {
      method: 'GET',
      headers: { 'Content-Type': 'application/' }
    })
    const data = await res.json()
    setList(data);
  }
  console.log(list)
  React.useEffect(() => {
    getUsers()
  }, [])
  return (
    <Wrapper>
      <Navbar />
      <div className='body'>
        <h1>Users</h1>
        <div className='underline'></div>
        <div className='users'>
          {list.map((user, index) => {
            return (
              <section className='user' key={index}>
                <h2>{user.name}</h2>
                <p>{user.email}</p>
              </section>
            )
          })}

          {/* {users.map((user,index) => {
            return (
              <section key={index} className='user'>
                <h2>{user.name}</h2>
                <p>{user.email}</p>
              </section>
            )
          })} */}
        </div>
      </div>
      <Footer />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  .body {
    min-height: calc(100vh - 20vh);
  }
  h1 {
    text-align: center;
  }
  .underline {
    width: 70vw;
    height: 0.1rem;
    margin: 0 auto;
    background-color: gray;
  }
  .users {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    row-gap: 1rem;
    place-items: center;
    margin-top: 2rem;
  }
  .user {
    border: 1px solid gray;
    width: 20vw;
    height: 20vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    box-shadow: 0 0 3px gray;
    text-transform: justify;
  }
  @media (max-width: 700px) {
    .users {
      grid-template-columns: 1fr 1fr;
      row-gap: 2rem;
    }
    .user {
      border: 1px solid gray;
      width: 40vw;
      height: 30vh;
      overflow: hidden;
    }
  }
`
