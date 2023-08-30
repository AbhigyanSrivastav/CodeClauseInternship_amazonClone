import styled from "styled-components";
import CartItem from './CartItem'

const Container=styled.div`
height:300px;
flex:0.8;
padding:20px;
margin-right:18px;
background-color:white;
`
const Title=styled.div`

`
const ItemsContainer=styled.div`

`
const CartItems = () => {
  return (
    <Container>
        <Title>
            Shopping Cart
        </Title>
        <hr/>
       <ItemsContainer>
        <CartItem>

        </CartItem>
       </ItemsContainer>

    </Container>
  )
}

export default CartItems