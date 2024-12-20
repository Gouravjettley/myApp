import React from 'react';
import menu from '../Api/api';
import {Button} from "@nextui-org/react";

const Menu = () => {
  return (
    <>
     <h1 style={{ fontSize:'1.3rem',color:'black', margin:'20px'}}>What's in your mind ?</h1>
      <div className='menuapi'>{

        menu.map((data) => (

          <div className='menu-card'>
            <img src={data.img} alt="img" />
            <h4 style={{ margin: '7px' }}>{data.title}</h4>
            <p style={{ fontSize: '12px', color: '#56560', margin: '7px' }}>{data.description}</p>
            <Button color="primary" variant="ghost">
         Add to cart ₹{data.price}</Button>
        {/* <button className='btn3'></button> */}
          </div>
        ))}
      </div>
    </>
  )
}

export default Menu