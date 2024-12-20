import React from 'react';
import {Button} from "@nextui-org/react";

const Features = () => {
    return (
        <section >
            <div >
                <h1 style={{ fontSize: "40px" }}>
                    Everything is  better with a <span style={{color:'rgb(255, 68, 0)'}}> Pizza </span> 
                </h1>
                <p style={{ marginTop: "20px", color: "grey", fontSize: '20px' }}>Pizza is a missing piece that makes every day complete, a simple yet delicious joy in life</p>

                <div className="button" style={{ marginTop: '20px'} } >
                <Button className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg"radius="full">
                Order now
                </Button>
                    {/* <button className='btn1'>Order now </button> */}
                    {/* <button className='btn2'>Learn more</button> */}
                    <Button className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg"radius="full"  style={{ marginLeft:"3px"} } >
                Learn More
                </Button>
                </div>
            </div>

            <div className="pizza-image" >
                <img src="https://static.vecteezy.com/system/resources/previews/025/446/386/non_2x/tasty-top-view-pizza-italian-traditional-round-pizza-white-background-ai-generative-free-photo.jpg" alt="" />
            </div>


        </section>
    )
}

export default Features