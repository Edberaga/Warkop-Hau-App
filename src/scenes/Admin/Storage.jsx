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

  const statusName = ['Cukup', 'Setengah', 'Sedikit', 'Habis']
  const statusColor = ['green', 'orange', 'red', 'gray']
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
      {data.map(({name, status}) => ( 
      <div className='list-item'>
        <p>{name}</p>
        <button
        className='list-button'
        style={{
          backgroundColor:`${statusColor[status]}`
        }}
        onClick={setStatus}
        >
          {statusName[status]}
        </button>
      </div>
      ))}
    </section>
  )
}

export default Storage