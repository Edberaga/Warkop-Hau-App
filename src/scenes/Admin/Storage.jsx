import React from 'react'
import { useState } from 'react'
import './index.css'

const Storage = () => {
  const status = ['Cukup', 'Setengah', 'Sedikit', 'Habis']
  const statusCol = ['green', 'orange', 'red', 'gray']
  const [count, setCount] = useState(0);

  const setStatus = () => {
    if(count >= 3) {
      setCount(0);
    } else {
      setCount(count + 1);
    }
    console.log("Succesfully changed to", status[count])
  }

  return (
    <section className='storage'>
      <h2>Perlengkapan</h2>
      <div className='list-item'>
        <p>Kertas</p>
        <button
        className='list-button'
        style={{
          backgroundColor:`${statusCol[count]}`
        }}
        onClick={setStatus}
        >
          {status[count]}
        </button>
      </div>

      <div className='list-item'>
        <p>Tusuk Gigi</p>
        <button
        className='list-button'
        style={{
          backgroundColor:`${statusCol[count]}`
        }}
        onClick={setStatus}
        >
          {status[count]}
        </button>
      </div>
    </section>
  )
}

export default Storage