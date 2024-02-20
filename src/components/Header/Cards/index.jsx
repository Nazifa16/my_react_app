import React from 'react'
import { animals_datas } from '../../../constants/data'
import style from "./Cards.module.css"

const animal_card=animals_datas?.map((item,index)=>(
    <div key={index} className={style.card_style}>
        <img className={style.img}
         src={item.img_url} 
         alt="Card image cap"/>
        <h4 >{item.name}</h4>
        <p >average lifespan: {item.average_lifespan}</p>
        <p >conservation status:{item.conservation_status}</p>
        <p>habitat: {item.habitat}</p>
   </div>
))

function Cards() {  
  return (
   <div className={style.cards_div_style}>{animal_card}</div>
   
  )
}

export default Cards