import Profile from "@/components/Profile/profile"
import TodoContainer from "@/components/Todo/todoContainer"
import FinishedContainer from "@/components/Finished/finishedContainer"
import EmptyContainer from "@/components/empty/emptyContainer"
import { getTodo } from "@/components/Todo"
import { getFinishedTodo } from "@/components/Finished"

export default async function Home() {
  const todos = await getTodo();
  const finishedTodos = await getFinishedTodo();
  
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
          <h1 className="px-7 mb-2 font-bold text-xl">Things you want to do ({todos.length})</h1>
          { todos && todos.length > 0 ? 
            todos.map((todo) => (
              <TodoContainer key={todo.id} {...todo} />
            )) :
              <EmptyContainer />
          }
        </div>
        <div className="flex flex-col gap-y-2">
          <h1 className="px-7 my-2 font-bold text-xl">Finished business ({finishedTodos.length})</h1>
          { finishedTodos && finishedTodos.length > 0 ? 
            finishedTodos.map((todo) => (
              <FinishedContainer key={todo.id} {...todo} />
            )) :
              <EmptyContainer />
          }
        </div>
      </div>
    </div>
  )
}
