import React from "react";

/**
 * @param {Function} close 
 */
const overlayContent = ({
    close, // function
    className,
    children
}) => {
    return (
        <div style={{
            height: '100vh',
            width: '100vw',
            display: 'flex',
            position: 'fixed',
            zIndex: 1000,
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <div    
                className="blury-background" 
                style={{ 
                    height: '100%',
                    width: '100%',
                    position:'absolute',
                }}
                onClick={close}
            ></div>
            <div className="close-btn" onClick={close}></div>
            <div className={className}>{children}</div>
        </div>
    )
}

export default overlayContent