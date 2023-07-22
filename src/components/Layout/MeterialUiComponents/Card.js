import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../../context/cart";
import { toast } from "react-hot-toast";
import './Card.css'










export default function MuiCard(props) {
  const navigate = useNavigate();
  const [cart, setCart] = useCart();
  console.log(cart);

  // const product_name =props.product_name;

  return (
    <Card
    id='main_card'
    sx={{
      maxWidth: 355,
      // border: "1px solid black",
      display: "flex",
      flexDirection: "column",
      margin:'1.2rem',
      minWidth:300,
      marginRight:'2rem',
      height:'55vh',
      maxHeight:'70vh',
      boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
      borderRadius:'15px',
      ':hover': {
        boxShadow: 20, // theme.shadows[20]
      },
    }}
    >
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={`${process.env.REACT_APP_API}/api/v1/products/product-photo/${props.product_id}`}
        sx={{
          minHeight:'50%',
          maxHeight:'50%',
        }}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {props.product_name}
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
          {` $ ${props.product_price} `}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.products_description.substring(0, 60)}
        </Typography>
      </CardContent>
      <CardActions    sx={{marginBottom:'1.2rem'}}>
        <Button
          size="small"
          onClick={() => {
            setCart([...cart, props]);
            localStorage.setItem("cart", JSON.stringify([...cart, props]));
            toast.success("One Item Added Successfully");
          }}
        >
          Add to cart
        </Button>
        <Button
          size="small"
          onClick={() => navigate(`/product/${props.product_slug}`)}
        >
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
