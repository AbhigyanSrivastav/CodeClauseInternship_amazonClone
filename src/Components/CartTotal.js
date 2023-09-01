import styled from "styled-components";

const Container=styled.div`
flex:0.3;
padding:20px;
background-color:white;
`
const Subtotal=styled.h2`
  margin-bottom:1rem;
`

const CheckoutButton=styled.button`
background-color:#f0c14b;
width:100%;
padding:4px 8px 4px 8px;
border:2px solid #a88734;
border-radius:5px;
cursor:pointer;
font-size:1rem;
:hover{
  background:#ddb347;
}
`

function CartTotal({cartItems}) {

  const getTotal=()=>{
    let totalQuantity=0;
    let total=0;
    cartItems.forEach((item)=>{
      total += (item.product.price*item.product.quantity)
      totalQuantity += item.product.quantity
    })

    return {total,totalQuantity};
  }
  return (
    <Container>
        <Subtotal>Subtotal ({getTotal().totalQuantity} items): ${getTotal().total}</Subtotal>
        <CheckoutButton>Proceed To Checkout</CheckoutButton>
        </Container>
  )
}

export default CartTotal