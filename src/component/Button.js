import React from "react";

function Button ({boolean, tekst}) {
    return (
        <button
            disabled={boolean}
            type="button"
            onClick={() => console.log(`${tekst}`)}
        >
            {tekst}
        </button>
    )
}

export default Button;