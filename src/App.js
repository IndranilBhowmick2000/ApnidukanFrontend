// import logo from './logo.svg';
// import { Container } from '@mui/material';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './Components/Login';
import styled from 'styled-components';
import SignUp from './Components/SignUp';
import Home from './Components/Home';
import Checkout from './Components/Checkout';
import Address from './Components/Address';
import Payment from './Components/Payment';

import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import AddProduct from './Components/AddProduct';
import Orders from './Components/Orders';
import Protectedrouting from './Components/Protectedrouting';
import ProtectedCheckout from './Components/ProtectedCheckout';
import ProtectedAddress from './Components/ProtectedAddress';

const promise= loadStripe(
  "pk_test_51OnCUhSJZYdrsnMjJPiyYds36ZAYBgMnrsKh22KCNd5pSaUlFS88nP1MwSjr9HN1jZiVPTff7l4syJmHLIZbtqIR00boLBwG15"
)


function App() {


  return (
    <Router>
      <Container>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login/>} />
          <Route path='/checkout' element={<ProtectedCheckout Checkout={Checkout} />} />
          <Route path='/signup' element={<SignUp/>} />
          <Route path='/address' element={<Address/>} />
          <Route path='/payment' element= {<Elements  stripe={promise} >
            <ProtectedAddress Payment={Payment}/>
          </Elements>} />
          <Route path='/addproduct' element={<AddProduct/>} />
          <Route path='/orders' element={<Protectedrouting Orders={Orders} />} />
        </Routes>
      </Container>
    </Router>
  );
}



const Container = styled.div`
  width: 100vw;
  height: 100vh;
overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;


export default App;
