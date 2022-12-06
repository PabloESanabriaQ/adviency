import GiftForm from './GiftForm';

function App() {
  return (
    <div className="App flex w-screen h-screen items-center">
    <div className="bg-gradient-to-b from-red-900 via-red-900 to-transparent w-1/3 h-5/6 ml-24 flex-row place-items-center p-10 rounded-t-3xl">
      <h1 className="text-4xl tracking-wider p-4 text-center text-amber-600">Lista de Regalos:</h1>
        <GiftForm></GiftForm>
      </div>
    </div>
  );
}

export default App;
