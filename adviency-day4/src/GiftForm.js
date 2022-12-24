import React from 'react';

function GiftForm() {
    const [gift, setGift] = React.useState("");
    const [giftList, setGiftList] = React.useState([]);

    function handleChange(event) {
        setGift(event.target.value);
    }

    function handleClick(event) {
        if(gift !== ""){
            setGiftList([{ id: new Date().getTime().toString(), giftName: gift.toUpperCase() }, ...giftList]);
            setGift("");
        } else {
            alert("Ingrese un regalo");
        }
        event.preventDefault();
    }

    function handleDelete(gift) {
        setGiftList(giftList.filter(item => item !== gift));
    }

    return (
        <form
            className="h-full w-full">
            <input
                onChange={handleChange}
                value={gift}
                placeholder="Agregar regalo..."
                className="border-4 border-rose-700 rounded-lg m-2 p-2 w-48"
            />
            <button
                onClick={handleClick}
                className="border-2 border-rose-700 rounded-lg bg-rose-700 text-white text-lg m-2 p-2"
            >AGREGAR
            </button>
            <ul className="pt-4">
                {
                    giftList.map((gift) => (
                        <li 
                            key={gift.id}
                            className="py-2 px-5 flex place-items-center justify-between text-xl">
                            {gift.giftName}
                            <button
                                onClick={() => handleDelete(gift)}
                                className="border-4 border-rose-700 rounded-lg bg-rose-700 
                                            text-white text-lg ml-4 p-3
                                            bg-[url('../icons/trash-can.png')] bg-contain"
                                >
                            </button>
                        </li>
                    ))
                }
            </ul>
        </form>
    );
}

export default GiftForm;