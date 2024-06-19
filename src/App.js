import React, { Component } from 'react';
// import Feed from './components/Feed';
// import Membro from './components/Membro';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: '',
      email: '',
      senha: '',
    };
    this.cadastrar = this.cadastrar.bind(this);
  }

  cadastrar(e) {
    const { nome, email, senha } = this.state;

    if (nome !== '' && email !== '' && senha !== '') {
      alert(`Nome: ${nome} \nEmail: ${email} \nSenha: ${senha}`);
    } else {
      this.setState({ error: "Preencha todos os campos!" });
    }

    e.preventDefault();    //Evita que a página seja recarregada
  }

  render() {
    return (
      <div>
        <h1>Novo Usuario</h1>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.cadastrar}>
          <label>Nome:</label>
          <input type="text" value={this.state.nome}
            onChange={(e) => this.setState({ nome: e.target.value })} />
          <br />
          <label>Email:</label>
          <input type="email" value={this.state.email}
            onChange={(e) => this.setState({ email: e.target.value })} />
          <br />
          <label>Senha:</label>
          <input type="password" value={this.state.senha}
            onChange={(e) => this.setState({ senha: e.target.value })} />
          <br />
          <button type="submit">Cadastrar</button>
        </form>


      </div>
    );
  }

}

export default App;










// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       email: '',
//       senha: '',
//       sexo: 'masculino'
//     };

//     this.trocaEmail = this.trocaEmail.bind(this); //Faz a ligação do método com o construtor
//   }

//   trocaEmail(e) {
//     let valorDigitado = e.target.value;
//     this.setState({ email: valorDigitado });
//   }


//   render() {
//     return (
//       <div>
//         <h2>Login</h2>
//         Email:
//         <input type="email" name="email" value={this.state.email}
//           onChange={this.trocaEmail} />   {/* //Chama o método trocaEmail */}
//         <br />
//         Senha:
//         <input type="password" name="senha" value={this.state.senha}
//           onChange={(e) => this.setState({ senha: e.target.value })} />  
//         <br />
//         <br />
//         Sexo:
//         <select name="sexo" value={this.state.sexo}
//           onChange={(e) => this.setState({ sexo: e.target.value })}>
//           <option value="masculino">Masculino</option>
//           <option value="feminino">Feminino</option>
//         </select>

//         <div> 
//           <h3>{this.state.email}</h3>
//           <h3>{this.state.senha}</h3>
//           <h3>{this.state.sexo}</h3>
//           </div>

//       </div>
//     );
//   }
// }

// export default App;

// class App extends Component {
  
//   render() {
//     return (
//       <div>
//         <Feed/>
//       </div>
//     );
// }
// }

// export default App;

// class App extends Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       status: false
//     };

//     this.sair = this.sair.bind(this);
//     this.entrar = this.entrar.bind(this);

//   }

//   sair() {
//     this.setState({ status: false });
//   }

//   entrar() {
//     this.setState({ status: true });
//   }

//   render() {
//     return (
//       <div>
//         {this.state.status ?
//           <div>
//             <h2>Bem vindo ao sistema</h2>
//             <button onClick={this.sair}> Sair do sistema</button>
//           </div> :
//           <div>
//             <h2>Olá visitante, faça o login!</h2>
//             <button onClick={this.entrar}> Entrar no sistema</button>
//           </div>
//         }
//       </div>
//     );
//   }
// }

// export default App;

// {/* 
// // class App extends Component { */}

//   render() {
//       return (
//           <div>
//             <Membro nome="Visitante"/>
//           </div>
//       );
//   }

// }

// export default App;


// class App extends Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       hora: '00:00:00'
//     };
//   }

//   componentDidMount() {

//     setInterval(() => {
//       this.setState({ hora: new Date().toLocaleTimeString() });
//     }, 1000);

//   }

//   componentDidUpdate() {
//     console.log('Atualizou');
//   }

//   render() {
//     return (
//       <div>
//         <h1>Meu projeto {this.state.hora}</h1>
//       </div>
//     );
//   }
// }

// export default App;

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