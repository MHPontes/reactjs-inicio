import React, { Component } from 'react';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      hora: '00:00:00'
    };
  }

  componentDidMount() {

    setInterval(() => {
      this.setState({ hora: new Date().toLocaleTimeString() });
    }, 1000);

  }

  componentDidUpdate() {
    console.log('Atualizou');
  }

  render() {
    return (
      <div>
        <h1>Meu projeto {this.state.hora}</h1>
      </div>
    );
  }
}

export default App;

// class App extends Component {
  
//   constructor(props) {
//     super(props);
//     this.state = {
//       nome: 'Mateus',
//       contador: 0
//     };
//     this.aumentar = this.aumentar.bind(this);
//     this.diminuir = this.diminuir.bind(this);
//   }

//   aumentar() {
//     let state = this.state;
//     state.contador += 1;
//     this.setState(state);
//   }

//   diminuir() {
//     let state = this.state;
//     if (state.contador === 0) {
//       alert('Opa, chegou a zero!');
//       return;
//     }
//     state.contador -= 1;
//     this.setState(state);
//   }


//   render() {
//     return (
//       <div>
//         <h1>Contador</h1>
//         {this.state.nome}
//         <h3>
//           <button onClick={this.diminuir}>-</button>
//           {this.state.contador}
//           <button onClick={this.aumentar}>+</button>
//         </h3>
//       </div>
//     );

//   }
// }

// export default App;


// const Bemvindo = () => <h2>Bem-vindo(a)</h2>

// const Bemvindo = (props) => {
//   return (
//     <div>
//       <h2>Bem-vindo(a) {props.nome} </h2>
//       <h3>Tenho {props.idade} Anos</h3>
//     </div>
//   );
// }

// const Equipe = (props) => {
//   return (
//     <div>
//       <Sobre username={props.nome} cargo={props.cargo} idade={props.idade}/>
//       <Social fb={props.facebook}/>  {/* //Chama o componente Social */}
//       <hr/>  {/* //Adiciona uma linha horizontal */}
//     </div>
//   );
// }

// const Sobre = (props) => {
//   return (
//     <div>
//       <h2>Olá, eu sou {props.username}</h2>
//       <h3>Cargo: {props.cargo}</h3>
//       <h3>Idade: {props.idade}</h3>
//     </div>
//   );
// }

// const Social = (props) => {
//   return (
//     <div>
//       <a href={props.fb}>Facebook</a>
//       <a>LinkedIn</a>
//       <a>YouTube</a>
//     </div>
//   );
// }

// class Equipe extends Component{
//   render(){
//     return (
//       <div>
//         <Sobre username={this.props.nome} cargo={this.props.cargo} idade={this.props.idade}/>
//         <Social fb={this.props.facebook}/>  {/* //Chama o componente Social */}
//         <hr/>  {/* //Adiciona uma linha horizontal */}
//       </div>
//     );
//   }
// }

// class Sobre extends Component{
//   render(){
//     return (
//       <div>
//         <h2>Olá, eu sou {this.props.username}</h2>
//         <h3>Cargo: {this.props.cargo}</h3>
//         <h3>Idade: {this.props.idade}</h3>
//       </div>
//     );
//   }

// }

// function App() {
//   return (
//     <div>
//       <h1>Conheça nossa equipe:</h1>
//       <Equipe nome="Lucas" cargo="Programador" idade="23"
//       facebook="https://google.com"/>
//       <Equipe nome="João" cargo="Designer" idade="25"/>
//       <Equipe nome="Pedro" cargo="Front-End" idade="20"/>
//     </div>
//   );
// }

// export default App