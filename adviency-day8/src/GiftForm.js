import React from 'react';

export default function GiftForm() {

    const [gift, setGift] = React.useState("");
    const [giftList, setGiftList] = React.useState([]);
    const [quantity, setQuantity] = React.useState(1);

    function handleNameChange(event) {
        setGift((String(event.target.value)).toLowerCase());
    }

    function handleQuantityChange(event) {
        if (event.target.value > 0) {
            setQuantity(event.target.value);
        }
    }

    function handleClick(event) {
        event.preventDefault();
        if (gift !== "") {
            if (giftList.find(({ name }) => gift === name) !== undefined) {
                alert("El regalo ya existe!");
            } else {
                setGiftList([
                    {
                        id: new Date().getTime().toString(),
                        name: gift,
                        quantity: quantity
                    }, ...giftList]);
                setGift("");
                setQuantity(1);
            }
        }
    }

    function handleDelete(item) {
        setGiftList(giftList.filter((gift) => gift !== item));
    }

    function handleDeleteAll(item) {
        setGiftList([]);
    }

    return (
        <div
            className="bg-emerald-600 border-8 border-white rounded-3xl
        w-1/3 h-full min-h-fit min-w-fit p-8 my-20 flex flex-col items-center">
            <h1
                className="text-5xl text-center my-8 text-white">Lista de Regalos</h1>
            <form>
                <input
                    type="text"
                    className="m-4 p-4 rounded-2xl w-60"
                    placeholder="Agregar un regalo..."
                    value={gift}
                    onChange={handleNameChange} />
                <input
                    className="m-4 p-4 rounded-2xl w-20"
                    type="number"
                    value={quantity}
                    onChange={handleQuantityChange} />
                <button
                    className="m-4 p-4 rounded-2xl w-30 bg-white font-semibold"
                    onClick={handleClick}
                >AGREGAR</button>
            </form>
            <ul
                className="w-full min-h-fit">
                {giftList.map((gift) =>
                    <li
                        className="m-4 p-4 rounded-2xl bg-white font-semibold
                    flex justify-between items-center"
                        key={gift.id}>
                        <span
                            className="bg-emerald-600 text-white px-4 py-2 rounded-xl"
                        >{gift.quantity}
                        </span>
                        <span
                            className="text-lg"
                        >{gift.name}</span>
                        <button
                            className="bg-emerald-600 text-white px-4 py-2 rounded-xl"
                            onClick={() => handleDelete(gift)}> BORRAR</button>
                    </li>)}
            </ul>
            <h2
                className={giftList.length
                    ? "hidden"
                    : "mt-16 text-center font-semibold text-white text-2xl rounded-xl"}
            >Agregá regalos que me pongo triste 😞</h2>
            <button
                onClick={handleDeleteAll}
                className={giftList.length > 1 ? "m-4 p-4 rounded-2xl w-30 bg-white font-semibold" : "hidden"}>BORRAR TODO</button>
        </div>
    )
}