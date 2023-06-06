interface Error {
    errMsg: string
}

export default function ErrorModal({ errMsg }: Error) {
    return (
        <div className="flex bg-red-700 w-full">
            <div className="rounded bg-white p-7">
                <div className="flex flex-col text-red-700">
                    <h1 className="text-xl font-bold">Unexpected Error!</h1>
                    <p className="text-md">Reason: {errMsg}</p> 
                </div>
            </div>
        </div>
    )
}