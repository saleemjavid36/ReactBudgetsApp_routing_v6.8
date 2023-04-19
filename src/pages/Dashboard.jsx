import { useLoaderData } from "react-router-dom"
import { fetchData } from "../helpers"

//loader
export function dashboardLoader(){
    const userName = fetchData('userName')
    return{userName}
}

export const Dashboard = () => {
    const {userName}=useLoaderData()
  return (
      <div>
        Dashboard
          <h1>{userName}</h1>
      </div>
  )
}
