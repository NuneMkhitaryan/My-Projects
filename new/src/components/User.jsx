import React from 'react'
import useFetch from '../Hooks/useFetch.jsx'

const User = () => {
    const user = useFetch("https://dummyjson.com/users?skip=5&limit=5")
   
  
  
  return (
    <div>
        {user?.users.map(elem => (
            <div key={elem.id}>
<h1>{elem.firstName} {elem.lastName}</h1>
<h3>{elem.age} years old</h3>

            </div>
        ))}
        
    </div>
  )
}

export default User