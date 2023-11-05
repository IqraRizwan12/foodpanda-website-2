import * as React from 'react';
import { Button, Grid, Link, Typography } from '@mui/material'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import { CardActionArea } from '@mui/material';
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { getSingleData } from "../config/firebase"
import 'react-tabs/style/react-tabs.css'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import {  useDispatch } from 'react-redux'
import { AddCartToStore } from '../store/cart';

function Detail() {

    const [restroData, setRestroData] = useState()
    const { restro_id } = useParams()
    const dispatch = useDispatch()

    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        const data = await getSingleData(restro_id)
        setRestroData(data)
    }
    console.log('restroData -->')
    console.log(restroData)

    if (!restroData) {
        return <div>Loading...</div>
    }

    const { opening_hours, restaurant_name, address, cuisine_type, menu_categories } = restroData
    const open_hours = []

    for (let key in opening_hours) {
        open_hours.push(`${key}: ${opening_hours[key]}`)
    }

    function addToCart(item){
        dispatch(AddCartToStore(item))
    }


    return <React.Fragment>
        <Link marginLeft='50px' marginRight='10px' color='#ff1493' underline="always"
            href="http://localhost:3000/"
        >
            Homepage
        </Link>
        <Link marginRight='10px' color='#ff1493' underline="always" href="http://localhost:3000/dashboard">
            Karachi
        </Link>
        <Typography variant="body2" color="text.secondary" sx={{ marginLeft: '50px' }}>{cuisine_type}</Typography>
        <Typography variant="h5" component="div" sx={{ marginLeft: '50px' }}>{restaurant_name}</Typography>
        <Typography sx={{ marginLeft: '50px' }}>Free delivery . Rs 249 Minimum </Typography>
        <Typography variant="h5" component="div" sx={{ marginLeft: '50px' }}>Timings:</Typography>
        {open_hours.map(item => <Typography variant="body2" color="text.secondary" sx={{ marginLeft: '50px' }}>{item}</Typography>)}
        <br />

        <Tabs>
            <TabList>
                {menu_categories.map(function (item) {
                    return <Tab>{item.category_name}</Tab>
                })}

                {/* <Tab>Title 2</Tab> */}
            </TabList>

            <TabPanel>
                {menu_categories[0].items.map(function (item) {
                    return <Card sx={{ width: '30%', margin: 'auto', display: 'flex', marginBottom: '20px' }}>
                        <CardContent>

                            <Typography variant="h6" component="div" >{item.item}</Typography>
                            <Typography variant="h6" component="div">Rs. {item.price}</Typography>
                            <Button sx={{background: 'white', color: 'black', border: '1px solid black',fontSize:'small',width:'100px',height:'40px',margin:'20px',padding:'10px'}} onClick={()=>addToCart(item)}>Add to Cart</Button>

                        </CardContent>
                        <CardMedia
                            component="img"
                            height="180"
                            image={item.item_image_url}
                            alt="Jalapeno Beef burger"
                        />
                    </Card>
                })}

            </TabPanel>
            <TabPanel>
                {menu_categories[1].items.map(function (item) {
                    return <Card sx={{ width: '30%', margin: 'auto', display: 'flex', marginBottom: '20px' }}>
                        <CardContent>

                            <Typography variant="h5" component="div" >{item.item}</Typography>
                            <Typography variant="h5" component="div">Rs. {item.price}</Typography>
                            <Button  sx={{background: 'white', color: 'black', border: '1px solid black',fontSize:'small',width:'100px',height:'40px',margin:'20px',padding:'10px'}} onClick={()=>addToCart(item)}>Add to Cart</Button>

                        </CardContent>
                        <CardMedia
                            component="img"
                            height="180"
                            image={item.item_image_url}
                            alt="Jalapeno Beef burger"
                        />
                    </Card>
                })}

            </TabPanel>

            <TabPanel>
                {menu_categories[2].items.map(function (item) {
                    return <Card sx={{ width: '30%', margin: 'auto', display: 'flex', marginBottom: '20px' }}>
                        <CardContent>

                            <Typography variant="h5" component="div" >{item.item}</Typography>
                            <Typography variant="h5" component="div">Rs. {item.price}</Typography>
                            <Button  sx={{background: 'white', color: 'black', border: '1px solid black',fontSize:'small',width:'100px',height:'40px',margin:'20px',padding:'10px'}} onClick={()=>addToCart(item)}>Add to Cart</Button>

                        </CardContent>
                        <CardMedia
                            component="img"
                            height="180"
                            image={item.item_image_url}
                            alt="Jalapeno Beef burger"
                        />
                    </Card>
                })}

            </TabPanel>
        </Tabs>

    </React.Fragment>
}
export default Detail