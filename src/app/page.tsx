
import NavBar from "../components/ui/navigationBar/NavBar";
import TabBar from "../components/ui/multipleTabBar/tabBar"

export default function Home() {

  if (!NavBar){
    return (
      <>
      <div className="h-[400px] bg-red-400">
      </div>
      </>
    )
  }
  
  return (
    <>
      <div>
        <div>
          <NavBar />
          <TabBar />
        </div>
      </div>
    </>
  )
}
