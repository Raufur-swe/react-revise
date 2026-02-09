import React from 'react'

const Card = (props) => {
  return (
     <div>
        <a href={props.e.url} target='blank'>
          <img  src={props.e.download_url} height={100} width={100} />
        </a>
        <h1>{props.e.author}</h1>
       </div> 
  )
}

export default Card