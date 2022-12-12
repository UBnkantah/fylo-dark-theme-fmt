import React from 'react'
import { accessData } from '../AccessDB/AccessDB'
import AccessImg from "../images/icon-access-anywhere.svg"
import "./Access.css"

const Access = () => {
  return (
    <div className='access'>
        <div className='div-items'>
          {accessData.map((items) => {
            return(
              <div className='items' key={items.id}>
                <img src={items.image} alt="" />
                <h1>{items.header}</h1>
                <p>{items.text}</p>
            </div>
            )
          })}
            
        </div>
    </div>
  )
}
export default Access