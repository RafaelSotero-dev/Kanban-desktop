'use client'

import { useState } from 'react'
import { CardTask } from './CardTask'
import { Add } from '@/assets/Add'
import { v4 as uuidv4 } from 'uuid'

export type ToDo = {
  text: string
  id: string
  isDone: boolean
}

export function ContainerCard() {
  const [isClicked, setIsClicked] = useState<boolean>(false)
  const [isClickedInProgress, setIsClickedInProgress] = useState<boolean>(false)
  const [toDo, setTodo] = useState<string>('')
  const [toDoList, setTodoList] = useState<ToDo[]>([])
  const [inProgressList, setInProgress] = useState<ToDo[]>([])
  const [doneList, setDoneList] = useState<ToDo[]>([])

  return (
    <section className="w-full flex gap-8 flex-wrap">
      <div className="h-fit gap-2 flex flex-col justify-center p-2 rounded bg-[#EBECF0] flex-1 relative">
        <div className="flex items-center gap-[0.2rem] p-2">
          <h3 className="font-bold text-lg">To</h3>
          <h3 className="font-bold text-lg">Do</h3>
        </div>

        {toDoList.map((todo: any, index) => (
          <CardTask
            key={index + 1}
            text={todo.text}
            index={todo.id}
            isDone={todo.isDone}
            list={toDoList}
            setList={setTodoList}
            setDoneList={setDoneList}
          />
        ))}

        <button
          className="flex items-center w-fit border-none gap-4 py-[0.62rem] px-4"
          onClick={() => {
            setIsClicked(!isClicked)
            window.scrollTo(0, 100 * 100)
          }}
        >
          <Add />
          Add a card
        </button>

        {isClicked && (
          <div className="flex flex-col items-center justify-center gap-2 w-full bg-[#EBECF0] shadow-md rounded absolute self-center top-[100%] mt-2 p-4">
            <textarea
              placeholder="Enter your task"
              value={toDo}
              onChange={({ target }: any) => setTodo(target.value)}
              className={`
              w-full
              shadow-xl
              p-2
              resize-none
              placeholder:p-2
            `}
            />
            <button
              className="w-full font-bold p-2 bg-cyan-500 disabled:bg-slate-600 text-lg rounded-md hover:bg-cyan-600 transition-colors duration-200"
              disabled={!toDo.length}
              onClick={() => {
                setTodoList((prev: any) => [
                  ...prev,
                  { text: toDo, id: uuidv4(), isDone: false },
                ])
                setTodo('')
                setIsClicked(!isClicked)
                window.scrollTo(0, 0)
              }}
            >
              Add
            </button>
          </div>
        )}
      </div>

      <div className="h-fit flex flex-col gap-2 justify-center p-2 rounded bg-[#EBECF0] flex-1 relative">
        <div className="flex items-center gap-[0.2rem] p-2">
          <h3 className="font-bold text-lg">In</h3>
          <h3 className="font-bold text-lg">Progress</h3>
        </div>

        {inProgressList.map((todo: any, index) => (
          <CardTask
            key={index + 1}
            text={todo.text}
            index={todo.id}
            isDone={todo.isDone}
            list={inProgressList}
            setList={setInProgress}
            setDoneList={setDoneList}
          />
        ))}

        <button
          onClick={() => {
            setIsClickedInProgress(!isClickedInProgress)
            window.scrollTo(0, 100 * 100)
          }}
          className="flex items-center w-fit border-none gap-4 py-[0.62rem] px-4"
        >
          <Add />
          Add a card
        </button>

        {isClickedInProgress && (
          <div className="flex flex-col items-center justify-center gap-2 w-full bg-[#EBECF0] shadow-md rounded absolute self-center top-[100%] mt-2 p-4">
            {toDoList.map((element: ToDo, index: number) => (
              <div
                id={element.id}
                className="w-full break-all p-2 cursor-pointer bg-white shadow-md rounded-lg"
                onClick={(e) => {
                  const target = e.target as HTMLParagraphElement
                  const id = target.id

                  const newList = toDoList.filter(
                    (element: any) => element.id != id
                  )
                  setInProgress((prev: any) => [
                    ...prev,
                    toDoList.find((element: any) => element.id === id),
                  ])
                  setTodoList(newList)
                  setIsClickedInProgress(!isClickedInProgress)
                  window.scrollTo(0, 0)
                }}
                key={index + 1}
              >
                {element.text}
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="h-fit min-h-doneContainer flex flex-col gap-2 justify-start p-2 rounded bg-[#EBECF0] flex-1 relative">
        <div className="flex items-center gap-[0.2rem] p-2">
          <h3 className="font-bold text-lg ">Done</h3>
        </div>
        {doneList.map((todo: any, index) => (
          <CardTask
            key={index + 1}
            text={todo.text}
            index={todo.id}
            list={doneList}
            isDone={todo.isDone}
            setList={setDoneList}
            setDoneList={setDoneList}
          />
        ))}
      </div>
    </section>
  )
}
