import { useNavigate } from 'react-router-dom';
import { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import { Typography, Toolbar, Box, Button, Container } from "@mui/material"
import { useSelector } from 'react-redux'
import Theme from '../components/Theme'
import { auth, logout } from '../config/firebase'
import { onAuthStateChanged } from 'firebase/auth'




function Header() {
    const navigate = useNavigate()
    const [userExists, setUserExists] = useState(false)
    const [showCart, setShowCart] = useState(false)
    const cart = useSelector (state => state.cartReducer.cart)

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
          if (user) {
            setUserExists(true)
            navigate('/dashboard')
          }
          else {
            setUserExists(false)
            navigate('/')
           
          }
        });
      }, [])
   

    let totalPrice = 0
    cart.map(item => {
        totalPrice += item.price
    })

    return <React.Fragment>
        <AppBar position='static' sx={{ background: 'white', height: '80px' }}>
            <Toolbar >
                <Box
                    component="img"
                    sx={{
                        height: 64,
                    }}
                    alt=""
                    src="https://images.deliveryhero.io/image/foodpanda/groceries-landing/pandamart.png"
                />
                <Typography sx={{ color: 'deeppink', fontSize: 'x-large' }}>Foodpanda</Typography>
                <Typography sx={{ color: 'deeppink', fontSize: 'x-large', marginLeft: '100px', marginRight: '50px' }}>Location:Karachi</Typography>
                <Theme />
                {userExists ? <Button variant="outlined" color="error" onClick={logout}  sx={{ background: 'white', color: 'deeppink', border: '1px solid deeppink', marginLeft: '300px', fontSize: 'large' }}>Log out</Button>:
                <Button variant="outlined" color="error" onClick={() => { }} component={Link} to={'/signin'} sx={{ background: 'white', color: 'deeppink', border: '1px solid deeppink', marginLeft: '300px', fontSize: 'large' }}>Log in</Button>}
                <Button variant="outlined" color="error" onClick={() => { }} component={Link} to={'/signin'} sx={{ background: 'white', color: 'deeppink', border: '1px solid deeppink', fontSize: 'large', marginLeft: '20px' }}> Sign up</Button>
                <Button onClick={() => setShowCart(!showCart)} sx={{ color: 'deeppink' }}><img width={50} src='https://cdn.pixabay.com/photo/2023/04/13/12/30/cart-7922463_1280.png' /></Button>
                {showCart && <div style={{ position: 'absolute', top: 100, right: 10, backgroundColor: 'white', width: '300px', color: 'deeppink', fontSize: 'large', border: '1px solid deeppink', borderRadius: '10px', padding: '10px', zIndex: 1 }}>
                    {cart.map(item => {
                        return <div>{item.item} | Rs {item.price}</div>
                    })}
                    <p><b>Total Price: Rs. {totalPrice}</b></p>
                

                </div>}

            </Toolbar>
        </AppBar>


    </React.Fragment>
}

export default Header