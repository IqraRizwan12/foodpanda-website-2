import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea,Grid } from '@mui/material';


function Cards(props){
  const { restaurant_name, cuisine_type,image_url } = props.data
    return (
        // <Grid container spacing={2} >
        // <Grid item xs={11}>
        <Card sx={{ width:'300px',margin:'5px',display:'inline-block' }}>
        <CardActionArea onClick={props.onClick}>
          <CardMedia
            component="img"
            height="180"
            image={image_url}
            alt="Jackpot burger"
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              {restaurant_name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
             {cuisine_type}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      // </Grid>
      // </Grid>
      

    )
}
export default Cards