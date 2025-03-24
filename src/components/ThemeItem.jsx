import React from 'react'

function ThemeItem({color, img, changeColor}) {
  return <img src={img} alt='' className='theme_img' onClick={()=> {changeColor(color)}}/>;
}

export default ThemeItem
