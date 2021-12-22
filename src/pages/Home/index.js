import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import '../../App.css';


const Home = ()=>{
    return(<>
    <Header></Header>

        <div>
            <h1>Welcome to the Home Page</h1>

            <p>My name is Daiana. <br/>
                I am 24 years old. <br/>
                I am a student of Dev in House - SENAI | ACATE
            </p>
        </div>

    <Footer></Footer>
        </>
    );
}

export default Home;