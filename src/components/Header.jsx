import React from 'react';
import Image from '../assets/nba-logo.png';
import { Container } from 'react-bootstrap';

const Header =() => {
    return(
        <Container className='head'>
        
            <img src={Image} alt="" />
            <h1 className='my-2 display-4 fw-bold font-monospace '>NBA Legends</h1>
        
        </Container>
    )
}





export default Header;


