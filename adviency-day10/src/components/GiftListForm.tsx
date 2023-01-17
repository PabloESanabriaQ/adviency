import React, { FC, FormEvent } from "react";
import { Gift } from "../types/types";

interface Props {
  gift: Gift;
  giftList: Gift[];
  handleGiftChange: (newGift: Gift) => void;
  handleGiftListChange: (newGiftList: Gift[]) => void;
}

function GiftListForm({
  gift,
  giftList,
  handleGiftChange,
  handleGiftListChange,
}: Props) {
  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!gift.name) {
      alert("Agregá el nombre del regalo, porfis");
    } else if (!gift.image) {
      alert("Agregá el link de la foto del regalo, porfis");
    } else {
      handleGiftListChange([
        ...giftList,
        { ...gift, id: +new Date().getTime(), quantity: +gift.quantity },
      ]);
      handleGiftChange({
        id: 0,
        name: "",
        quantity: 1,
        image: "",
      });
    }
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    handleGiftChange({
      ...gift,
      [e.target.name]: [e.target.value],
    });
  }

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-4 w-1/2 gap-2 place-items-center">
      <input
        className="col-span-1 w-full border-b-2 p-1 text-center border-black shadow-sm shadow-black
        rounded-md"
        type="number"
        name="quantity"
        min="1"
        value={gift.quantity}
        onChange={handleChange}
      />
      <input
        className="col-span-3 w-full border-b-2 p-1 text-center border-black shadow-sm shadow-black
        rounded-md"
        placeholder="Nombre del regalo"
        type="text"
        name="name"
        value={gift.name}
        onChange={handleChange}
      />
      <input
        className="col-span-4 w-full border-b-2 p-1 text-center border-black shadow-sm shadow-black
        rounded-md"
        placeholder="Link de foto del regalo"
        type="text"
        name="image"
        value={gift.image}
        onChange={handleChange}
      />
      <button className="col-span-4 border-b-2 p-1 text-center border-black shadow-sm shadow-black
      bg-white rounded-md w-1/2">Agregar</button>
    </form>
  );
}

export default GiftListForm;
