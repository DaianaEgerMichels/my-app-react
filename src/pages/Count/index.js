import React from 'react';
import Counter_State from '../../components/Counter_State';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import '../../App.css';

const Count = ()=>{
    return(
    <>
    <Header></Header>

        <Counter_State/>

    <Footer></Footer>
    </>
    )
}

export default Count;