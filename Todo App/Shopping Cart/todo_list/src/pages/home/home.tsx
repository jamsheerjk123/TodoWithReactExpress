import React from 'react'
import ToDoHeader from '../../components/todoHeader'
import axios from "axios"

import { useState } from 'react'
import { useEffect } from 'react'



function Home() {
  const [tasks,setData] = useState(null)
  const allTasks = () => {
    axios.get('http://localhost:5003/task')
    .then(function (response) {
    setData(response.data.data)
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      // always executed
    });
  }
  useEffect(()=>{
    allTasks()
  },[])
  return (
    <>
    <div>
        <ToDoHeader tasks ={tasks} taskFn = {allTasks}   />
    </div>
    <br></br>

  
    </>
  )
}

export default Home