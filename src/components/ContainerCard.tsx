'use client'

import { useState } from 'react'
import ToDoComponent from './todoCard'
import InProgress from './InProgressCard'
import DoneCard from './DoneCard'

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
    <section className="mt-6 w-full flex justify-center items-center gap-6 flex-wrap">
      <ToDoComponent
        toDoList={toDoList}
        isClicked={isClicked}
        setTodoList={setTodoList}
        setIsClicked={setIsClicked}
        setTodo={setTodo}
        toDo={toDo}
        setDoneList={setDoneList}
      />

      <InProgress
        inProgressList={inProgressList}
        isClickedInProgress={isClickedInProgress}
        setDoneList={setDoneList}
        setInProgress={setInProgress}
        setIsClickedInProgress={setIsClickedInProgress}
        setTodoList={setDoneList}
        toDoList={toDoList}
      />

      <DoneCard doneList={doneList} setDoneList={setDoneList} />
    </section>
  )
}
