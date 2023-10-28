import * as React from 'react';
import { Grid, Link, Typography } from '@mui/material'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import { CardActionArea } from '@mui/material';



function Detail() {
    return <React.Fragment>
        <Link marginLeft='50px' marginRight='10px' color='#ff1493' underline="always"
            href="http://localhost:3000/"
        >
            Homepage
        </Link>
        <Link marginRight='10px' color='#ff1493' underline="always" href="http://localhost:3000/dashboard">
            Karachi
        </Link>
        <Typography variant="body2" color="text.secondary" sx={{ marginLeft: '50px' }}>Burgers . Fries </Typography>
        <Typography variant="h5" component="div" sx={{ marginLeft: '50px' }}>The Sauce Burger Cafe</Typography>
        <Typography sx={{ marginLeft: '50px' }}>Free delivery . Rs 249 Minimum </Typography>
        <br />
        <Card sx={{margin:'auto'}}>
            <CardActionArea>
                <CardContent>
                    <Typography variant="h4" sx={{ textAlign: 'center' }}>Menu</Typography>
                    <Card sx={{ width: '30%',margin:'auto',display:'flex',marginBottom:'20px'}}>
                        <CardContent>
                            <Typography variant="h5" component="div" >Jalapeno Beef</Typography>
                            <Typography variant="body2" color="text.secondary">Pickle Sauce, Chilli Buffalo Sauce, Jalapeno, Iceberg, Crispy Beef Patty</Typography>
                            <Typography variant="h5" component="div">Rs 450</Typography>
                        </CardContent>
                        <CardMedia 
                            component="img"
                            height="100"
                            image="https://images.deliveryhero.io/image/fd-pk/LH/s4av-hero.jpg"
                            alt="Jalapeno Beef burger"
                        />
                    </Card>
                    <Card sx={{ width: '30%', display:'flex',margin:'auto',marginBottom:'20px' }}>
                        <CardContent>
                            <Typography variant="h5" component="div" >Buffalo Beef</Typography>
                            <Typography variant="body2" color="text.secondary">Buffalo Sauce, BBQ Sauce, Capsicum, Iceberg, Grilled Beef Patty</Typography>
                            <Typography variant="h5" component="div">Rs 420</Typography>
                        </CardContent>
                        <CardMedia 
                            component="img"
                            height="100"
                            image="https://images.deliveryhero.io/image/fd-pk/LH/s4av-hero.jpg"
                            alt="Buffalo Beef burger"
                        />
                    </Card>
                    <Card sx={{ width: '30%',display:'flex',margin:'auto',marginBottom:'20px' }}>
                        <CardContent>
                            <Typography variant="h5" component="div" >Vintage Chicken</Typography>
                            <Typography variant="body2" color="text.secondary">Mayo sauce, iceberg & crispy plain patty</Typography>
                            <Typography variant="h5" component="div">Rs 400</Typography>
                        </CardContent>
                        <CardMedia 
                            component="img"
                            height="100"
                            image="https://images.deliveryhero.io/image/fd-pk/LH/s4av-hero.jpg"
                            alt="Vintage Chicken Burger"
                        />
                    </Card>
                    <Card sx={{ width: '30%',display:'flex',margin:'auto',marginBottom:'20px' }}>
                        <CardContent>
                            <Typography variant="h5" component="div" >Double Beef</Typography>
                            <Typography variant="body2" color="text.secondary">Pickle Sauce, Pickle, Onion Ring, Tomato, Grilled Beef Patty</Typography>
                            <Typography variant="h5" component="div">Rs 620</Typography>
                        </CardContent>
                        <CardMedia 
                            component="img"
                            height="100"
                            image="https://images.deliveryhero.io/image/fd-pk/LH/s4av-hero.jpg"
                            alt=" Beef burger"
                        />
                    </Card>

                </CardContent>
            </CardActionArea>
        </Card>
        


    </React.Fragment>
}
export default Detail