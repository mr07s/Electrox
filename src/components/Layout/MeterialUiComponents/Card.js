import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';

export default function MuiCard(props) {

const navigate=useNavigate();

  return (
    
    <Card sx={{ maxWidth: 345}}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={`${process.env.REACT_APP_API}/api/v1/products/product-photo/${props.product_id}`}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.product_name}
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
          {props.product_price}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {props.products_description.substring(0,60)}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Add to cart</Button>
        <Button size="small" onClick={()=>navigate(`/product/${props.product_slug}`)}>Learn More</Button>
      </CardActions>
    </Card>
   
  );
}