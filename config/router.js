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
import { postRestaurants } from "./firebase"
import { useSelector } from 'react-redux'
import Theme from "../store/theme"





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
                path: "/restro/:restro_id",
                element: <Detail/>
            },
            
        ]
    }
])
function Router() {
    return <RouterProvider router={router} />
}

function Main(){
   const theme = useSelector(state => state.themeReducer.theme)
//    console.log('theme',theme)
    //  function restaurants(){
    //      postRestaurants()
    // }
    
    return(
    
    <div className={theme} >
        <Header/>
        {/* <Theme/> */}
        {/* <button onClick={restaurants}>Restaurants</button> */}
        <Outlet/>
        <Footer/>
    </div>
    
   

   
    )
}
export default Router