import React from 'react';

export default function HoverCounter({ count, incrementFun, theme, switchTheme }) {
    console.log(theme);
    const style = theme === 'dark' ? { backgroundColor: '#000000', color: '#ffffff' } : null;
    return (
        <div>
            <h1 onMouseOver={incrementFun} style={style}>
                Hovered {count} times
            </h1>
            <button type="button" onClick={switchTheme}>
                Switch theme
            </button>{' '}
        </div>
    );
} // ok
