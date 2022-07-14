import React from "react";
import { useSelector } from 'react-redux'
import { getMessage } from '../../Data/flashMessgeSlice';
import { NormalText, RectangleCard } from ".";

const FlashMassageCard = () => {
    const { success, message } = useSelector(getMessage)
    console.log('FLASH CARD', message)

    return (
        <RectangleCard
            showShadow
            styles={{ 
                color: success? 'green': 'red',
                backgroundColor: 'white',
                position: 'fixed',
                top: 10,
                width: '70vw',
                zIndex: 1001,
                left: '50%',
                transform: 'translateX(-50%)',
                display: 'flex',
                justifyContent: 'center'
            }}
        >
            <NormalText text={message} />
        </RectangleCard>
    )
}

export default FlashMassageCard