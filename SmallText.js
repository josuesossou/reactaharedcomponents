import React from 'react'

/**
 * text @type String
 * padding @type number
 * isBold @type boolean
 * styles @type Object holds style properties
 */
const smallText = ({
    text,
    isBold,
    styles,
    className
}) => (
    <small
        style={{
            padding: 0,
            margin: 0,
            fontSize: 12,
            fontWeight: isBold? 800 : 400,
            ...styles
        }}
        className={className}
    >
        {text}
    </small>
)

export default smallText