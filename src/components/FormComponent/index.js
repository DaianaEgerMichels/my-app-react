import React, {useState, useEffect} from "react";
import {Link, useHistory} from "react-router-dom";
import './FormComponent.css';


const  FormComponent= ()=>{

  const [url, setUrl] = useState("");
  const [nameClient, setNameClient] = useState("");
  const [nameBank, setNameBank] = useState("");
  const [applicationValue, setApplicationValue] = useState("");
  const [count, setCount] = useState("");
  const [counts, setCounts] = useState([]);
  const [investiment, setInvestiment] = useState("");
  const [investiments, setInvestiments] = useState([]);
  const history = useHistory();

    
  const handleSubmit = async (event) => {
      try {
        event.preventDefault();
        if(!url || !nameClient || !nameBank || !applicationValue || !count || !investiment){
          alert('Por favor preencha todos os campos!')
          if (!url){
            document.querySelector('#imageProduct').className = "image-container";
            document.querySelector('#urlError').className = "error-msg error";
          }
          if (url){
          document.querySelector('#imageProduct').className = "image-container view";  
          document.querySelector('#urlError').className = "error-msg"; 
          }
          if(!nameClient) {
          document.querySelector('#nameClientError').className = "error-msg error";
          }
          if (nameClient){
            document.querySelector('#nameClientError').className = "error-msg";
          }
          if(!nameBank) {
            document.querySelector('#nameBankError').className = "error-msg error";
          }
          if (nameBank){
              document.querySelector('#nameBankError').className = "error-msg";
          }
          if(!applicationValue){
            document.querySelector('#applicationError').className = "error-msg error";
          }

          if(applicationValue){
            document.querySelector('#applicationError').className = "error-msg";
            return;
          }
          
        } else{
          if (url && nameClient && nameBank && applicationValue && count && investiment)

          {await fetch(
            'http://localhost:3333/banco',
            {
              headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
              },
              method: "POST",
              body: JSON.stringify({
              "url": url,
              "nameClient": nameClient,
              "nameBank": nameBank,
              "applicationValue": applicationValue,
              "count": count,
              "investiment": investiment
              })
            }
          );

          alert("Produto cadastrado com sucesso");
      
          history.push("/list");
          }

        }
    }

    catch (error) {
          alert('Desculpe pelo transtorno. Estamos trabalhando para resolver o problema!')
    }
      
        
  }

  useEffect(() => {

    async function getCounts() {
      const result = await fetch("http://localhost:3333/conta");
      const data = await result.json();
      setCounts(data);
    }
        
    getCounts();
        
  }, []);

  useEffect(() => {

    async function getInvestiments() {
      const result = await fetch("http://localhost:3333/investimentos");
      const data = await result.json();
      setInvestiments(data);
    }
        
    getInvestiments();
        
  }, []);


return(
<>
<form onSubmit={handleSubmit} className="form-counts">

  <section className="header-form">

    <h1>Cadastrar Nova Aplicação</h1>
    <div>
      <Link to="/"><button id="cancel">Cancelar</button></Link>
      <button type="submit"onClick={handleSubmit} className="btn-salvar" >Salvar</button>
    </div>

  </section>

  <section className="img-url">
    
    {setUrl && <div id ="imageBank" className="image-container view "><img id="img" src={url} 
    alt={url} className="image-bank"></img></div>}
    {!setUrl &&<div id ="imageBank" className="image-container"><img id="img" src={url} 
    alt={url} className="image-bank"></img></div>}

    <label for="url"> URL da Imagem</label>

      <input
        type="url"
        name="url"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="Coloque aqui a url">
      </input>
      <span id="urlError" className="error-msg">Campo obrigatório!</span>
  </section>   


  <section className="name">

     <div>
       <label for="name">Cliente</label>
          <input
          type="text"
          name="name"
          value={nameClient}
          onChange={(e) => setNameClient(e.target.value)}
          placeholder="Nome do Cliente">
          </input>
          <span id="nameClientError" className="error-msg">Campo obrigatório!</span>
     </div>   
 </section>
 <section className="bank-application">
     <div>
       <label for="nameBank">Banco</label>
          <input
          type="text"
          name="nameBank"
          value={nameBank}
          onChange={(e) => setNameBank(e.target.value)}
          placeholder="Nome do Banco">
          </input>
          <span id="nameBankError" className="error-msg">Campo obrigatório!</span>
     </div> 

     <div>
       <label for="application">Valor da Aplicação (R$)</label>
          <input
          type="text"
          name="application"
          value={applicationValue}
          onChange={(e) => setApplicationValue(e.target.value)}
          placeholder="Valor da aplicação">
          </input>
          <span id="applicationError" className="error-msg">Campo obrigatório!</span>
     </div>    

  </section>
 
<hr/>
  <section className="selects">

    <div><span>Conta</span>
        <select value={count} onChange={(e) => setCount(e.target.value)}>

            <option value="" selected disabled>Selecione uma opção</option>

           {counts.map((state)=> (<option value={state}>{state}</option>))}

        </select>
    </div>
    <div><span>Tipo de Investimento</span>
        <select value={investiment} onChange={(e) => setInvestiment(e.target.value)}>

            <option value="" selected disabled> Selecione uma opção </option>

           {investiments.map((state)=> (<option value={state}>{state}</option>))}

        </select>
    </div>
       

  </section>      

</form>
</>
)
}

export default FormComponent;