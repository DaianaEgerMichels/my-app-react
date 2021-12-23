import React, { useState, useEffect } from "react";
import ListContainer from "../../components/ListContainer";
import './List.css'


export default function List(){

    const [products, setProducts] = useState([]);

    useEffect(() => {

        async function getProducts() {
          const result = await fetch("http://localhost:3333/produtos");
          const data = await result.json();
          setProducts(data);
        }
            
        getProducts();
            
      }, []);

    return (
        <>
              <section className="list-products">
                <h1>Lista de Produtos</h1>
                {products.map(item=> <ListContainer url={item.url} name={item.name} description={item.description} unitCost={item.unitCost} provider={item.provider} group={item.group}></ListContainer>)}
              </section>
           
         
        </>
    )

}