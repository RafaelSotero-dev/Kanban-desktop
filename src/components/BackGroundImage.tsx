import backGround from '@/assets/background.jpg'
import Image from 'next/image'

export function BackGroundImage() {
  return (
    <Image
      src={backGround}
      alt="backGround"
      className="w-full h-screen bg-center bg-repeat- absolute -z-10"
      // style={{
      //   backgroundImage: `url(https://images.unsplash.com/photo-1454117096348-e4abbeba002c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80)`,
      // }}
    />
  )
}
