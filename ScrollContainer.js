import React from "react";

const scrollContainer = ({ scrollVertiacally=true, children }) => (
    <div style={{ 
        position: 'relative',
        overflow: 'auto',
        flexWrap: 'nowrap',
    }}>
        <div 
            style={{
                overlowY: scrollVertiacally ? 'scroll': 'none',
                overlowX: scrollVertiacally ? 'none': 'scroll',
                position: 'relative',
                display: 'inline-block',

            }}
        >
            {children}
        </div>
        
    </div>
)

export default scrollContainer
