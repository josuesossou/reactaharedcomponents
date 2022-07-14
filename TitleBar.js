import React from "react";
import { SmallText } from ".";

const TitleBar = ({ items }) => (
    <Row 
        styles={{ border: '1px solid grey', padding: '.5em .9em'}} 
        alignHorizontal='space-between'
    >
        {items.map((text) => (
            <SmallText text={text} isBold />
        ))}

    {/* Start - End Time */}
    {/* <SmallText text={'Start - End Time'} isBold /> */}

    {/* Join Method */}
    {/* <Column width='100%' alignHorizontal='flex-start'> */}
    {/* <SmallText text={'Join Method'} isBold /> */}
    {/* </Column> */}

    {/* Type */}
    {/* <Column width='100%' alignHorizontal='flex-start'> */}
    {/* <SmallText text={'Type'} isBold /> */}
    {/* </Column> */}

    {/* Number of Students in Queue */}
    {/* <Column width='100%' alignHorizontal='flex-start'> */}
        <SmallText text={''} isBold styles={{ width: '8em'}} />
    {/* </Column> */}
    </Row>
)