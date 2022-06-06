import { FiTrash } from "react-icons/fi"

export default function Task() {
    return (
        <div className="flex justify-center">
            <div className="w-2/4 py-4 flex border-gray-500 bg-gray-400 rounded-lg">
                <div className="mr-5 ml-2 h-full justify-center items-center flex "><input type="checkbox" className="rounded-full" /></div>
                <div><p>Fazer algo muito importante pra que aquela coisa muito importante possa acontecer</p></div>
                <div className="flex justify-center items-center mr-2 ml-5"> <FiTrash /> </div>
            </div>
        </div>
    )
}