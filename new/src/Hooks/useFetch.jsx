
import { useEffect, useReducer } from 'react'

function reducer(state,{type,payload}){

    switch(type){
        case "ok" :
        return payload
    }
return state
}
const useFetch = (url) => {

    const [users,dispatchusers] = useReducer(reducer,null)
useEffect(()=>{
fetch(url).
then(res => {
    return res.json()
}).
then(data => {
    dispatchusers(
        {
            type:"ok",
            payload:data
        })
})

},[])

  return users
}

export default useFetch