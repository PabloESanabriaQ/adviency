import GiftForm from "./GiftForm";

function App() {
  return (
    <div className="App ml-60 mt-16 w-1/3 h-2/3 flex flex-col items-center bg-orange-300 p-16 rounded-xl top-10">
          <h1
          className="pb-10 text-3xl text-rose-700">Lista de Regalos</h1>
          <GiftForm></GiftForm>
    </div>
  );
}

export default App;
