import React from "react";
import "./ListContainer.css"

const ListContainer = ({url,nameClient, nameBank, applicationValue} )=>{
    return(
        
        <section className="application-container" >
            <div id="image-name">
                <img src={url} alt={nameClient}></img>
                <h1>{nameClient}</h1>
            </div>
            <div id="img-money">
                <img src={url} alt={nameClient}></img>
            </div>
            <div id="details-investiment">
                <h2>{nameBank}</h2>
                <p>{`Valor da Aplicação R$ ${applicationValue}`}</p>
            </div>
        </section>
    )
}

export default ListContainer;