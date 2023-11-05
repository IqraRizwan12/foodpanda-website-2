
import Cards from "../components/Cards"
import { getRestaurants } from "../config/firebase"
import {useEffect,useState} from 'react'
import { useNavigate } from 'react-router-dom'


function Dashboard(){

    const [restroData ,setRestroData] = useState([])
    const navigate = useNavigate()

    useEffect(()=>{
        getData()
    },[])

    const getData = async () =>{
      const data = await getRestaurants()
      setRestroData(data)
    }



    return (
      <div style={{margin:'10px',padding:'10px',textAlign:'center'
      }} >
        {restroData.map(item => {
        return <Cards
         data={item} 
         onClick={() => navigate(`/restro/${item.id}`)} 
         />
         })}
      </div>
   

    )

}
export default Dashboard