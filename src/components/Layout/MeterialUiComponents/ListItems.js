import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import StarIcon from "@mui/icons-material/Star";
import { Link, NavLink } from "react-router-dom";
import "./ListItem.css";

export default function ListItems(props) {
  return (
    <List
      sx={{
        width: "100%",
        maxWidth: 360,
        bgcolor: "background.paper",
        border: "1px solid black",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
      }}
      aria-label="contacts"
    >
      <ListItem disablePadding>
        <NavLink
          to={props.Link1}
          className="Admin_link"
         
        >
          <ListItemButton >
            <ListItemText inset primary={props.name1} />
          </ListItemButton>
        </NavLink>
      </ListItem>

      <ListItem disablePadding>
        <NavLink
          to={props.Link2}
          className="Admin_link"
          sx={{ color: "black", textDecoration: "none" }}
        >
          <ListItemButton >
            <ListItemText inset primary={props.name2} />
          </ListItemButton>
        </NavLink>
      </ListItem>
      <ListItem disablePadding>
        <NavLink
          to={props.Link3}
          className="Admin_link"
          sx={{ color: "black", textDecoration: "none" }}
        >
          <ListItemButton >
            <ListItemText inset primary={props.name3} />
          </ListItemButton>
       
        </NavLink>
      
      </ListItem>
      <ListItem disablePadding>
        <NavLink
          to={props.Link4}
          className="Admin_link"
          sx={{ color: "black", textDecoration: "none" }}
        >
          <ListItemButton >
            <ListItemText inset primary={props.name4} />
          </ListItemButton>
       
        </NavLink>
      
      </ListItem>
    </List>
  );
}
