import React from 'react'

const Card = ({WrapperElement,title}) => {
 
  return (
    <>
    <div>
     <button>{title}</button>
     <div>something about {title}</div>
    </div>
    {WrapperElement(20,"Amel")}
    </>
  )
}

export default Card