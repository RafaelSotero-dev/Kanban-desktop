import React, { Dispatch, SetStateAction } from 'react'
import { CardTask } from './CardTask'
import { ToDo } from './ContainerCard'

type TDone = {
  doneList: Array<ToDo>
  setDoneList: Dispatch<SetStateAction<ToDo[]>>
}

const DoneCard = ({ doneList, setDoneList }: TDone) => {
  return (
    <div className="min-h-[300px] min-w-[500px] flex flex-col gap-2 justify-start p-2 rounded bg-[#EBECF0] relative">
      <div className="flex items-center gap-[0.2rem] p-2">
        <h3 className="font-bold text-lg ">Done</h3>
      </div>
      {doneList.map(({ text, id, isDone }: ToDo, index: any) => (
        <CardTask
          key={index + 1}
          text={text}
          index={id}
          list={doneList}
          isDone={isDone}
          setList={setDoneList}
          setDoneList={setDoneList}
        />
      ))}
    </div>
  )
}

export default DoneCard
