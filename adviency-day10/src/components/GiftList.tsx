import { Gift } from "../types/types";

interface Props {
  giftList: Gift[];
  handleGiftListChange: (giftList: Gift[]) => void;
}

interface listItemProps {
  gift: Gift;
  giftList: Gift[];
  handleGiftListChange: (giftList: Gift[]) => void;
}

export default function GiftList({ giftList, handleGiftListChange }: Props) {
  return (
    <ul className="flex flex-col items-center p-5 w-1/2">
      {giftList.map((gift) => (
        <ListItem
          key={gift.id}
          gift={gift}
          giftList={giftList}
          handleGiftListChange={handleGiftListChange}
        />
      ))}
    </ul>
  );
}

function ListItem({ gift, giftList, handleGiftListChange }: listItemProps) {

  function handleDelete(gift: Gift) {
    handleGiftListChange(giftList.filter(item => item !== gift));
  }

  return (
    <li className="flex items-center p-5 w-full place-content-between">
      <span className="bg-red-700 text-white font-medium px-2 rounded-full">{gift.quantity}</span>
      <span className="font-medium px-2">{gift.name}</span>
      <img src={gift.image} alt={"foto de " + gift.name} className="object-contain w-20 h-20" />
      <button 
      onClick={() => handleDelete(gift)}
      className="bg-red-700 text-white font-medium px-2 rounded-full">BORRAR</button>
    </li>
  );
}
