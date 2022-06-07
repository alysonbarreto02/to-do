import TaksNoExists from "./TasksNoExists";

export default function CreatedTasks() {
    return (
        <div className="">
            <div className="flex justify-center mt-16">
                <div className="w-2/4 flex">
                    <div className="w-full h-11 justify-start">
                        <strong className="flex text-blue-500">Tarefas criadas <div className="w-7 h-5 ml-3 rounded-xl bg-gray-600 text-white flex items-center justify-items-center "><p className="mx-auto">0</p></div></strong>
                    </div>
                    <div className="whitespace-nowrap h-11 justify-end">
                        <strong className="flex text-purple-500">Tarefas concluídas <div className="w-7 h-5 ml-3 rounded-xl bg-gray-600 text-white flex items-center justify-items-center "><p className="mx-auto">0</p></div></strong>
                    </div>
                </div>
            </div>
            {/* <TaksNoExists /> */}
        </div>
    )
}