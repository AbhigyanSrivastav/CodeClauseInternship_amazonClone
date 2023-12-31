import styled from "styled-components";
import CartItems from "./CartItems";
import CartTotal from "./CartTotal";


const Container=styled.div`
display:flex; 
padding:14px 18px 0px 18px;
align-items:flex-start;
`

function Cart({cartItems}){
    return(
        <Container>
                <CartItems cartItems={cartItems}/>
                <CartTotal  cartItems={cartItems}/>
        </Container>
    )
}

export default Cart;