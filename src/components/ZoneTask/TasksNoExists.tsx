export default function TaksNoExists() {
    return (
        <div className=" w-full h-full justify-center flex -mt-64">
            <div className="w-2/4 h-72 flex border-gray-500 rounded-lg border-t justify-center items-center">
                <div className="flex-col">
                    <div className="w-full h-full flex justify-center">
                        <img src="assets/Clipboard.svg" alt="Clipboard" className="w-16 h-16" />
                    </div>
                    <div className="w-full h-full flex justify-center mt-2">
                        <strong className="my-auto text-gray-400">Você ainda não tem tarefas cadastradas</strong>
                    </div>
                    <div className="w-full h-full flex justify-center">
                        <p className="my-auto text-gray-400">Você ainda não tem tarefas cadastradas</p>
                    </div>
                </div>
            </div>
        </div>
    )
}