import React from 'react'

/**
 * text @type String
 * padding @type number
 * isBold @type boolean
 * styles @type Object holds style properties
 */
const largeText = ({
    text,
    isBold,
    className,
    styles
}) => (
    <div
        style={{
            padding: 0,
            margin: 0,
            fontSize: 24,
            fontWeight: isBold? 800 : 400,
            ...styles
        }}
        className={className}
    >
        {text}
    </div>
)

export default largeText