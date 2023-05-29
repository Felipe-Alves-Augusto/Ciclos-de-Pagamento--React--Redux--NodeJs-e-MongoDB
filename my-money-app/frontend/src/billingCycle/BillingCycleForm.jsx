import React from "react";
import {reduxForm, Field, formValueSelector} from 'redux-form'
import LabelAndInput from "../common/form/LabelAndInput";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { init } from "./BillingCycleActions";
import ItemList from "./ItemList";
import Summary from "./Summary";
import Row from "../common/layout/Row";

const BillingCycleForm = (props) => {

    const {handleSubmit, readOnly, credits, debts} = props;

    function calculateSummary(){
        const sum = (t, v) => t + v;
        return {
            sumOfCredits: props.credits.map(c => +c.value || 0).reduce(sum),
            sumOfDebts: props.debts.map(d => d.value || 0).reduce(sum)
        }
    }

    const { sumOfCredits, sumOfDebts } = calculateSummary()

    return (
        <form method="post" role="form" onSubmit={handleSubmit}>
            <div className="box-body">
                <Row>
                    <Field readOnly={readOnly} name="name" type="text" component={LabelAndInput} label="Nome"
                    cols="12 4" placeholder="Informe o nome"></Field>
                    <Field readOnly={readOnly} name="month" component={LabelAndInput} label="Mês" cols="12 4"
                    placeholder="Informe o mês" type="number"></Field>
                    <Field readOnly={readOnly} name="year" component={LabelAndInput} label="Ano" cols="12 4"
                    placeholder="Informe o ano" type="number"></Field>
                </Row>
                <Row>
                    <Summary credit={sumOfCredits} debt={sumOfDebts}></Summary>
                </Row>

                <Row>
                    <ItemList list={credits} readOnly={readOnly} cols="12 6" field="credits" legend="Créditos"></ItemList>
                    <ItemList showStatus={true} list={debts} readOnly={readOnly} cols="12 6" field="debts" legend="Débitos"></ItemList>
                </Row>
            </div>
            <div className="box-footer">
                <button type="submit" className={`btn btn-${props.buttonClass}`}>
                    {props.textButton}
                </button>
                <button type="button" className="btn btn-default btn-cancel" onClick={props.init}>Cancelar</button>
            </div>
        </form>
    )
}

const mapDispatchToProps = dispatch => bindActionCreators({init}, dispatch);
const selectorForm = formValueSelector('billingCycleForm');
const mapStateToProps = state => ({
    credits: selectorForm(state, 'credits'),
    debts: selectorForm(state, 'debts'),
})
export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({form: 'billingCycleForm', destroyOnUnmount: false})(BillingCycleForm));