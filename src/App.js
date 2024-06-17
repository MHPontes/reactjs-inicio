import React from 'react';

// const Bemvindo = () => <h2>Bem-vindo(a)</h2>

const Bemvindo = (props) => {
  return (
    <div>
      <h2>Bem-vindo(a) {props.nome} </h2>
      <h3>Tenho {props.idade} Anos</h3>
    </div>
  );
}

function App() {
  return (
    <div>
      Olá, mundo!
      <Bemvindo nome="Mateus" idade="29"/>
      <Bemvindo nome="Joana" idade="19"/>
      <h1>Curso React</h1>
    </div>
  );
}

export default App;