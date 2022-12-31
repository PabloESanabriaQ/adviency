export default function GiftListContainer({ giftList, onGiftListChange }) {

    function handleDelete(item){
        onGiftListChange(giftList.filter(gift => item !== gift));
    }

    return (
        <ul>
            {giftList.map(
                item => <li key={item.id}>
                    <span>{item.quantity}</span>
                    <span>{item.gift}</span>
                    <button onClick={() => handleDelete(item)}>Borrar</button>
                </li>)}
        </ul>
    );
}