import React from 'react'

const dragEnter = () => {}

const dragOver = () => {
  const draggerZones = document.querySelector('.draggerZoneDone')
  const card = document.querySelector('.isDragging')
  if (card) draggerZones?.appendChild(card)
}

const dragLeave = () => {}

const drop = () => {}

function DoneCard() {
  return (
    <div className="min-h-[350px] w-[350px] flex flex-col gap-2 justify-start p-2 rounded bg-[#EBECF0] relative">
      <div className="flex items-center gap-[0.2rem] p-2">
        <h3 className="font-bold text-lg ">Done</h3>
      </div>

      <div
        className="draggerZoneDone flex flex-col flex-1 gap-2"
        onDragEnter={() => dragEnter()}
        onDragOver={() => dragOver()}
        onDragLeave={() => dragLeave()}
        onDrop={() => drop()}
      ></div>
    </div>
  )
}

export default DoneCard
