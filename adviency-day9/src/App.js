import GiftAppContainer from './GiftAppContainer';

function App() {
  return (
    <main className="App flex flex-col 
    bg-green-700 w-screen h-screen min-h-fit items-center">
      <section className="flex flex-col w-3/5 h-5/6 min-h-fit min-w-fit items-center
      bg-stone-100 mt-12 rounded-[100px]">
      <header className="mt-16 mb-12">
        <h1 className="font-['Pacifico'] text-5xl text-red-700">Lista de Regalos</h1>
      </header>
        <GiftAppContainer />
      </section>
    </main>
  );
}

export default App;
