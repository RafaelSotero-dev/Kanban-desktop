import { Confirm } from '@/assets/Confirm'
import { Play } from '@/assets/Play'
import { Remove } from '@/assets/Remove'
import { Dispatch, SetStateAction } from 'react'
import { ToDo } from './ContainerCard'
import clsx from 'clsx'

interface Props {
  text: string
  index: string
  isDone: boolean
  list: ToDo[]
  setList: Dispatch<SetStateAction<ToDo[]>>
  setDoneList: Dispatch<SetStateAction<ToDo[]>>
}

export function CardTask({
  text,
  index,
  list,
  isDone: done,
  setList,
  setDoneList,
}: Props) {
  return (
    <div
      id={index}
      className="card w-full flex items-start justify-between gap-2 bg-white p-[0.62rem] rounded-lg shadow-md"
    >
      <button
        id={index}
        disabled={done}
        className={clsx(
          {
            'bg-green-400': done,
            'cursor-default': done,
          },
          'flex items-center justify-center border border-[#6D6E6F] w-6 h-6 rounded-full cursor-pointer hover:bg-green-400 transition-colors'
        )}
        onClick={(e) => {
          const target = e.target as HTMLButtonElement
          const id = target.id

          const obj = list.find((item: any) => item.id === id)
          if (obj) {
            obj.isDone = true
          }

          setDoneList((prev: any) => [
            ...prev,
            list.find((item: any) => item.id === id),
          ])

          const newList = list.filter((element: any) => element.id != id)

          setList(newList)
        }}
      >
        <Confirm inx={index} />
      </button>
      <p className="flex-1 break-all">{text}</p>
      <div className="flex flex-col gap-3">
        <button
          onClick={(e) => {
            const target = e.target as HTMLButtonElement
            const id = target.id

            const newList = list.filter((element: any) => element.id != id)

            setList(newList)
          }}
        >
          <Remove idx={index} />
        </button>
        {!done && (
          <button>
            <Play />
          </button>
        )}
      </div>
    </div>
  )
}
