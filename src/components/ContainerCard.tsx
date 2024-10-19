'use client'

import { useState } from 'react'
import ToDoComponent from './TodoCard'
import InProgress from './InProgressCard'
import DoneCard from './DoneCard'

export type ToDo = {
  text: string
  id: string
  isDragged: boolean
  isDone: boolean
}

export function ContainerCard() {
  const [isClicked, setIsClicked] = useState<boolean>(false)
  const [toDo, setTodo] = useState<string>('')
  const [toDoList, setTodoList] = useState<ToDo[]>([])

  return (
    <section className="mt-auto w-full flex justify-center items-start gap-6 flex-wrap">
      <ToDoComponent
        toDoList={toDoList}
        isClicked={isClicked}
        setTodoList={setTodoList}
        setIsClicked={setIsClicked}
        setTodo={setTodo}
        toDo={toDo}
      />

      <InProgress setTodoList={setTodoList} toDoList={toDoList} />

      <DoneCard />
    </section>
  )
}
