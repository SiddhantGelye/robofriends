import React from 'react'
import './Card.css'
const Card = ( {robot})=>{
        return (
            <div className=" content bg-light-green dib br3 pa3 ma2 bw2 grow shadow-5">
                <img alt="robo" src={`https://robohash.org/${robot.id}?size=200x200`}/>
                <div>
                    <h2>{robot.name}</h2>
                    <p>{robot.email}</p>
                </div>
            </div>
        )
}
export default Card