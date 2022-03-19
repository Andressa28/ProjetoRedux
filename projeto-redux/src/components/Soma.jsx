import React from "react";
import Card from "./Card";

export default props => {
    const {min, max} = props
    return (
        <Card title="Soma dos números" blue>
            <div>
                <span> Resultado:</span>
                <span> {(min + max)} </span>
            </div>
        </Card>
    )
}