import React, { useState } from 'react';
import './App.css';

function App() {
  const [jsonData, setJsonData] = useState('');

  function pesquisar() {
    const options = { method: 'GET', headers: { 'User-Agent': 'insomnia/8.6.1' } };
    var index = document.getElementById("teste").value

    fetch('http://localhost:8080/musicas/' + index, options)
      .then(response => response.json())
      .then(data => {
        setJsonData(JSON.stringify(data),
        console.log(data));
      })
      .catch(err => console.error(err));
  }


  return (
    <div className="App">
      <header className="App-header">
        <p>
          Digite seu código para pesquisar a música
        </p>
        <input id='teste'></input>
        <p id='json'>Música: {jsonData}</p>
        <button onClick={pesquisar}>CLIQUE AQUI</button>
      </header>
    </div>
  );
}

export default App;
