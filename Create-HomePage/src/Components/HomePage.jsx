import React from 'react'
import Card from './Card'
const HomePage = () => {
  return (
    <div className='App'>
        <h1>Home Page</h1>
        <Card
        className="cardclass"
        WrapperElement="menu"
        title="Card 1"
        ></Card>
        <Card
        className="cardclass"
        WrapperElement="menu"
        title="Card 2"
        ></Card>
        <Card
        className="cardclass"
        WrapperElement="menu"
        title="Card 3"
        ></Card>
    </div>
  )
}

export default HomePage