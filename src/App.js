/*import HelloWorld from './Components/HelloWorld';
import Frase from './Components/Frase';
import SayMyName from './Components/SayMyName';
import Pessoa from './Components/Pessoa';
import List from './Components/List';
import Evento from './Components/Evento';
import Form from './Components/Form';*/
import Condicional from './Components/Condicional';
import './App.css';

function App() {

/*const name = "Joao"
 const newName = name.toUpperCase()

function sum(a,b) {
    return a * b
  }
  
const url ='https://via.placeholder.com/150'
  return (
    <div className="App">
      <h2>Alterando o JSX</h2>
      <p>Olá, {newName}</p>
      <p>Soma {sum(85,423)}</p>
      <img src={url} alt="Imagem" />
      <HelloWorld/>
      <Frase/>
      <SayMyName nome="João" />

      <Pessoa nome="Marcos" 
      idade="27" 
      profissao="Suporte TI" 
      foto='https://via.placeholder.com/150'/>

      <List></List>

      <Evento numero={1}/>
      <Form/>
    </div>

    
  ); */
  return(
    <div className='App'>
      <h1>Renderização Condicional</h1>
      <Condicional/>
    </div>
  )
}

export default App;
