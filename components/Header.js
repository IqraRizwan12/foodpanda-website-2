import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import { Typography,Toolbar,Box,Button,Container } from "@mui/material"


function Header(){
    
    return <React.Fragment>
    <AppBar position='static' sx={{background:'white',height:'80px'}}>
        <Toolbar >
        <Box
        component="img"
        sx={{
        height: 64,
        }}
        alt=""
        src="https://images.deliveryhero.io/image/foodpanda/groceries-landing/pandamart.png"
     />
        <Typography sx={{color:'deeppink',fontSize:'x-large'}}>Foodpanda</Typography>
        <Typography sx={{color:'deeppink',fontSize:'x-large',marginLeft:'200px'}}>Location:Karachi</Typography>
        <Button variant="outlined" color="error" onClick={() => {}} component={Link}  to={'/signin'} sx={{background:'white', color:'deeppink',border:'1px solid deeppink',marginLeft:'200px',fontSize:'large'}}>Log in</Button>
        <Button variant="outlined" color="error" onClick={() => {}} component={Link}  to={'/signin'} sx={{background:'white',color:'deeppink',border:'1px solid deeppink',fontSize:'large',marginLeft:'20px'}}> Sign up</Button>
        <Button variant="outlined" color="error" sx={{background:'white',color:'deeppink',border:'1px solid deeppink',fontSize:'large',marginLeft:'20px'}}> Add To Cart</Button>
        </Toolbar>
    </AppBar>


   </React.Fragment>
}

export default Header