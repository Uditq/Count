import React ,{useState} from 'react'


export default function Counterapp() {
    const [count,setCount]= useState(0);

    const Increment=()=>{
        setCount(count+1)
    }
 const Decrement=()=>{
    setCount(count-1)
 }


  return (
    
    <>
   
       <h1>Counting:{count}</h1>
   
    <div className="cont">

    <button type="button"  onClick={Increment} >Increment</button>
    <button type="button"  onClick={Decrement} >Decrement</button>
       
    </div>


    
    </>  
    
  )
}
