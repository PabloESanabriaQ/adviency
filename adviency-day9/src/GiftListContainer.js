export default function GiftListContainer({ giftList, onGiftListChange }) {

    function handleDelete(item) {
        onGiftListChange(giftList.filter(gift => item !== gift));
    }

    return (
        <ul>
            {giftList.map(
                item => <ListItem
                    key={item.id}
                    item={item}
                    handleDelete={handleDelete}
                />)}
        </ul>
    );
}

function ListItem({ item, handleDelete }) {
    return (
        <li>
            <span>{item.quantity}</span>
            <span>{item.giftName}</span>
            <button onClick={() => handleDelete(item)}>Borrar</button>
        </li>)
}
