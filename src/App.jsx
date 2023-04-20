import { RouterProvider, createBrowserRouter } from 'react-router-dom'


// layouts
import { Main, mainLoader } from './layouts/Main'



// Routes
import { Dashboard, dashboardAction, dashboardLoader } from './pages/Dashboard'
import {Error} from './pages/Error'

// actions
import { logoutAction } from './actions/logout'

//libraries
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      loader: mainLoader,
      errorElement: <Error />,
      children: [
        {
          index: true,
          element: <Dashboard />,
          loader: dashboardLoader,
          action: dashboardAction,
        },
        {
          path: "logout",
          action: logoutAction
        }
      ]
    },
    
  ])
  return (
  <div className="App">
    <RouterProvider router={router}/>
    <ToastContainer/>
  </div>
  )
}

export default App
