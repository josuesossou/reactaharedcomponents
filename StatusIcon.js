import React from "react";

const statusIcon = ({
    size=10,
    color = 'green',
    className,
    styles
}) => (
    <div style={{ 
        width: size, 
        height: size, 
        backgroundColor: color,
        borderRadius: '100%',
        ...styles
    }} className={className}></div>
)

export default statusIcon