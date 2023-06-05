import Profile from "@/components/profile"
import TodoContainer from "@/components/todoContainer"
import FinishedContainer from "@/components/finishedContainer"

export default function Home() {
  return (
    <div className="p-7">
      <header className='p-7 flex flex-row justify-between items-center'>
        <h1 className='text-4xl font-bold'>TodoApp</h1>
        <div>
          <button className="hover:bg-white hover:text-black p-2 rounded transition duration-700">+ Add Todo</button>
        </div>
      </header>
      <div className="flex flex-col gap-y-4">
        <Profile />
        <div className="flex flex-col gap-y-2">
          <h1 className="px-7 mb-2 font-bold text-xl">Things you want to do (1)</h1>
          <TodoContainer />
        </div>
        <div className="flex flex-col gap-y-2">
          <h1 className="px-7 my-2 font-bold text-xl">Finished business (1)</h1>
          <FinishedContainer />
        </div>
      </div>
      <footer className="flex flex-col items-center">
        <hr className="h-px mt-10 mb-4 bg-white border-0 w-4/5 mx-auto" />
        <p>@ayyashcihuy</p>
      </footer>
    </div>
  )
}
