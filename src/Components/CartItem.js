import styled from "styled-components";
import { db } from "../firebaseApp";

const Container=styled.div`
padding-top:12px;
padding-bottom:12px;
display:flex;
align-items:center;
`
const ImageContainer=styled.div`
height:180px;
width:180px;
flex-shrink:0;
flex-grow:0;
margin-right:1rem;
img{
    object-fit:contain;
    height:100%;
    width:100%;
}
`
const CartItemInfo=styled.div`
flex-grow:1;
`

const CartItemInfoTop=styled.div`
color:#007185;
h2{
    font-size:1.5rem;
}
`
const CartItemInfoBottom=styled.div`
display:flex;
align-items:center;
margin-top:.5rem;
`
const CartItemQuantityContainer=styled.div`

`
const Minus=styled.span`
 width:15px;
 height:15px;
 background:#f2f2f2;
 border-radius:4px;
 padding:0px 5px 15px 5px;
 border:1px solid #ddd;
 display: inline-block;
 vertical-align: middle;
 text-align: center;
 cursor:pointer;
`
const Number=styled.input`
margin:.5rem;
padding:0 .5rem 0 .5rem;
width:2rem;
text-align: center;
font-size: 26px;
border:1px solid #ddd;
border-radius:4px;
display: inline-block;
vertical-align: middle;
`
const Plus=styled.span`
width:15px;
height:15px;
background:#f2f2f2;
border-radius:4px;
padding:0px 5px 15px 5px;
border:1px solid #ddd;
display: inline-block;
vertical-align: middle;
text-align: center;
cursor:pointer;
`

const CartItemDeleteContainer=styled.div`
color:#007185;
margin-left:1rem;
cursor:pointer;

`

const CartItemPrice=styled.div`
font-size:1.5rem;
font-weight:700;
margin-left:1rem;
`


function CartItem({id,item}){
    const{name,price,quantity,image}=item

    let quantityValue=quantity;

    const handleMinus=()=>{
        const cartItem=db.collection('cartitems').doc(id)
        cartItem.get().then((doc)=>{
           (doc.exists) && cartItem.update({
                quantity:(quantity>1)?doc.data().quantity-1:1
            })
        })
    }
    const handlePlus=()=>{
        const cartItem=db.collection('cartitems').doc(id)
        cartItem.get().then((doc)=>{
           (doc.exists) && cartItem.update({
                quantity:doc.data().quantity+1
            })
        })
    }

   const handleDelete=()=>{
        db.collection('cartitems').doc(id).delete();
    }

    return(
        <Container>
            <ImageContainer>
                <img src={image} alt="Product"/>
            </ImageContainer>

            <CartItemInfo>
                <CartItemInfoTop>
                    <h2>
                    {name}
                    </h2>
                </CartItemInfoTop>
                <CartItemInfoBottom>
                    <CartItemQuantityContainer>

                        <Minus onClick={handleMinus}>-</Minus>
                        <Number value={quantityValue}>
                        </Number>
                        <Plus onClick={handlePlus}>+</Plus>
	                    
                    </CartItemQuantityContainer>

                    <CartItemDeleteContainer onClick={handleDelete}>
                            Delete
                    </CartItemDeleteContainer>

                </CartItemInfoBottom>
            </CartItemInfo>

            <CartItemPrice>
                    ${price}
            </CartItemPrice>
        </Container>
    )
}

export default CartItem;
