import React, { useState, useEffect } from "react";
import ListContainer from "../../components/ListContainer";
import './List.css'


export default function List(){

    const [investiments, setInvestiments] = useState([]);

    useEffect(() => {

        async function getInvestiments() {
          const result = await fetch("http://localhost:3333/produtos");
          const data = await result.json();
          setInvestiments(data);
        }
            
        getInvestiments();
            
      }, []);

    return (
        <>
              <section className="list-investiments">
                <h1>Lista de Aplicações</h1>
                {investiments.map(item=> <ListContainer url={item.url} nameClient={item.nameClient} nameBank={item.nameBank} applicationValue={item.applicationValue}></ListContainer>)}
              </section>
           
         
        </>
    )

}