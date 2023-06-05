import { GrGroup } from "react-icons/gr"
import { AiOutlineCloseSquare } from "react-icons/ai"
import { todo } from "../model/model";

export default function TodoContainer({id, title, status, createdAt, description}: todo) {
    return (
        <div>
            <div key={id} className="bg-white mx-7 w-96 h-auto min-h-full rounded drop-shadow-sm">
                <div className="flex flex-col p-7 text-black">
                    <div className="flex flex-row justify-between items-center">
                        <div>
                            <h1 className="font-bold text-xl">{title}</h1>
                            <p>{createdAt}</p>
                        </div>
                        <GrGroup className="w-10 h-10 p-1 rounded-full border-black border-4" />
                    </div>
                    <hr className="h-px my-6 bg-gray-200 border-0 dark:bg-gray-700"></hr>
                    <div className="flex flex-col gap-y-2 mb-6">
                        <h1 className="text-gray-500">Description: </h1>
                        <p>{description}</p>
                    </div>
                    <div>
                        <h1>Status: </h1>
                        <p className="flex flex-row items-center gap-x-2 text-red-700"><AiOutlineCloseSquare />{status}</p>
                    </div>
                </div>
            </div>
        </div>
    )   
}