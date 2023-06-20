'use client'

import { useState } from "react"
import Profile from "@/components/Profile/profile"
import { todo } from "@/components/model/model"
import TodoContainer from "@/components/Todo/todoContainer"
import FinishedContainer from "@/components/Finished/finishedContainer"
import EmptyContainer from "@/components/empty/emptyContainer"
import ErrorBoundary from "@/errors/ErrorBoundary"
import Form from "@/components/form/Form"
import { updateToggleCreate } from "@/store/Slice/toggleSlice"
import { useAppDispatch, useAppSelector } from "@/store/hooks"
import { RootState } from "@/store/store"

export default function Home() {
  const dispatch = useAppDispatch();
  const toggle = useAppSelector((state: RootState) => state.todo.toggleCreate)
  const [todos, _setTodos] = useState<todo[]>([]);
  const [finishedTodos, _setFinishedTodos] = useState<todo[]>([]);
  
  function setToggle(stats: boolean): void {
    dispatch(updateToggleCreate(stats))
  }
  
  return (
    <div className="p-7">
        <ErrorBoundary>
          {
            toggle ? <Form /> : null
          }
          <header className='p-7 flex flex-row justify-between items-center'>
            <h1 className='text-4xl font-bold'>TodoApp</h1>
            <div>
              <button onClick={() => setToggle(true)} className="hover:bg-white hover:text-black p-2 rounded transition duration-700">+ Add Todo</button>
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
        </ErrorBoundary>
      </div>
  )
}
