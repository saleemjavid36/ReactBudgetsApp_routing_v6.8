import { RouterProvider, createBrowserRouter } from 'react-router-dom'


// layouts
import { Main, mainLoader } from './layouts/Main'



// Routes
import { Dashboard, dashboardLoader } from './pages/Dashboard'
import {Error} from './pages/Error'


function App() {
  
  const router = createBrowserRouter([
    {
      path: "/",
      element:<Main/>,
      loader:mainLoader,
      errorElement:<Error/>,
      children:[
        {
          index:true,
          element:<Dashboard/>,
          loader:dashboardLoader,
          errorElement:<Error/>,
        }
      ]
    },
    
  ])
  return (
  <div className="App">
    <RouterProvider router={router}/>
  </div>
  )
}

export default App
