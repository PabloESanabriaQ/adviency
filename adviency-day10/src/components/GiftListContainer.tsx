import { Gift } from "../types/types";

import { useEffect, useState } from "react";
import GiftList from "./GiftList";
import GiftListForm from "./GiftListForm";

export function GiftListContainer() {
  const [gift, setGift] = useState<Gift>({
    id: 0,
    name: "",
    quantity: 1,
    image: "",
  });

  const [giftList, setGiftList] = useState<Gift[]>(
    JSON.parse(localStorage.getItem("giftList") || "") || []
  );

  useEffect(() => {
    localStorage.setItem("giftList", JSON.stringify(giftList));
  }, [giftList]);

  return (
    <section
      className="container flex flex-col items-center bg-green-400 my-20
    rounded-3xl p-8 shadow-lg shadow-black"
    >
      <h1 className="my-8 m-4 text-5xl font-['Pacifico'] text-red-600">
        Lista de Regalos
      </h1>
      <GiftListForm
        gift={gift}
        giftList={giftList}
        handleGiftChange={setGift}
        handleGiftListChange={setGiftList}
      />
      <GiftList giftList={giftList} handleGiftListChange={setGiftList} />
    </section>
  );
}
