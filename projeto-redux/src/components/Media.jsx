import React from "react";
import Card from "./Card";

function Media(props) {   
    // export default props => {
    const {min, max} = props
    return (
        <Card title="Média dos números" green>
            <div>
                <span> Resultado:</span>
                <span> {(min + max) / 2} </span>
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

export default connect (mapStateToProps)(Media)