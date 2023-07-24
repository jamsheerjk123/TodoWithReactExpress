import axios from "axios";
//import { useEffect,useState } from "react";
//import React, { useEffect } from "react";
//import { useState } from "react";
import {Modal,Form,Button} from 'react-bootstrap'

const ModalComponent = ({show,showModal,taskId,taskName,taskDescription,taskPriority}) =>{
    // useEffect(()=>{
    //   showModal()
    // },[taskId,showModal])
    //const [taskCurrentId,setTaskCurrentId]     = useState(null)
    const handleSubmit=(event)=>{
      event.preventDefault()

      const taskDetails = {
        "task_name"        : event.target.taskName.value,
        "task_description" : event.target.taskDescription.value,
        "task_priority"    : event.target.taskPriority.value,
      }
      if(taskId){
        axios.put(`http://localhost:5003/task/updateTask/${taskId}`,taskDetails)
        .then((response)=>{
          
        })
        .catch((e)=>{
          console.log(e)
        })
        .finally(()=>{
            showModal()
        }) 
      }
      else{
        axios.post('http://localhost:5003/task/addTask',taskDetails)
        .then((response)=>{
          console.log(response)
        })
        .catch((e)=>{
          console.log(e)
        })
        .finally(()=>{
          showModal()
        })
      }

      

    }  
    
    return (<>
        <Modal show={show} onHide={showModal}>
        <Modal.Header closeButton>
          <Modal.Title>Add task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form id={'my-form'} onSubmit={handleSubmit} >
            <Form.Group className="mb-3" controlId="taskName">
              <Form.Label>Task Name</Form.Label>
              <Form.Control
                type="text"
                defaultValue={taskName}
                name="taskName"
                placeholder="Task Name"
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="taskDescription"
            >
            <Form.Label>Task Description</Form.Label>
              <Form.Control as="textarea" name="taskDescription" defaultValue={taskDescription} rows={3} />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="taskPriority"
            >
            <Form.Label>Task Priority</Form.Label>
              <Form.Select aria-label="Default select example"  name="taskPriority" defaultValue={taskPriority}   >
                <option value="0">Low</option>
                <option value="1">Medium</option>
                <option value="2">High</option>
              </Form.Select>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={showModal}>
            Close
          </Button>
          <Button type={'submit'} form={"my-form"} variant="primary" >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>)
    
}

export default  ModalComponent