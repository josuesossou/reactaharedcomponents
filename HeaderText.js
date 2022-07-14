import React from 'react'

/**
 * text @type String
 * padding @type number
 * isBold @type boolean
 * styles @type Object holds style properties
 */
const headerText = ({
    text,
    isBold,
    className,
    styles
}) => (
    <h1 
        style={{
            padding: 0,
            margin: 0,
            fontSize: 25,
            fontWeight: isBold? 800 : 400,
            ...styles
        }}
        className={className}
    >
        {text}
    </h1>
)

export default headerText