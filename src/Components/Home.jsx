import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Navbar from './Navbar';
import Card from './Card';
import axios from '../axios';



const Home = () => {
  //to dynamically get data instead of hardcoded in card
  const [products, setProducts] = useState("");

  //to get data get ap from db
  useEffect(() => {
    const fetchdata = async () => {
      try {
        const data = await axios.get("/products/get");
        setProducts(data);
      } catch (error) {
        console.error("Axios error: ", error.message);
      }
    };
    fetchdata();
  }, []);

  return (
    <Container>
      <Navbar />
      <Banner>
        <img src="./banner.jpg" alt="" />
        <img src="./mobile_banner.jpg" alt="" />
      </Banner>

      <Main>
        {/* to dynamically get data instead of hardcoded in card */}
        {products &&
          products?.data.map((product) => (
            <Card
              id={product._id}
              image={product.imageURL}
              price={product.price}
              rating={product.rating}
              title={product.title}
            />
          ))}

        {/* <Card
          id={1}
          image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbIm22Vj1Q30jeUifbWRN4XHEZeXp6YfwE9g&usqp=CAU"}
          price={2500}
          rating={3}
          title={"Echo Dot"} /> */}

        {/* <Card
          id={2}
          image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbIm22Vj1Q30jeUifbWRN4XHEZeXp6YfwE9g&usqp=CAU"}
          price={2500}
          rating={3}
          title={"Echo Dot"} />
        <Card
          id={3}
          image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbIm22Vj1Q30jeUifbWRN4XHEZeXp6YfwE9g&usqp=CAU"}
          price={2500}
          rating={3}
          title={"Echo Dot"} />
        <Card
          id={4}
          image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbIm22Vj1Q30jeUifbWRN4XHEZeXp6YfwE9g&usqp=CAU"}
          price={2500}
          rating={3}
          title={"Echo Dot"} />
        <Card
          id={5}
          image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbIm22Vj1Q30jeUifbWRN4XHEZeXp6YfwE9g&usqp=CAU"}
          price={2500}
          rating={3}
          title={"Echo Dot"} /> */}

      </Main>
    </Container>
  )
}



const Container = styled.div`
  width: 100%;
  background-color: rgb(234, 237, 237);
  max-width: 1400px;
  margin: auto;
  height: fit-content;
`;

const Banner = styled.div`
  width: 100%;
  img {
    width: 100%;
    -webkit-mask-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 2),
      rgba(0, 0, 0, 0.95),
      rgba(0, 0, 0, 0.85),
      rgba(0, 0, 0, 0.75),
      rgba(0, 0, 0, 0.55),
      rgba(0, 0, 0, 0)
    );

    &:nth-child(2) {
      display: none;
    }

    @media only screen and (max-width: 767px) {
      &:nth-child(1) {
        display: none;
      }

      &:nth-child(2) {
        display: block;
        -webkit-mask-image: none;
      }
    }
  }
`;

const Main = styled.div`
  display: grid;
  justify-content: center;
  place-items: center;
  width: 100%;

  grid-auto-rows: 420px;
  grid-template-columns: repeat(4, 280px);
  grid-gap: 20px;

  /* Mobile */
  @media only screen and (max-width: 767px) {
    grid-template-columns: repeat(2, 50%);
    grid-gap: 0;
  }

  /* Tablets */

  @media only screen and (min-width: 767px) and (max-width: 1200px) {
    grid-template-columns: repeat(3, 30%);
  }

  @media only screen and (min-width: 767px) {
    margin-top: -130px;
    padding: 10px 0px;
  }
`;

export default Home