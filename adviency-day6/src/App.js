import GiftForm from '../../adviency-day6/src/GiftForm';
import './App.css';

function App() {
  return (
    <div 
    className="App w-screen h-fit min-w-fit min-h-screen flex flex-col items-center bg-emerald-200">
      <div
      className="w-1/3 h-fit min-w-fit bg-white border-4 rounded-2xl border-emerald-400
      flex flex-col items-center mt-32">
      <h1
      className="text-red-500 text-5xl text-center p-8">Lista de Regalos</h1>
      <GiftForm></GiftForm>
      </div>
    </div>
  );
}

export default App;
