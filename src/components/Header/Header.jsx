import React, {useState} from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
// import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import SearchIcon from '@material-ui/icons/Search';
import MoreIcon from '@material-ui/icons/MoreVert';
import brandgif from '../assets/text.gif'
import LockOpenIcon from '@material-ui/icons/LockOpen';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import Home from '../Home/Home';
import { Box, Button } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';
import { useRoute } from 'wouter';
import './header.css'
const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));

export default function Header(props) {
  const [valueToSearch, setValueToSearch] = useState("")
  const [isOnSearchPage, params] = useRoute('/search_results')
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('token')) 
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);


  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  // const handleProfileMenuOpen = (event) => {
  //   setAnchorEl(event.currentTarget);
  // };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };
  const history = useHistory()
  const logoutHandler = function () {
    localStorage.removeItem("token");
    history.push('/')
    setIsLoggedIn(null)
// setloginstatus(false)
};


  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
      >
      <MenuItem>
      <Button color="inherit" size="large" component={Link} to="/">Home</Button>
       
      </MenuItem>
      <MenuItem>
      <Button color="inherit" size="large" component={Link} to="/Favourites">Favourites</Button>
      </MenuItem>
      <MenuItem>
            <Button color="inherit" size="large" component={Link} to="/myGifs">My Gifs</Button>
        
      </MenuItem>
      {
        isLoggedIn && 
        <MenuItem>
        <IconButton aria-label="show 4 new mails" color="inherit">
          <Badge>
          <Button variant="contained" onClick={ logoutHandler }  color="secondary" ><ExitToAppIcon />Logout</Button>
          </Badge>
        </IconButton>
        
      </MenuItem>
      }
      {!isLoggedIn &&
      <MenuItem>
      <IconButton aria-label="show 11 new notifications" color="inherit">
        <Badge >
         <Button variant="contained"  component={Link} to="/Login" color="secondary" data-testid="menubutton"> <LockOpenIcon />Login</Button> 
        </Badge>
      </IconButton>
      
    </MenuItem>}

    {
      !isLoggedIn &&
      <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <Badge>
            <Button variant="contained" component={Link} to="/Register" color="secondary"> <VpnKeyIcon />Register</Button>
          </Badge>
        </IconButton>
      </MenuItem>
    }
      
    </Menu>
  );
  const submitEventHandler = (e) =>{
    e.preventDefault()
    console.log(valueToSearch);
    props.passSearchValue(valueToSearch)
    setValueToSearch('')
    history.push('/search_results')
  }

  return (
    <div>
      <div className={classes.grow}>
      <AppBar position="static" className="myHeader">
        <Toolbar>
          {/* <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton> */}
          <a href="/">
          <img style={{height:"5.5em", width:"7em", marginRight:"1em", cursor: "pointer"}} src={brandgif} alt="brand"/>
          </a>
          <Typography className={classes.title} variant="h6" noWrap>
          <div className={classes.sectionDesktop}>
          <Button color="inherit" size="large" component={Link} to="/">Home</Button>
            <Button color="inherit" size="large" component={Link} to="/Favourites">Favourites</Button>
            <Button color="inherit" size="large" component={Link} to="/myGifs">My Gifs</Button>
                       </div>
          </Typography>
          
          <div className={classes.grow} />
          {!isOnSearchPage && 
          <div>
            <form className="form-inline my-2 my-lg-0" onSubmit={(e)=>{submitEventHandler(e)}}>
          <input className="form-control" type="search" placeholder="Search" aria-label="Search" 
            value={valueToSearch} onChange={(e)=>setValueToSearch(e.target.value)}
          />
          <button className="btn btn-dark my-2 mr-2 my-sm-0" type="submit"><SearchIcon /></button>
        </form>
          </div>
          }
          <div className={classes.sectionDesktop}>
            {
              isLoggedIn && 
              <Box mx={1} my={1}>
              <Button variant="contained" onClick={ logoutHandler }  color="secondary" >Logout</Button>
          </Box>
            }
            {!isLoggedIn &&
             <Box mx={1} my={1}>
             <Button variant="contained"  component={Link} to="/Login" color="secondary" data-testid="btnbutton" >Login</Button>
         </Box>
            }
          {!isLoggedIn &&
            <Box mx={1} my={1}>
            <Button variant="contained" component={Link} to="/Register" color="secondary" data-testid="btnbutton1">Register</Button>
        </Box>
            }
            {/* <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton> */}
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="secondary"
            >
              <MoreIcon/>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
    <Home />
    </div>
  );
}
