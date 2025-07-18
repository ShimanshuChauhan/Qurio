import Squares from "@/blocks/Backgrounds/Squares/Squares";
import BottomNav from "@/components/BottomNav";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div className="relative h-screen w-screen overflow-hidden flex flex-col">
      <div className="absolute z-[-10]  bg-[#2a2e18] top-0 left-0 h-full w-full">
        <Squares
          speed={0.3}
          squareSize={50}
          direction='diagonal' // up, down, left, right, diagonal
          borderColor='#575B5B'
          hoverFillColor='#222'
        />
      </div>
      <div className="flex-1 overflow-hidden">
        <Outlet />
      </div>
      <div className="absolute bottom-0 w-full text-gray-500 p-4">
        <BottomNav />
      </div>
    </div>
  )
}