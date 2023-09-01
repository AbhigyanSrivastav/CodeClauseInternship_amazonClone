import styled from "styled-components";
import CartItem from './CartItem'

const Container=styled.div`
flex:0.7;
padding:20px;
margin-right:18px;
background-color:white;
`
const Title=styled.div`

`
const ItemsContainer=styled.div`

`
const CartItems = ({cartItems}) => {
  return (
    <Container>
        <Title>
           <h2>Shopping Cart</h2>
        </Title>
        <hr/>
       <ItemsContainer>

        {
            cartItems.map((item)=>(
                <CartItem
                    key={item.id}
                    id={item.id}
                    item={item.product}
                />
            ))
        }
       </ItemsContainer>

    </Container>
  )
}

export default CartItems