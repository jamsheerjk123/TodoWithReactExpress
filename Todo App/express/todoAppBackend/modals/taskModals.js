const db  = require("../config/config")
const taskModal = require("./base/tasks")(db.sequelize,db.Sequelize)
const createTask = ( data ) => {
    return new Promise(async (resolve, reject) => {
        try{
            const result = await taskModal.create(data)


            resolve(result)
        }
        catch(err){reject(err)}
    })

}

const fetchAllTasks = async () => {
    const result = await taskModal.findAll();
    return result
}

const getThisTask = async (data) => {
    const result = await taskModal.findOne({ where: data });
    return result
}

const updateTask = (taskId,taskDetails) =>{
   return new Promise(async(resolve,reject) => {
    try{

        const  updatedTask = await taskModal.update(taskDetails, {
            where: taskId,
        });
        console.log(updatedTask)
        resolve(updatedTask)
    }
    catch(err){
        console.log(err)
        reject(err)
    }
   }) 
}

const deleteTask = (deleteId) =>{
    return new Promise(async(resolve,reject)=>{
        try{
            const deletedTask = await taskModal.destroy({where:deleteId})
            resolve(deletedTask)
        }
        catch(e){
            reject(e)
        }
    })
}

module.exports = {createTask,fetchAllTasks,getThisTask,updateTask,deleteTask}