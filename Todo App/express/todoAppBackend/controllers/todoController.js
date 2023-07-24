const taskModal = require('../modals/taskModals')

const addTask = async (req, res) => {
  try{
    const data = {
      "taskName"        : req.body.task_name,
      "taskDescription" : req.body.task_description,
      "taskPriority"    : req.body.task_priority
    }
    let result = await taskModal.createTask(data)
    
    if(result){
      res.json({
        "message":"Successfully Added",
        "status" : "1"
      }).status(200)
    }
    else{
      res.json({
        "message":"Something went wrong",
        "status" : "0"
      }).status(202)
    }

  }
  catch(err){
    res.json({
      "message":"Insufficient data",
      "status" : "0"
    }).status(404).end();
  }
};

const getAllTasks = async (req,res) =>{
  try{
    const allTask = await taskModal.fetchAllTasks();
    if(allTask){
      return res.json({
          "data"   : allTask,
          "status" : 1
        }).status(200)
    }
    return res.json({
      "data"   : [],
      "status" : 1
    }).status(201)


  }
  catch(err){
    res.json({
      "message":"Insufficient data",
      "status" : 0
    }).status(404).end();
  }
}

const fetchTask = async (req,res) =>{
  try{
    const thisTask = await taskModal.getThisTask(req.query);
    res.json({
      "data"   : thisTask,
      "status" : 1
    }).status(200)
  }
  catch(e){
    console.log(e)
    res.json({
      "message":"Insufficient data",
      "status" : 0
    }).status(404).end();
  }
  
}

const updateTask = async(req,res) =>{
  try{
    const data = {
      "taskName"        : req.body.task_name,
      "taskDescription" : req.body.task_description,
      "taskPriority"    : req.body.task_priority
    }
    const result = await taskModal.updateTask(req.params,data)
    if(result){
      res.json({
        "message":"Successfully Updated",
        "status" : "1"
      }).status(200)
    }
    else{
      console.log(result)
      res.json({
        "message":"Something went wrong",
        "status" : "1"
      }).status(202)
    }
  }
  catch(e){
    res.json({
      "message":"Something went wrong",
      "status" : "0"
    }).status(400)
  }

}

const deleteTask = async(req,res) =>{
  try{
    const result = await taskModal.deleteTask(req.params)
    if(result){
      res.json({
        "message":"Successfully deleted",
        "status" : "1"
      }).status(200)
    }
    else{
      res.json({
        "message":"Something went wrong",
        "status" : "0"
      }).status(202)
    }
  }
  catch(e){
    console.log(e)
    res.json({
      "message":"Something went wrong",
      "status" : "0"
    }).status(404)
  }
}




module.exports ={addTask,getAllTasks,fetchTask,updateTask,deleteTask}
