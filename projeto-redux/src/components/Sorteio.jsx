import React from "react";
import Card from "./Card";

export default props => {
    const {min, max} = props
    const aleatorio = parseInt (Math.random() * max-min) + min
    return (
        <Card title="Sorteio dos números" purple>
            <div>
                <span> Resultado:</span>
                {/* <span> {aleatorio} </span> */}
                <span> {15} </span>
            </div>
        </Card>
    )
}