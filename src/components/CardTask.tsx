import { Play } from '@/assets/Play'
import { Dispatch, DragEvent, SetStateAction } from 'react'
import { ToDo } from './ContainerCard'

interface Props {
  text: string
  index: string
  isDone: boolean
  list: ToDo[]
  setList: Dispatch<SetStateAction<ToDo[]>>
}

export function CardTask({ text, index, isDone: done }: Props) {
  return (
    <div
      id={index}
      draggable="true"
      className="w-full h-[72px] flex items-start justify-between gap-2 bg-white p-[0.62rem] rounded-lg shadow-md"
      onDragStart={(e: DragEvent<HTMLDivElement> | any) => {
        e.target.classList.add('isDragging')
      }}
      onDragEnd={(e: DragEvent<HTMLDivElement> | any) => {
        e.target.classList.remove('isDragging')
      }}
    >
      <p className="flex-1  break-all">{text}</p>
      <div className="flex flex-col gap-3">
        {/* <button
          onClick={(e) => {
            const target = e.target as HTMLButtonElement
            const id = target.id

            const newList = list.filter((element: any) => element.id != id)

            setList(newList)
          }}
        >
          <Remove idx={index} />
        </button> */}
        {!done && (
          <button>
            <Play />
          </button>
        )}
      </div>
    </div>
  )
}
