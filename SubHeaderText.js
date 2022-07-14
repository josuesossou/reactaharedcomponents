import React from 'react'

/**
 * text @type String
 * padding @type number
 * isBold @type boolean
 * styles @type Object holds style properties
 */
const subHeaderText = ({
    text,
    isBold,
    className,
    styles

}) => (
    <h2
        style={{
            padding: 0,
            margin: 0,
            fontSize: 20,
            fontWeight: isBold? 800 : 400,
            ...styles
        }}
        className={className}
    >
        {text}
    </h2>
)

export default subHeaderText