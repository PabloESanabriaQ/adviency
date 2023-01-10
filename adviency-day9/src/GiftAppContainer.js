import { useState, useEffect } from 'react';

import GiftForm from "./GiftForm";
import GiftListContainer from "./GiftListContainer";

export default function GiftAppContainer() {
;
    const [gift, setGift] = useState({id: 0, giftName: "", quantity: "1"});
    const [giftList, setGiftList] = useState(
        JSON.parse(window.localStorage.getItem('giftList')) || []);

    useEffect(() => {
        localStorage.setItem('giftList', JSON.stringify(giftList));
    });
    
    return (
        <>
            <GiftForm
                gift={gift}
                onGiftChange={setGift}
                
                giftList={giftList}
                onGiftListChange={setGiftList}
            />
            <GiftListContainer
                giftList={giftList}
                onGiftListChange={setGiftList}
            />
            {giftList.length === 0 && <h2>Agregá algún regalo, no seas tonto</h2>}
            {giftList.length > 1 && <button onClick={() => setGiftList([])}>BORRAR TODO</button>}
        </>
    );
}
