import { Link, NavLink } from "react-router-dom";
import "./ListItem.css";
import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';

export default function ListItems(props) {
  return (
    <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper',marginTop:'3rem' }}>
    
      <nav aria-label="secondary mailbox folders">
        <List>
          <ListItem disablePadding>
        <NavLink  to={props.Link1} className="Admin_link">
        <ListItemButton>
              <ListItemText primary={props.name1} />
            </ListItemButton>
        </NavLink>
          
          </ListItem>
          <ListItem disablePadding>
        <NavLink  to={props.Link2}  className="Admin_link">
        <ListItemButton>
              <ListItemText primary={props.name2} />
            </ListItemButton>
        </NavLink>
          
          </ListItem>
          <ListItem disablePadding>
        <NavLink  to={props.Link3}  className="Admin_link">
        <ListItemButton>
              <ListItemText primary={props.name3} />
            </ListItemButton>
        </NavLink>
          
          </ListItem>
          <ListItem disablePadding>
        <NavLink  to={props.Link4}  className="Admin_link">
        <ListItemButton>
              <ListItemText primary={props.name4} />
            </ListItemButton>
        </NavLink>
          
          </ListItem>
          <ListItem disablePadding>
        <NavLink  to={props.Link5}  className="Admin_link">
        <ListItemButton>
              <ListItemText primary={props.name5} />
            </ListItemButton>
        </NavLink>
          
          </ListItem>
      
        </List>
      </nav>
    </Box>
  );
}