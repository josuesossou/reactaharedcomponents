import React from 'react'

/**
 * @param onClick
 * @param text
 * @param padding 
 * @param showShadow
 * @param showBorder 
 * @param styles holds style properties
 * @param borderThickeness Number
 */

const button = ({
    onClick,
    text,
    padding='0.6em 1em',
    showShadow=false,
    showBorder=false,
    styles={},
    isDisabled=false,
    isBold=false,
    size=15,
    borderThickeness=1,
    borderColor='light-grey',
    className,
    onMouseOver,
    children
}) => (
    <button 
        style={{
            padding,
            borderRadius: 10,
            boxShadow: showShadow? '0px 5px 9px rgba(0,0,0,0.2)': '',
            border: showBorder? `${borderThickeness}px solid ${borderColor}`: 0,
            outline: 'none',
            fontWeight: isBold? 800 : 400,
            fontSize: size,
            cursor: isDisabled? 'not-allowed':'pointer',
            ...styles
        }}
        onClick={onClick}
        onMouseOver={onMouseOver}
        disabled={isDisabled}
        className={className}
    >
        {text}
        {children}
    </button>
)

export default button