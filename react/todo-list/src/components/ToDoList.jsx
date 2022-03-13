import React, {useState} from 'react';

const ToDoLIst = () => {
    let [toDo, setToDo] = useState("");
    let [taskList, setTaskList] = useState([]);
    let [taskDone, setTaskDone] = useState(false);

    const submitHandler = (e)=>{
        e.preventDefault();
        if (toDo==="") return;
        let newToDoObj = {toDo, taskDone};
        setToDo("");
        setTaskList([...taskList, newToDoObj]);
    }
    const updateToDo = (key)=>{
        if(taskList[key].taskDone === false){
            document.getElementById(key).style = "text-decoration: line-through";
            taskList[key].taskDone = true;
        }else{
            setTaskDone(false);
            document.getElementById(key).style = "text-decoration: ";
            taskList[key].taskDone = false;
        }
    }
    const deleteToDo = (key) =>{
        let newToDoList = taskList.filter((task,index)=>{
            return index!==key;
        });
        setTaskList(newToDoList);
    }



    return (
        <>
            <form onSubmit = {submitHandler}>
            <div className="form-group">
                <label htmlFor="">My To Do List!!!</label>
                <input type="text" name="" id="" className="form-control m-3" onChange={(e)=>{setToDo(e.target.value)}} value={toDo}/>
                <input type="submit" value="Add" className="btn btn-success"/>
            </div>
            </form>
            {
                taskList.map((task, key) =>{
                    return <div key={key}>
                        <h2 className='m-3 form-check-inline' id={key}>{task.toDo}</h2>
                        <input onClick = {()=>updateToDo(key)} type="checkbox" name="" id=""/>
                        <button onClick={()=>deleteToDo(key)} className="btn btn-danger m-2">Delete</button>
                        <hr/>
                    </div>
                }
                )
            }
        </>
    )
}
export default ToDoLIst;