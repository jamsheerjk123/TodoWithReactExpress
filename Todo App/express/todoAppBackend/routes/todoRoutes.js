
    const express = require('express');
    const router = express.Router()
    const  todoController  = require("../controllers/todoController");
  
    // Create a new Tutorial
    router.get("/", todoController.getAllTasks);
    router.get("/fetchTask", todoController.fetchTask);
    router.post("/addTask", todoController.addTask);
    router.put("/updateTask/:id", todoController.updateTask);
    router.delete("/deleteTask/:id", todoController.deleteTask);
    module.exports = router;