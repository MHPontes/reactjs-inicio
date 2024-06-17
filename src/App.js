import React from 'react';

// const Bemvindo = () => <h2>Bem-vindo(a)</h2>

const Bemvindo = (props) => {
  return (
    <div>
      <h2>Bem-vindo(a) {props.nome} </h2>
    </div>
  );
}

function App() {
  return (
    <div>
      Olá, mundo!
      <Bemvindo nome="Joana"/>
      <h1>Curso React</h1>
    </div>
  );
}

export default App;