import React from 'react'
import Card from './Card'
const HomePage = () => {
  return (
    <div className='App'>
        <h1>Home Page</h1>
        <Card  
        className="cardclass"
        WrapperElement={()=>{
          return <div>
          <h4>name is Amel</h4>
          <p>age 40y.</p>
          </div>
        }}
        title="Card 1"
        >
        
        </Card>
        {/* <Card
        className="cardclass"
        // WrapperElement="menu"
        title="Card 2"
        />
        <Card
        className="cardclass"
        // WrapperElement="menu"
        title="Card 3"
        /> */}
    </div>
  )
}

export default HomePage