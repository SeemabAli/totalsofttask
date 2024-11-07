import Navbar from "./components/Navbar";
import SidebarMenu from "./components/Menu";
import Hero from "./components/Hero";
export default function App() {
  return (
    <>
    <Navbar/>
      <div className="mt-[52px]">
        <SidebarMenu />
    </div>
    
    </>
  )
}