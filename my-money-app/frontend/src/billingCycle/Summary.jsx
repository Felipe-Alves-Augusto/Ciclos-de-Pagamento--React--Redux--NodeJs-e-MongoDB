import React from "react";
import Grid from "../common/layout/Grid";
import ValueBox from "../common/widget/ValueBox";
import Row from "../common/layout/Row";

const Summary = (props) => {

    return (
        <Grid cols="12">
            <fieldset>
                <legend>Resumo</legend>
                <Row>
                    <ValueBox cols="12 4"
                    color="green" icon="bank" value={`R$ ${props.credit}`} text="Total de Créditos"></ValueBox>

                    <ValueBox cols="12 4"
                    color="red" icon="credit-card" value={`R$ ${props.debt}`} text="Total de Débitos"></ValueBox>
                    
                    <ValueBox cols="12 4"
                    color="blue" icon="money" value={`R$ ${props.credit - props.debt}`} text="Valor Consolidado"></ValueBox>
                </Row>
            </fieldset>
        </Grid>
    )

}

export default Summary;