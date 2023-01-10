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
        onGiftListChange( [ {...gift, id: new Date().getTime().toString()}, ...giftList] );
        onGiftChange({giftName: "", quantity: +"1"})
    }

    return (
        <form
            onSubmit={handleSubmit}>
            <input
                name="giftName"
                value={gift.giftName}
                type="text"
                onChange={handleChange}
            />
            <input
                name="quantity"
                min={1}
                value={gift.quantity}
                type="number"
                onChange={handleChange}
            />
            <button
            >AGREGAR</button>
        </form>
    );
}