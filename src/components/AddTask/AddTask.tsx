import { useState } from "react";
import { GrAddCircle } from "react-icons/gr";
import CreatedTasks from "../ZoneTask/CreatedTasks";
import Task from "../ZoneTask/Task";
import TaksNoExists from "../ZoneTask/TasksNoExists";


export default function AddTask() {

    const [moreTask, setMoreTask] = useState([])

    function showMoreTaks(e) {
        e.preventDefault()

        setMoreTask([...moreTask, newTask])

        setNewTask("")
    }

    const [newTask, setNewTask] = useState("")

    function changeNewTask({ target }) {
        setNewTask(target.value)
    }

    return (
        <>
            <div className="flex-col justify-center items-center -mt-7">
                <div className="flex w-full justify-center">
                    <form onSubmit={showMoreTaks} className="flex w-full justify-center">
                        <input required value={newTask} onChange={changeNewTask} type="text" placeholder="Adicione uma nova tarefa" className="text-white px-4 w-2/4 h-14 bg-zinc-600 rounded-lg" />
                        <button className="flex  justify-center items-center bg-blue-500 w-24 h-14 ml-3 rounded-xl text-white font-medium">Criar <div className="ml-2"><GrAddCircle /></div> </button>
                    </form>
                </div>

                <CreatedTasks />

                {moreTask.map((moreTask, index) => {
                    return (
                        <Task
                            description={moreTask}
                            key={`index-list-task-${index}`}
                        />
                    )
                }
                )}
            </div>
            <div className="flex-col justify-center items-center mt-64">
                {moreTask.length === 0 &&
                    <TaksNoExists />}
            </div>
        </>
    )
}