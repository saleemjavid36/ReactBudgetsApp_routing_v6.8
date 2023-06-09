// rrd imports
import { Outlet, useLoaderData } from "react-router-dom"
// assets
import wave from "../assets/wave.svg"
//helper functions
import { fetchData } from "../helpers"

//components
import { Nav } from "../components/Nav"

//loader
export function mainLoader(){
    const userName = fetchData('userName')
    return{userName}
}

export const Main = () => {

    const {userName}=useLoaderData()
  return (
    <div className="layout">
      <Nav userName={userName}/>
      <div>
        <Outlet/>
      </div>
      <img src={wave} alt="footer" /> 
    </div>
  )
}
