import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
//import axios from "axios"
import {Container,Row,Col,Card,Button,Table} from 'react-bootstrap';
import ModalComponent from "./ModalComponent";
const ToDoHeader=({tasks,taskFn}) =>{
  const [show, setShow] = useState(false);
  const [taskId, setTaskId] = useState(null);  
  const [taskName,setTaskName]               = useState("")
  const [taskDescription,setTaskDescription] = useState("")
  const [taskPriority,setTaskPriority]       = useState(0)
  
    if(taskId){
      axios.get(`http://localhost:5003/task/fetchTask/?id=${taskId}`)
      .then((response)=>{
        const thisTask = response.data.data
          setTaskName(thisTask.taskName) 
          setTaskDescription(thisTask.taskDescription)
          setTaskPriority(thisTask.taskPriority)
      })
      .catch((e)=>{
        console.log(e)
      })
      .finally(()=>{
      }) 
      
    }
 
  // },[taskId])

  const deleteTask = (deleteId)=>{
    axios.delete(`http://localhost:5003/task/deleteTask/${deleteId}`)
      .then((response)=>{
        if(response.data.status === '1'){
          taskFn()  
        
        }
      })
      .catch((e)=>{
        //console.log(e)
      })
      .finally(()=>{

      }) 
    
  }

  const handleShow = () => {
    setShow(!show)
    taskFn()
  };
  useEffect(()=>{
    //   setTaskName("")
    //   setTaskDescription("")
    if(taskName !== ""){
     
      handleShow()
    }   
  // eslint-disable-next-line    
  },[taskName])



  const  CurrenttAlltask=()=>{ 
      if(tasks){
      return tasks.map((taskItem,index)=>{
        let priority = (taskItem.taskPriority === 0)?"Low":(taskItem.taskPriority === 1)?"Medium":"High"
        return(
          <tr key={taskItem.id}>
            <td>{index+1}</td>
            <td>{taskItem.taskName}</td>
            <td>{taskItem.taskDescription}</td>
            <td>{priority}</td>
            <td>
              <Button variant="primary" onClick={()=>{setTaskId(taskItem.id)}} className="">Update</Button> 
              <Button variant="danger" onClick={()=>{deleteTask(taskItem.id)}}  className=" m-1">Delete</Button>
            </td>
          </tr>
        )
      
      })
      }
      else{
        
      }
  }
  


  
  return (<>
    <h1 className="text-success text-center">  ToDo List By Me</h1>
  
    <Container>
      <Row>
        <Col>
          <Card>
            <Card.Header className="" >
              <Button variant="primary" className="" onClick={handleShow}> Add a Task</Button>  
            </Card.Header>
            <Card.Body>
              <Table>
                <thead>
                <tr>
                  <th>#</th>
                  <th>Task</th>
                  <th>Task Description</th>
                  <th>Task Priority</th>
                  <th>Action</th>
                </tr>
                </thead>
                <tbody>
                  <CurrenttAlltask />
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    <ModalComponent show ={show} showModal = {handleShow} taskId={taskId} taskName ={taskName} taskDescription= {taskDescription} taskPriority = {taskPriority} />
  </>)
}

export default ToDoHeader