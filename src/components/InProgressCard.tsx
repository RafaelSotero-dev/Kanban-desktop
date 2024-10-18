import React, { Dispatch, SetStateAction } from 'react'
import { CardTask } from './CardTask'
import { ToDo } from './ContainerCard'
import { Add } from '@/assets/Add'

type TInProgress = {
  toDoList: Array<ToDo>
  inProgressList: Array<ToDo>
  setTodoList: Dispatch<SetStateAction<ToDo[]>>
  setInProgress: Dispatch<SetStateAction<ToDo[]>>
  setDoneList: Dispatch<SetStateAction<ToDo[]>>
  isClickedInProgress: boolean
  setIsClickedInProgress: any
}

const InProgress = ({
  toDoList,
  inProgressList,
  setInProgress,
  setTodoList,
  setDoneList,
  setIsClickedInProgress,
  isClickedInProgress,
}: TInProgress) => {
  return (
    <div className="min-h-[300px] min-w-[500px] flex flex-col gap-2 justify-normal p-2 rounded bg-[#EBECF0] relative">
      <div className="flex items-center gap-[0.2rem] p-2">
        <h3 className="font-bold text-lg">In</h3>
        <h3 className="font-bold text-lg">Progress</h3>
      </div>

      {inProgressList.map(({ text, id, isDone }: ToDo, index: any) => (
        <CardTask
          key={index + 1}
          text={text}
          index={id}
          isDone={isDone}
          list={inProgressList}
          setList={setInProgress}
          setDoneList={setDoneList}
        />
      ))}

      {toDoList.length > 0 && (
        <button
          onClick={() => {
            setIsClickedInProgress(!isClickedInProgress)
            window.scrollTo(0, 100 * 100)
          }}
          className="mt-auto flex items-center w-fit border-none gap-4 py-[0.62rem] px-4"
        >
          <Add />
          Add a card
        </button>
      )}
      {isClickedInProgress && (
        <div className="flex flex-col items-center justify-center gap-2 w-full bg-[#EBECF0] shadow-md rounded absolute self-center bottom-0 mt-2 p-4">
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
  )
}

export default InProgress
