import styled from "styled-components";
import BannerImg from "../Assests/Banner.png"
import ProductItem from './ProductItem'
import {db} from '../firebaseApp'
import { useEffect, useState } from "react";
// import { useState } from "react";

const Container=styled.div`
min-width:90vw;
margin:0 auto;

`
const Banner=styled.div`
min-height:60vh;
background-image:url(${BannerImg});
background-repeat:no-repeat;
background-size:cover;
mask-image:linear-gradient(to bottom,rgba(0,0,0,1),rgba(0,0,0,0));
-webkit-mask-image:linear-gradient(to bottom,rgba(0,0,0,1),rgba(0,0,0,0));

`
const Content=styled.div`
    padding: 0 1rem 0 1rem;
    margin-top: -12rem;
    display:flex;
`

function Home(){

    const[products,setProducts]=useState([]);
    const getProducts=()=>{
        db.collection('products').onSnapshot((snapshot)=>{
            
            let tempProduct=[]

            tempProduct=snapshot.docs.map((doc)=>(
                {
                    id:doc.id,
                    product:doc.data()
                }
            ))
                
            setProducts(tempProduct)
        })
    }
    
    useEffect(()=>{
        getProducts();
        
    },[])
    


    return(
        <Container>
            <Banner>

            </Banner>

            <Content>
                {
                    products.map((data)=>(
                        <ProductItem
                            title={data.product.name}
                            price={data.product.price}
                            rating={data.product.rating}
                            image={data.product.image}
                            key={data.id}
                        />
                    ))
                }
            </Content>
        </Container>
    )
}

export default Home;