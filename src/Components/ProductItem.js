import styled from "styled-components";
import {db} from "../firebaseApp"
const Container=styled.div`
flex:1 0 21%;
max-height:30rem;
margin:2rem;
padding:1rem;
display:flex;
justify-content: space-between;
align-content: stretch;
position:relative;
background-color: #fff;
flex-wrap:wrap;
flex-direction:column;
`
const Title=styled.span``

const Price=styled.span`
font-weight:500;
margin-top:.5rem;
`
const Rating=styled.div` 
display:flex;
`
const Image=styled.img`
max-height:200px;
object-fit: contain;
`
const ActionSection=styled.div`
margin-top:1rem;
display:flex;
justify-content: center;
`

const AddToCartButton=styled.button`
width:8rem;
height:2rem;
cursor:pointer;
background-color:#f0c14b;
border:2px solid #a88734;
border-radius:2px;
`

function ProductItem({title,price,rating,image,id}){
    
    const addToCart=()=>{
 
       const cartItem= db.collection('cartitems').doc(id)
       cartItem.get().then((doc)=>{
            if (doc.exists) {
                cartItem.update({
                    quantity:doc.data().quantity+1
                })
            }else{
                db.collection('cartitems').doc(id).set({
                    name:title,
                    image:image,
                    price:price,
                    quantity:1
                })
            }
       })
      
    }


    return(
        <Container>
            <Title>
                {title}
            </Title>

            <Price>
                ${price}
            </Price>

            <Rating>
            {Array(rating)
            .fill()
            .map((_, index) => (
              <p key={index}>⭐</p>
            ))}
            </Rating>

            <Image src={image}/>

           <ActionSection>
           <AddToCartButton onClick={addToCart}>
                Add to cart
            </AddToCartButton>
           </ActionSection>
        </Container>
    )
}

export default ProductItem;