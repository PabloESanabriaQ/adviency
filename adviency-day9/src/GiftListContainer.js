export default function GiftListContainer({ giftList, onGiftListChange }) {

    function handleDelete(item) {
        onGiftListChange(giftList.filter(gift => item !== gift));
    }

    return (
        <ul
        className="w-3/5 h-full overflow-auto m-10">
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
        <li
        className="w-full h-10 flex justify-between border-4 border-red-700 rounded-xl
        items-center font-semibold px-4 my-2">
            <span className="bg-amber-700 rounded-full px-2 text-white">{item.quantity}</span>
            <span>{item.giftName}</span>
            <button onClick={() => handleDelete(item)}
            className="bg-amber-700 rounded-full px-2 text-white">Borrar</button>
        </li>)
}
