import { GrAddCircle } from "react-icons/gr";

export default function AddTask(){
    return(
        <div className="flex justify-center items-center -mt-7">
            <input type="text" placeholder="Adicione uma nova tarefa" className="text-white px-4 w-2/4 h-14 bg-zinc-600 rounded-lg" />
            <button className="flex  justify-center items-center bg-blue-500 w-24 h-14 ml-3 rounded-xl text-white font-medium">Criar <div className="ml-2"><GrAddCircle/></div> </button>
        </div>
    )
}