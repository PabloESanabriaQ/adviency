export default function GiftForm({gift, quantity, giftList, 
    onGiftChange, onQuantityChange, onGiftListChange}){

    function handleGiftChange(event){
        onGiftChange((event.target.value).toString().toUpperCase());
    }

    function handleQuantityChange(event){
        onQuantityChange(event.target.value);
    }


    function handleGiftListChange(event){
        event.preventDefault();
        onGiftListChange([
            {id: new Date().getTime().toString(), 
            gift: gift, 
            quantity: quantity},
            ...giftList]);
        onQuantityChange(1);
        onGiftChange("");
    }

    return (
        <form>
            <input 
            value={gift}
            type="text"
            onChange={handleGiftChange}
            />
            <input 
            min={1}
            value={quantity}
            type="number"
            onChange={handleQuantityChange}
            />
            <button
            onClick={handleGiftListChange}
            >AGREGAR</button>
        </form>
    );
}