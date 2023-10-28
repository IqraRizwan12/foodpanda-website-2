import {
    createBrowserRouter,
    RouterProvider,
    Outlet,
    useNavigate
} from "react-router-dom"

import Dashboard from "../views/Dashboard"
import Header from '../components/Header'
import Footer from "../components/Footer"
import Signin from "../views/Signin"
import Homepage from "../views/Homepage"
import Detail from '../views/Detail'




const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Homepage/>
            },
            {
                path: "/signin",
                element: <Signin/>
            },
            {
                path: "/dashboard",
                element: <Dashboard/>
            },
            {
                path: "/detail:id",
                element: <Detail/>
            },
            
        ]
    }
])
function Router() {
    return <RouterProvider router={router} />
}

function Main(){
    const navigate = useNavigate()
    
    return(
    
    <div>
        <Header/>
        <Outlet/>
        <Footer/>
    </div>
    
   

   
    )
}
export default Router