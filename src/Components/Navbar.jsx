import React from 'react'
import styled from 'styled-components'
import { useStateValue } from '../StateProvider'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {

    const [{basket,user},dispatch]= useStateValue()
    const navigate= useNavigate()

    const signOut = () => {
      dispatch({
        type: "SET_USER",
        user: null,
      });
  
      localStorage.removeItem("user");
      navigate("/");
    };

  return (
    <Container>
        <Inner>
        <Logo onClick={()=>navigate("/")}> 
        <img src="./amazon_logo1.png" alt="" />
        </Logo>
        <SearchBar> <input type="text" placeholder="Search..." />
        <SearchIcon onClick={()=>navigate("/addproduct")}>
            <img src="./searchIcon.png" alt="" />
        </SearchIcon>
        </SearchBar>
        <RightContainer>
            <NavButtonn  onClick={user ? () => signOut() : () => navigate("/login")}>
                <p>Hello</p>
                <p>{user ? user?.fullName : "User"}</p>
            </NavButtonn>
            <NavButton onClick={()=>navigate('/orders')}>
                <p></p>
                <p>Return &Orders</p>
            </NavButton>
            <BasketButton onClick={()=>navigate('/checkout') }>
            <img src="./basket-icon.png" alt="" />
            <p>{basket.length} </p>
            </BasketButton>
        </RightContainer>
        </Inner>
        <MobileSearchbar>
        <input type="text" placeholder="Search..." />
        <SearchIcon onClick={()=>navigate("/addproduct")}>
          <img src="./searchIcon.png" alt="" />
        </SearchIcon>
        </MobileSearchbar>
    </Container>
  )
}


const Container = styled.div`
  width: 100%;
  height: 60px;
  background-color:  rgb(14, 173, 27);
  display: flex;
  align-items: center;
  position: relative;

  @media only screen and (max-width: 767px) {
    height: 120px;
    flex-direction: column;
  }
`;
const Inner = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  @media only screen and (max-width: 767px) {
    justify-content: space-between;
  }
`;

const Logo = styled.div`
  margin-left: 20px;
  cursor: pointer;
  img {
    width: 200px;
    margin-top: 5px;
  }
`;
const SearchBar = styled.div`
  height: 35px;
  flex: 1;
  margin: 0px 15px;
  display: flex;
  align-items: center;

  input {
    flex: 1;
    width: 100%;
    height: 100%;
    border: none;
    border-radius: 5px 0px 0px 5px;

    &::placeholder {
      padding-left: 5px;
    }
  }

  @media only screen and (max-width: 767px) {
    display: none;
  }
`;

const MobileSearchbar = styled.div`
  height: 35px;
  width: 90%;
  display: flex;
  align-items: center;
  padding: 10px;

  input {
    flex: 1;
    width: 100%;
    height: 100%;
    border: none;
    border-radius: 5px 0px 0px 5px;

    &::placeholder {
      padding-left: 10px;
    }
  }

  @media only screen and (min-width: 768px) {
    display: none;
  }
`;

const SearchIcon = styled.div`
  background-color: #febd69;
  height: 100%;
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 0px 5px 5px 0px;
  img {
    width: 22px;
  }
`;
const RightContainer = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;
  justify-content: space-around;
  height: 100%;
  padding: 5px 15px;
`;

const NavButton = styled.div`
  color: #fff;
  padding: 5px;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
  margin-right: 15px;

  p {
    &:nth-child(1) {
      font-size: 10px;
    }

    &:nth-child(2) {
      font-size: 20px;
      font-weight: 600;
    }
  }
`;

const NavButtonn = styled.div`
  color: #fff;
  padding: 5px;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
  margin-right: 15px;

  p {
    &:nth-child(1) {
      font-size: 15px;
      font-weight: 600;
    }

    &:nth-child(2) {
      font-size: 15px;
      font-weight: 600;
    }
  }
`;

const BasketButton = styled.div`
  display: flex;
  align-items: center;
  height: 90%;
  cursor: pointer;

  img {
    width: 30px;
    margin-right: 10px;
  }

  p {
    color: #fff;
    font-weight: 500;
  }
`;


export default Navbar