import React from 'react'
import User  from './components/User.jsx'
import withOpen from './components/HOC/withOpen.jsx'
const App = () => {

  let YourComponent = withOpen(
    ()=>{
      return <form>
      <input type="text" placeholder='your firstName' name="firstname"/>
      <input type="text" placeholder='your lastName'
     name='lastname' />
      <input type="email" placeholder='your Email' name='email' />
      </form>
    }
  )
  return (
    <main>
      <YourComponent/>
      <User/>
    </main>
  )
}

export default App