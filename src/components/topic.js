import React,{useState} from 'react'
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import {useNavigate} from "react-router-dom"
import Paper from './Quetions'
import { Link } from 'react-router-dom'
import {toast, Toast,ToastContainer} from "react-toastify"
import {useCounterStore} from "./store";
import axios from 'axios';
import {useEffect} from "react";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
export default function FadeMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  // const close =!(Boolean(anchorEl))
  const navigate=useNavigate()
  const [topic,settopic]=useState([]);

  // call the addfuntionfrom store
  const addFruits = useCounterStore((state) => state.updateTopic);
  // const reset=useCounterStore(state => state.getquetions);
  const get=useCounterStore(state => state.getque);
  // const gettopics = useCounterStore(state => state.fetchTopic)
  // const topicsList = useCounterStore(state => state.topics)

  // useEffect(() => {
  //     gettopics()
  // }, [gettopics])
  
  
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const navigateHome = (e) => {
     addFruits(e.target.id);
    //  reset(e.target.id);
     axios.get(`http://localhost:8082/Exam/topic/?id=${e.target.id}`)
    .then(response => {
        // Handle response
        console.log(response);
        get(response)
        navigate('/Quetions/')
        
    })
    .catch(err => {
        // Handle errors
        toast.error("check network",{
          position:"top-center"
        })
        console.error(err);
    });
    //  console.log(e.target.id)
     
    // return(<Paper></Paper>)
  };

  

  return (
    <div className="menu">
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ mr: 2 }}
        onClick={handleClick}
      >
      <MenuIcon />
      </IconButton>
      <Menu
        id="fade-menu"
        MenuListProps={{
          'aria-labelledby': 'fade-button',
        }}
        anchorEl={anchorEl}
        open={open}
        // close={close}
        // onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem onClick={navigateHome}  id="1"  >HTML</MenuItem>
        <MenuItem onClick={navigateHome}  id="2"  >CSS</MenuItem>
        <MenuItem onClick={navigateHome}  id="3"  >JS</MenuItem>

        <ToastContainer/>
        
        
       
        
      </Menu>
      {/* {topicsList.map((item) =>{
          <h1>{item.topic}</h1>
          // <MenuItem   id={item.id}  >{item.topic}</MenuItem>

        })
        } */}
    </div>
  );
}