import React, { Dispatch, SetStateAction } from 'react'
import { ToDo } from './ContainerCard'
import { Add } from '@/assets/Add'
import { v4 as uuidv4 } from 'uuid'
import { CardTask } from './CardTask'

type TtoDo = {
  toDo: string
  toDoList: Array<ToDo>
  isClicked: boolean
  setTodoList: Dispatch<SetStateAction<ToDo[]>>
  setDoneList: Dispatch<SetStateAction<ToDo[]>>
  setTodo: Dispatch<SetStateAction<string>>
  setIsClicked: any
}

const ToDoComponent = ({
  toDo,
  toDoList,
  isClicked,
  setTodoList,
  setDoneList,
  setTodo,
  setIsClicked,
}: TtoDo) => {
  return (
    <div className="min-h-[300px] min-w-[500px] gap-2 flex flex-col justify-normal p-2 rounded bg-[#EBECF0] relative">
      <div className="flex items-center gap-[0.2rem] p-2">
        <h3 className="font-bold text-lg">To</h3>
        <h3 className="font-bold text-lg">Do</h3>
      </div>

      {toDoList.map(({ text, id, isDone }: ToDo, index) => (
        <CardTask
          key={index + 1}
          text={text}
          index={id}
          isDone={isDone}
          list={toDoList}
          setList={setTodoList}
          setDoneList={setDoneList}
        />
      ))}

      <button
        className="mt-auto flex items-center w-fit border-none gap-4 py-[0.62rem] px-4"
        onClick={() => {
          setIsClicked(!isClicked)
          window.scrollTo(0, 100 * 100)
        }}
      >
        <Add />
        Add a card
      </button>

      {isClicked && (
        <div className="flex flex-col items-center justify-center gap-2 w-full bg-[#EBECF0] shadow-md rounded absolute self-center bottom-0 mt-2 p-4">
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
  )
}

export default ToDoComponent
