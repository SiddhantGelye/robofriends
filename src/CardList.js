import React from 'react'
// import {robots} from './Robot'
import Card from './Card'
const CardList = ({robots})=>{
    
    const cardcomponent = robots.map((r)=>{
           return <Card key={r.id} robot={r}/>
    })
    return (
        <div>
            {cardcomponent}
        </div>
    )
}
export default CardList;