import './App.css';

function App() {
  return (
    <div className="App bg-green-600 w-100 h-100">
      <h1 className="text-2xl py-10 font-bold text-white">Lista de Regalos:</h1>
      <ul>
        <Item>Remera del power ranger verde</Item>
        <Item>Barco</Item>
        <Item>No la quiero mufar, pero ya saben qué</Item>
      </ul>
    </div>
  );
}

function Item(props){
  return (
    <div>
    <li className="text-white font-semibold hover:text-red-600">{props.children}</li>
    </div>
  )
}

export default App;
