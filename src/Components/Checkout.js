import React from 'react'
import { useStateValue } from '../StateProvider'
import styled from 'styled-components';
import Navbar from './Navbar';
function Checkout() {
    const [{basket}]=useStateValue();
  return (
    <Container>
        <Navbar></Navbar>
        <Main>
            <Shoppingcart></Shoppingcart>
            <Subtotal>

            </Subtotal>
        </Main>
    </Container>
  )
}
const Container=styled.div`
width: 100%;
max-width: 1400px;
height: fit-content;
margin: auto;
background-color: rgb(234, 237, 237);
border: 1px solid red;
position: relative;
`
const Main=styled.div``
const Shoppingcart=styled.div``
const Subtotal=styled.div``
export default Checkout;