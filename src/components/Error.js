import React from 'react'
import { useRouteError } from 'react-router-dom'
const Error = () => {
    const err = useRouteError();
    console.log("errr", err)
  return (
    <div>
        <h3>Opps!!!</h3>
        <h3>Error Encountered!</h3>
        <h1>{err.status}:{err.statusText}</h1>
        <div className='error-image'>
            <img src='https://www.pedalo.co.uk/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2019/05/Firebox-1024x599.png.webp'/>
        </div>
    </div>
  )
}

export default Error