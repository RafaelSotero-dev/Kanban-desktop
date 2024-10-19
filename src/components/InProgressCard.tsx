import React, { Dispatch, SetStateAction } from 'react'
import { ToDo } from './ContainerCard'

type TInProgress = {
  toDoList: Array<ToDo>
  setTodoList: Dispatch<SetStateAction<ToDo[]>>
}

const dragEnter = () => {}

const dragOver = () => {
  const draggerZones = document.querySelector('.draggerZoneInProgress')
  const card = document.querySelector('.isDragging')
  if (card) {
    card.classList.add('inProgress')
    draggerZones?.appendChild(card)
  }
}

const dragLeave = () => {}

const drop = () => {
  const card = document.querySelector('.isDragging')
  if (!card?.className.includes('inProgress')) {
    card?.classList.add('inProgress')
  }
}

const InProgress = ({ toDoList, setTodoList }: TInProgress) => {
  return (
    <div className="min-h-[350px] w-[350px] flex flex-col gap-2 justify-normal p-2 rounded bg-[#EBECF0] relative">
      <div className="flex items-center gap-[0.2rem] p-2">
        <h3 className="font-bold text-lg">In</h3>
        <h3 className="font-bold text-lg">Progress</h3>
      </div>

      <div
        className="draggerZoneInProgress flex flex-col gap-2 flex-1"
        onDragEnter={() => dragEnter()}
        onDragOver={() => dragOver()}
        onDragLeave={() => dragLeave()}
        onDrop={() => drop()}
      >
        {/* {inProgressList.map(({ text, id, isDone }: ToDo, index: any) => (
          <CardTask
            key={index + 1}
            text={text}
            index={id}
            isDone={isDone}
            list={inProgressList}
            setList={setInProgress}
          />
        ))} */}
      </div>
      {/* {toDoList.length > 0 && (
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
      )} */}
      {/* {isClickedInProgress && (
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
      )} */}
    </div>
  )
}

export default InProgress
