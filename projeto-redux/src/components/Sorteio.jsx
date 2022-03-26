import React from "react";
import Card from "./Card";

function Sorteio(props) {  
    // export default props => {
    const {min, max} = props
    const aleatorio = parseInt (Math.random() * max-min) + min
    return (
        <Card title="Sorteio dos números" purple>
            <div>
                <span> Resultado:</span>
                <span> {aleatorio} </span>
            </div>
        </Card>
    )
}

function mapStateToProps(state) {
    return {
        min: state.numeros.min,
        max: state.numeros.max
    }
}

export default connect (mapStateToProps)(Sorteio)