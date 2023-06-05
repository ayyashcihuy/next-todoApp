import { GrGroup } from "react-icons/gr"
import { AiOutlineCheckSquare } from "react-icons/ai"

export default function FinishedContainer() {
    return (
        <div className="bg-white mx-7 w-96 h-auto min-h-full rounded drop-shadow-sm">
            <div className="flex flex-col p-7 text-black">
                <div className="flex flex-row justify-between items-center">
                    <div>
                        <h1 className="font-bold text-xl">Todo</h1>
                        <p>Saturday, June 27 2023</p>
                    </div>
                    <GrGroup className="w-10 h-10 p-1 rounded-full border-black border-4" />
                </div>
                <hr className="h-px my-6 bg-gray-200 border-0 dark:bg-gray-700"></hr>
                <div className="flex flex-col gap-y-2 mb-6">
                    <h1 className="text-gray-500">Description: </h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, a quasi? Voluptatibus libero vero nesciunt optio debitis eaque? Dolores laboriosam tempora hic ab inventore dicta iure id sequi reprehenderit similique.</p>
                </div>
                <div>
                    <h1>Status: </h1>
                    <p className="flex flex-row items-center gap-x-2 text-green-700"><AiOutlineCheckSquare />Finished</p>
                </div>
            </div>
        </div>
    )
}