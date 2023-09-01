import styled from "styled-components";
import HeaderLogoImg from "../Assests/HeaderLogoImg.png"
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import {Link} from 'react-router-dom'
// Styling
const Container=styled.div`
height:4em;
background-color: #0F1111;
color:white;
display:flex;
align-items:center;
justify-content:space-between; 
gap:1rem;
`

const HeaderLogo=styled.div`
img{
    width:8rem;
    margin:1rem 1rem 0rem 1rem;
}
`
const HeaderOptionAdress = styled.div`
display:flex;
align-items:center;
`

const OptionLineOne=styled.div``

const OptionLineTwo=styled.div`
font-weight:700;
`

const HeaderSearch=styled.div`
    display:flex;
    align-items:center;
    flex-grow:1;
    height:2.5rem; 
    border-radius:.5rem;
    background-color:white;
    :focus-within{
        box-shadow:0 0 0 3px #F90;
    }
    
`

const HeaderSearchInput=styled.input`
flex-grow:1;
height:inherit;
border:0;
border-radius:0.3rem 0.2rem 0.2rem 0.3rem;

`

const HeaderSearchIconContainer=styled.div`
background-color:#febd69;
width:2.5rem;
height:2.59rem;
color:black;
display:flex;
justify-content:center;
align-items:center;
border-radius:0rem 0.5rem 0.5rem 0rem;
`

const HeaderNavItems=styled.div`
display:flex;
align-items:center;
gap:1rem;
`
const HeaderOption=styled.div`
    font-size:.9rem;
`

const HeaderOptionCart=styled.div`
display:flex;
align-items:center;
gap:.3rem;
padding:.8rem;
color:white;
cursor:pointer;
`

const CartCount=styled.div`
font-weight:700;
color:#f08804;
`

function Header({cartItems}) {
  return( 
  <Container>

   <Link to='/'>
   <HeaderLogo>
        <img src={HeaderLogoImg} alt="Logo"/>
    </HeaderLogo>
   </Link>

    <HeaderOptionAdress>
        
        <LocationOnIcon/>
        <HeaderOption>
       <OptionLineOne>Hello,</OptionLineOne>
       <OptionLineTwo>Select your Address</OptionLineTwo>
       </HeaderOption>
    </HeaderOptionAdress>

  <HeaderSearch>
        <HeaderSearchInput type="text"/>

        <HeaderSearchIconContainer>
            <SearchIcon/>
        </HeaderSearchIconContainer>

  </HeaderSearch>

  <HeaderNavItems>
        <HeaderOption>
            <OptionLineOne>Hello,John</OptionLineOne>
            <OptionLineTwo>Account & Lists</OptionLineTwo>
        </HeaderOption>
        <HeaderOption>
            <OptionLineOne>Returns</OptionLineOne>
            <OptionLineTwo>&Orders</OptionLineTwo>
        </HeaderOption>
        
        <Link to='/cart' style={{'textDecoration':'none'}}>
        <HeaderOptionCart>
            <ShoppingBasketIcon/>
            <CartCount>
                    {cartItems.length}
            </CartCount>
        </HeaderOptionCart>
        </Link>
  </HeaderNavItems>
  </Container>
  );
}

export default Header;
