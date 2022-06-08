import { useState } from "react"
import { FiTrash } from "react-icons/fi"

export default function Task({ description }) {

    let [complete, setComplete] = useState(false)

    function changeComplete (){
        if(complete === false){
            setComplete(true)
            setConcluded (...concluded)
            console.log(complete)
        }else if (complete === true) {
            setComplete(false)
            console.log(complete)
        }
    }

    let [concluded, setConcluded] = useState([])

    return (
        <div className="flex justify-center">
            <div className={`w-2/4 py-4 flex bg-zinc-400 rounded-lg mt-2 ${complete === true ? 'line-through' : 'no-underline'} ${complete === true ? 'bg-blue-300' : 'bg-zinc-400'} `}>
                <div className="mr-5 ml-2 h-full justify-center items-center flex "><input onClick={changeComplete} type="checkbox" className="rounded-full" /></div>
                <div className="w-full"><p className="text-zinc-100">{description}</p></div>
                <div className="flex w-full justify-end items-center mr-2 ml-5"> <FiTrash /> </div>
            </div>
        </div>
    )
}