import React from 'react'
import style from './Header.module.css'

function Header({content_title,font_color}) {
  return (
    <h1 className={`${style[font_color]} ${style.font_size}`}>{content_title}</h1>
  )
}

export default Header