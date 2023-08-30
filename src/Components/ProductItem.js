import styled from "styled-components";
const Container=styled.div`
flex:1;
max-height:30rem;
margin:2rem;
padding:1rem;
display:flex;
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

function ProductItem(props){
    const{title,price,rating,image}=props
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
           <AddToCartButton>
                Add to cart
            </AddToCartButton>
           </ActionSection>
        </Container>
    )
}

export default ProductItem;