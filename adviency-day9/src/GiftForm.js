export default function GiftForm({ gift, giftList,
    onGiftChange, onGiftListChange }) {

    function handleChange(event) {
        onGiftChange({
            ...gift,
            [event.target.name] : event.target.value
        });
    }

    function handleSubmit(event) {
        event.preventDefault();
        if(gift.giftName === ""){
            alert("Insertá un regalo!")
        } else {
            onGiftListChange( [ {...gift, id: new Date().getTime().toString()}, ...giftList] );
            onGiftChange({giftName: "", quantity: +"1"})
        }
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="bg-green-700 p-5 rounded-2xl grid grid-cols-3 w-2/3 gap-4">
            <input
                name="giftName"
                value={gift.giftName}
                type="text"
                onChange={handleChange}
                className="bg-transparent border-4 border-stone-200 rounded-lg
                text-white col-span-2 p-2 font-medium"
            />
            <input
                name="quantity"
                min={1}
                value={gift.quantity}
                type="number"
                onChange={handleChange}
                className="bg-transparent border-4 border-stone-200 rounded-lg
                text-white text-center p-2 font-medium col-span-1"
            />
            <button
            className="border-4 col-span-3 border-red-700 bg-stone-200 rounded-lg 
            text-red-700 font-bold p-2 w-1/2 place-self-center"
            >AGREGAR</button>
        </form>
    );
}