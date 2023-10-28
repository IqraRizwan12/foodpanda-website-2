import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea,Grid } from '@mui/material';
import { Link } from 'react-router-dom'

function Cards(){
    return (
        <Grid container spacing={2}>
        <Grid item xs={11}>
        <Card sx={{ width:'100%',marginTop:'20px',marginRight:'20px',marginBottom:'20px' }}>
        <CardActionArea onClick={() => {}} component={Link}  to={'/detail:id'}>
          <CardMedia
            component="img"
            height="180"
            image="https://images.deliveryhero.io/image/fd-pk/LH/s4av-hero.jpg"
            alt="Jackpot burger"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              The Sauce Burger Cafe
            </Typography>
            <Typography variant="body2" color="text.secondary">
              $$$, Fastfood
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      </Grid>
      {/* <Grid item xs={3}>
        <Card sx={{ width:'100%',marginTop:'20px',marginRight:'20px',marginBottom:'20px' }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="180"
            image="https://images.deliveryhero.io/image/fd-pk/Products/7412412.jpg?width=%s"
            alt="Creamy chiken tikka pizza"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
             California Pizza
            </Typography>
            <Typography variant="body2" color="text.secondary">
              $$$, Pizza
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      </Grid>
      <Grid item xs={3}>
        <Card sx={{ width:'100%',marginTop:'20px',marginRight:'20px',marginBottom:'20px' }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="180"
            image="https://images.deliveryhero.io/image/fd-pk/LH/s5sv-listing.jpg"
            alt="Fastfood"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
             KFC
            </Typography>
            <Typography variant="body2" color="text.secondary">
              $$$, Fastfood
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      </Grid>
      <Grid item xs={3}>
        <Card sx={{ width:'100%',marginTop:'20px',marginRight:'20px',marginBottom:'20px' }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="180"
            image="https://images.deliveryhero.io/image/fd-pk/LH/ua6j-hero.jpg?width=480&height=360&quality=45"
            alt="Extreme Chinese"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
             Ginsoy
            </Typography>
            <Typography variant="body2" color="text.secondary">
              $$$, Chinese
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      </Grid>
      <Grid item xs={3}>
        <Card sx={{ width:'100%',marginTop:'20px',marginRight:'20px',marginBottom:'20px' }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="180"
            image="https://images.deliveryhero.io/image/fd-pk/Products/5412486.jpg?width=%s"
            alt="Steak . Pasta . Fastfood"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
             Koffie Chalet
            </Typography>
            <Typography variant="body2" color="text.secondary">
              $$$, Steak . Pasta . Fastfood
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      </Grid>
      <Grid item xs={3}>
        <Card sx={{ width:'100%',marginTop:'20px',marginRight:'20px',marginBottom:'20px' }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="180"
            image="https://images.deliveryhero.io/image/fd-pk/LH/kbvr-hero.jpg"
            alt="Steaks"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
             Xander's
            </Typography>
            <Typography variant="body2" color="text.secondary">
              $$$, Steak . Pasta . Fastfood
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      </Grid>
      <Grid item xs={3}>
        <Card sx={{ width:'100%',marginTop:'20px',marginRight:'20px',marginBottom:'20px' }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="180"
            image="https://images.deliveryhero.io/image/fd-pk/LH/s4sj-hero.jpg?width=480&height=360&quality=45"
            alt="Mandi"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
             Ridan 
            </Typography>
            <Typography variant="body2" color="text.secondary">
              $$$, Middle Eastern
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      </Grid>
      <Grid item xs={3}>
        <Card sx={{ width:'100%',marginTop:'20px',marginRight:'20px',marginBottom:'20px' }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="180"
            image="https://images.deliveryhero.io/image/fd-pk/LH/w7uh-hero.jpg?width=512&height=384&quality=45"
            alt="Pasta .Pakistani . Karahi & Handi"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
             Pranzo 
            </Typography>
            <Typography variant="body2" color="text.secondary">
              $$$, Pasta .Pakistani . Karahi & Handi
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      </Grid> */}
      
      </Grid>
      

    )
}
export default Cards