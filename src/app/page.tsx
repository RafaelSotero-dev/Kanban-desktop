import { ContainerCard } from '@/components/ContainerCard'

export default function Home() {
  return (
    <div className="flex flex-col flex-wrap items-start w-[90%] gap-6 mt-16">
      <h1 className="text-2xl font-bold text-black">Project Kanban</h1>
      <ContainerCard />
    </div>
  )
}
