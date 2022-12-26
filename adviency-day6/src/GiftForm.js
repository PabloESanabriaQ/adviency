import React from 'react';

export default function GiftForm(){

    const [gift, setGift] = React.useState("");
    const [giftList, setGiftList] = React.useState([]);

    function handleChange(event){
        setGift(event.target.value);
    }

    function handleClick(event){
        !gift ? alert("Ingresá un regalo!") 
        : setGiftList([{id: new Date().getTime().toString(), name: gift}, ...giftList]);
        setGift("");
        event.preventDefault();
    }

    function handleDelete(gift){
        setGiftList(giftList.filter((item) => gift !== item));
    }

    function handleDeleteAll(){
        setGiftList([]);
    }

    return (
        <>
            <form>
            <input 
            placeholder="Agregar regalo..." 
            value={gift}
            onChange={handleChange}
            className="p-2 m-4 border-4 border-red-600 rounded-lg font-semibold"
            />
            <button
            onClick={handleClick}
            className="p-2 pl-10 m-4 border-4 border-red-600 rounded-lg font-semibold
            bg-[url('../icons/regalo.png')] bg-no-repeat bg-contain"
            >AGREGAR
            </button>
            </form>
            <h2
            className={!giftList.length ? "text-red-500 text-center text-xl font-semibold p-10" : "hidden"}
            >La lista está vacía 😞 <br/> Agregá un regalo por favor
            </h2>
            <ul>
                {giftList.map((gift) =><li 
                key={gift.id}
                className="flex p-2 pl-12 m-4 font-semibold text-2xl items-center
                bg-[url('../icons/bola.png')] bg-no-repeat bg-left justify-between"
                >{gift.name}<button
                onClick={() => handleDelete(gift)}
                className="p-2 pl-12 m-4 border-4 border-red-600 rounded-lg font-semibold
                bg-[url('../icons/grinch.png')] bg-no-repeat bg-contain hover:text-red-600"
                >BORRAR</button></li>)}
            </ul>
            <div><button
            className={giftList.length > 1 ? "p-2 m-4 border-4 border-red-600 rounded-lg font-bold hover:text-red-600" : "hidden transition-all"}
                onClick={handleDeleteAll}>BORRAR TODO</button></div>
        </>
    )
}