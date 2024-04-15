import './styles.css'
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import makanan from '../assets/img/Menu-Makanan.webp'
import minuman from '../assets/img/Menu-Minuman.webp'
import menuFile from '../assets/file/MENU.pdf'

import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import DownloadIcon from '@mui/icons-material/Download';

const Menu = () => {
  const menu = [
    {
      "name": 'Makanan',
      "img": makanan
    },
    {
      "name": 'Minuman',
      "img": minuman
    }
  ]

  const [num, setNum] = useState(0);

  return (
    <>
      <img src={menu[num].img} height="100%" width="100%" padding="10px" alt="" />
      <div className='menu-button'>
        <button style={{color: "#fff"}} onClick={() => setNum(0)}><ArrowCircleLeftIcon/></button>
        <h2>{menu[num].name}</h2>
        <button style={{color: "#fff"}} onClick={() => setNum(1)}><ArrowCircleRightIcon/></button>
      </div>
      <div>
        <button>
          <Link to={menuFile} target='_blank' download>
            <DownloadIcon/> Download
          </Link>  
        </button>
      </div>
    </>
  )
}

export default Menu