import React from "react";
import Card from "./Card";

import { connect } from "react-redux"

function Soma(props) {  
    // export default props => {
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

function mapStateToProps(state) {
    return {
        min: state.numeros.min,
        max: state.numeros.max
    }
}

export default connect (mapStateToProps)(Soma)