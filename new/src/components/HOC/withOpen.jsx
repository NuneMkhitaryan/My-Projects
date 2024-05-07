
function withOpen(Component){
    
  return () => {
    return <>
    <p>Lorem ipsum dolor sit amet.</p>
            <Component/>
        </>
      
  }
}

export default withOpen