import { Grid } from "@mui/material"
import Cards from "../components/Cards"


function Dashboard(){

    return (
       <Grid sx={{display:'flex'}}> 
       <Cards/>
       <Cards/>
       <Cards/>
       <Cards/>
       <Cards/>
       </Grid>
   

    )

}
export default Dashboard