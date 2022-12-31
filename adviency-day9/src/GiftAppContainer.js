import React, { useEffect } from 'react';

import GiftForm from "./GiftForm";
import GiftListContainer from "./GiftListContainer";

export default function GiftAppContainer() {

    const [gift, setGift] = React.useState("");
    const [quantity, setQuantity] = React.useState(1);
    const [giftList, setGiftList] = React.useState(
        JSON.parse(window.localStorage.getItem('giftList')) || []);

    useEffect(() => {
        localStorage.setItem('giftList', JSON.stringify(giftList));
    });

    return (
        <>
            <GiftForm
                gift={gift}
                onGiftChange={setGift}
                quantity={quantity}
                onQuantityChange={setQuantity}
                giftList={giftList}
                onGiftListChange={setGiftList}
            />
            <GiftListContainer
                giftList={giftList}
                onGiftListChange={setGiftList}
            />
            <h2
                className={giftList.length ? "hidden" : ""}
            >Agregá algún regalo, no seas tonto</h2>
            <button onClick={() => setGiftList([])}
                className={giftList.length < 2 ? "hidden" : ""}
            >BORRAR TODO</button>
        </>
    );
}
