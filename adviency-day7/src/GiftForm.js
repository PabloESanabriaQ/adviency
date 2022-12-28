import React from 'react';

export default function GiftForm() {

    const [gift, setGift] = React.useState("");
    const [giftList, setGiftList] = React.useState([]);

    function handleChange(event) {
        setGift(event.target.value);
    }

    function handleClick(event) {
        event.preventDefault();
        if (gift === "") {
            alert("Ingresá un regalo porfis!");
        } else if ((giftList.find(({ name }) => name === gift) === undefined)) {
            setGiftList([{ id: new Date().getTime().toString(), name: gift }, ...giftList]);
            setGift("");
        } else {
            alert("Ese regalo ya está en la lista, por favor ingresá un regalo distinto!")
        }
    }

    function handleDelete(gift) {
        setGiftList(giftList.filter((item) => item !== gift));
    }

    function handleDeleteAll() {
        setGiftList([]);
    }

    return (
        <div
        className="flex flex-col items-center">
            <form
                className="mt-10 mb-4">
                <input
                    onChange={handleChange}
                    value={gift}
                    placeholder="Agregar un regalo..."
                    className="mx-4 p-2 rounded-lg"
                />
                <button
                    onClick={handleClick}
                    className="mx-4 p-2 rounded-lg bg-white font-medium"
                >AGREGAR
                </button>
            </form>
            <ul>
                {giftList.map((gift) =>
                    <li key={gift.id}
                    className="text-white mt-4 text-lg font-medium"
                    > {gift.name}
                        <button
                            className="mx-4 p-2 rounded-lg bg-white font-medium text-black text-base"
                            onClick={() => handleDelete(gift)}>BORRAR</button>
                    </li>)}
            </ul>
            <h2 className={!giftList.length ? "mt-20 text-white font-medium text-center text-xl" : "hidden"}
            >Agregá regalos que me pongo triste 😞</h2>
            <button
                className={giftList.length > 1 ? "my-8 mx-4 p-2 rounded-lg bg-white font-medium" : "hidden"}
                onClick={() => handleDeleteAll()}
            >BORRAR TODO</button>
        </div>
    )
}