import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function MuiCard(props) {
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
        <Typography variant="body2" color="text.secondary">
        {props.products_description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
   
  );
}