import React,{useContext} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { fade, makeStyles } from '@material-ui/core/styles';
import {Link} from 'react-router-dom'
import './shopitemslist.css'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { CartContext } from '../context/Global'
import Countup from 'react-countup'

const useStyles = makeStyles((theme) => ({
  
  root: {
    flexGrow: 1,
    
    
  },
  menuButton: {
    marginRight: theme.spacing(2),
    
  },
  title: {
    flexGrow: 1,
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
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
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
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function Header() {
  const classes = useStyles();
  const [cart] = useContext(CartContext)
    const totalamount = cart.reduce((acc, curr) => acc + curr.price, 0)
    // var ab = setcart(() => console.log('hello world'))
  
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
          <ShoppingCartIcon /><span className="p">𝔰𝔥𝔬𝔭𝔭𝔦𝔫𝔤 𝔠𝔞𝔯𝔱</span>
          </Typography>
          
          <Typography className={classes.title} variant="h6" noWrap>
            
          </Typography>
          <h1 className="h">Total Amount: <span className="u">$<Countup start={0} end={totalamount} duration={2.75} /></span></h1>
          
          <Link className="a" to='/'>Home</Link>
            <Link className="a" to='/cart'>Cart</Link><AddShoppingCartIcon />
        </Toolbar>
      </AppBar>
    </div>
  );
}
