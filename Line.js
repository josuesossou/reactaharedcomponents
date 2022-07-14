import React from "react";

const line = ({
    border = '1px solid grey',
    style,
    className
}) => (
    <hr style={{ border, width: '100%', ...style }} className={className}></hr>
)

export default line