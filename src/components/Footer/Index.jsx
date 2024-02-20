import React from 'react'
import footer_img from "../../../src/assets/images/animal_care.jpeg"
import style from './Footer.module.css'
function Footer({ footer_desc1, footer_desc2,children,footer_font_color,footer_font_size}) {
  return (
    <div className={`${style.footer_div} ${style[footer_font_color]} ${style[footer_font_size]}`}>
        <img src={footer_img}></img>
        <div className={`${style.footer_desc}`}>
        <p >{footer_desc1}</p>
        <p >{footer_desc2}</p>
        {children}
        </div>
    </div>
  )
}

export default Footer