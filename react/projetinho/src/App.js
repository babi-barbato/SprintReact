import React, { useState } from 'react';
import './App.css';

function App() {
  const [jsonData, setJsonData] = useState({});

  function pesquisar() {
    const options = { method: 'GET', headers: { 'User-Agent': 'insomnia/8.6.1' } };
    var index = document.getElementById("iptBusca").value

    fetch('http://localhost:8080/musicas/' + index, options)
      .then(response => response.json())
      .then(data => {
        setJsonData(data)
        console.log(data);
      })
      .catch(err => console.error(err));
  }

  function cadastrar(){
    var nome = document.getElementById("iptMusica").value
    var artista = document.getElementById("iptArtista").value

    const options = {
      method: 'POST',
      headers: {'Content-Type': 'application/json', 'User-Agent': 'insomnia/8.6.1'},
      body: `{"nome":"${nome}","artista":"${artista}"}`
    };
    
    fetch('http://localhost:8080/musicas', options)
      .then(response => response.json())
      .then(response => alert("Cadastro Realizado"))
      .catch(err => console.error(err));
  }

  return (
    <div className="App">
      <div className="App-header">
        <div className='dividir'>
          <h4>
            Digite seu código para pesquisar a música
          </h4>
          <input id='iptBusca'></input>
          <p id='json'>{jsonData.nome}</p>
          <p id='json'>{jsonData.artista}</p>

          {/* {jsonData.map(musica => {
            <p>{musica.nome}</p>
          })} */}
          {/* axios */}

          <button onClick={pesquisar}>CLIQUE AQUI</button>
        </div>
        <div>
          <h4>
            Cadastre sua música
          </h4>
          <p>Nome Da Música: </p>
          <input id='iptMusica'></input>
          <p>Nome Do Artista: </p>
          <input id='iptArtista'></input>
          <br></br>
          <button onClick={cadastrar}>Cadastrar</button>
        </div>
      </div>
    </div>
  );
}

export default App;
