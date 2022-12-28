import './App.css';
import GiftForm from './GiftForm';

function App() {
  return (
    <div 
    className="App flex flex-col items-center justify-center">
      <div
      className="
      bg-rose-600 h-full w-full min-h-fit min-w-fit rounded-3xl p-10">
        <h1
        className="text-5xl text-white mt-10 text-center"
        >Lista de Regalos</h1>
        <GiftForm></GiftForm>
      </div>
    
    </div>
  );
}

export default App;
