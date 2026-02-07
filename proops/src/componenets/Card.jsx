import React from 'react'

const Card = (props) => {
  return (
     <div className='card'>
         {/* calling the proops */}
        <img src={props.img} alt="" />
        
        <h1>{props.user}</h1> 
       
        
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui animi veritatis facere obcaecati consequatur eius placeat beatae libero, pariatur non mollitia voluptatum doloremque. Porro corporis voluptatem quas. Atque, quaerat expedita.</p>
    
    <button>Click me</button>
    </div>
    

  )
}

export default Card