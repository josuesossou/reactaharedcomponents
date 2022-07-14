import React from 'react'

/**
 * text @type String
 * padding @type number
 * isBold @type boolean
 * styles @type Object holds style properties
 */
const normalText = ({
    text,
    isBold,
    className,
    styles
}) => (
    <p 
        style={{
            padding: 0,
            margin: 0,
            fontSize: 18,
            fontWeight: isBold? 800 : 400,
            ...styles
        }}
        className={className}
    >
        {text}
    </p>
)

export default normalText