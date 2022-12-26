import './App.css';
import GiftForm from './GiftForm';

function App() {
  return (
    <div 
    className="App w-full h-full p-10 bg-orange-200 border-4 border-red-800 
    rounded-xl mt-20">      
      <h1
      className="text-red-800 text-center text-3xl mb-6"
      >Lista de Regalos</h1>
      <GiftForm></GiftForm>
    </div>
  );
}

export default App;
