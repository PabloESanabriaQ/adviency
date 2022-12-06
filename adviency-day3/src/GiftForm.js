import React from "react";

function Form() {

    const [gift, setGift] = React.useState("");
    const [giftsList, setGiftsList] = React.useState([]);

    function handleClick(event) {
        setGiftsList([gift, ...giftsList]);
        setGift("");
        event.preventDefault();
    }

    function handleChange(event) {
        setGift(event.target.value);
    }

    return (
        <form className="text-center">
            <input placeholder="Agregar un regalo..." onChange={handleChange} value={gift} className="rounded-md p-2 shadow-md shadow-black" />
            <button onClick={handleClick} className="bg-white m-2 p-2 cursor-pointer rounded-md  shadow-md shadow-black">AGREGAR</button>
            <ul className="gift-list">
                {
                    giftsList.map((gift, id) => (<li 
                        key={id} 
                        className="text-lg tracking-wider pt-4 text-orange-300 font-medium"
                        > 
                        {gift} 
                        </li>))
                }
            </ul>
        </form>
    )
};

export default Form;
