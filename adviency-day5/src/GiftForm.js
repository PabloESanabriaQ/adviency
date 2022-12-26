import React from 'react';

export default function GiftForm() {

    const [gift, setGift] = React.useState('');
    const [giftList, setGiftList] = React.useState([]);

    function handleChange(event) {
        setGift(event.target.value)
    }

    function handleClick(event) {
        if (gift !== "") {
            setGiftList([
                { id: new Date().getTime().toString(), name: gift }, ...giftList]);
            setGift("");
        }
        else {
            alert("Ingrese un regalo");
        }
        event.preventDefault();
    }

    function handleDelete(selected) {
        setGiftList(giftList.filter((gift) => selected !== gift));
    }

    function handleDeleteAll() {
        setGiftList([]);
    }

    return (
        <>
            <input
                placeholder="Agregar regalo..."
                value={gift}
                onChange={handleChange}
                className="border-4 border-red-800 m-2 p-2 rounded-lg"
            />
            <button
                onClick={handleClick}
                className="border-4 border-red-800 rounded-lg bg-red-800 m-2 p-2 text-white text-md"
            >AGREGAR
            </button>
            <ul
                className="flex flex-col betwee">
                {giftList.map((gift) => {
                    return (
                        <li key={gift.id}
                            className="flex justify-between
                        border-red-800 rounded-lg bg-red-800 m-2 p-2 px-4 text-white text-lg"
                        >{gift.name}
                            <button
                                onClick={() => handleDelete(gift)}
                                className="text-white text-lg ml-4 p-3 bg-no-repeat
                                        bg-[url('../icons/trash-can.png')] bg-contain bg-top"
                            />
                        </li>
                    )
                })}
            </ul>
            <div
            className="w-full flex flex-col items-center">
            <button
                className="border-red-800 rounded-lg bg-red-800 m-2 p-2 
                text-white text-lg"
                onClick={() => handleDeleteAll()}
                hidden={giftList.length > 1 ? "" : "hidden"}
            >BORRAR TODO</button>
            </div>
        </>
    )
}