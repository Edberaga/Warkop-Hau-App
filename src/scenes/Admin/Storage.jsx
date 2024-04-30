import React from 'react'
import { useState, useEffect } from 'react'
import { collection, getDocs } from "firebase/firestore";
import './index.css'
import { db } from '../../firebase'

const Storage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async() => {
      let list = [];
      try{
        const q = collection(db, "Supplies")
        const querySnapshot = await getDocs(q);

        querySnapshot.forEach((doc) => {
          list.push({ id:doc.id, ...doc.data()});
          // doc.data() is never undefined for query doc snapshots
          console.log(doc.id, " => ", doc.data());
        });
        setData(list);
      }
      catch(error){
        console.log(error);
      }
    };
    fetchData();
  },[]);

  console.log(data);

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