import React, { useState } from "react";

export function Counter() {
    const [contador, setContador] = useState(0);

    return (
        <div style={{ marginTop: "20px", marginLeft: "20px" }}>
            <h1>Exemplo de Contador em React</h1>
            <h2>{contador}</h2>
            <div>
                <button
                    onClick={() => {
                        setContador(contador - 1);
                    }}
                >
                    Diminuir
                </button>
                <button
                    onClick={() => {
                        setContador(contador + 1);
                    }}
                >
                    Aumentar
                </button>
            </div>
        </div>
    );
}
