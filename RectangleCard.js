import React from 'react'

/**
 * @param text String
 * @param padding number
 * @param showShadow boolean
 * @param showBorder boolean
 * @param styles Object holds style properties
 */

const rectangleCard = ({
    children,
    padding='.5em 2em',
    showShadow,
    showBorder=true,
    className,
    styles,
    onMouseOver,
    onMouseOut,
}) => (
    <div
        style={{
            padding,
            boxShadow: showShadow? '0px 3px 6px rgba(0,0,0,0.3)': '',
            border: showBorder? '1px solid grey':'',
            borderRadius: 10,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: 'row',
            ...styles
        }}
        onMouseOver={onMouseOver}
        onMouseOut={onMouseOut}
        className={className}
    >
        {children}
    </div>
)

export default rectangleCard