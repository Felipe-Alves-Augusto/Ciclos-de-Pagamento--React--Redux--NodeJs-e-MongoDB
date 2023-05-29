import React from "react";
import Grid from "../common/layout/Grid";
import { Field, arrayInsert, arrayRemove } from "redux-form";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import If from "../common/operator/If";


const ItemList = (props) => {

    function add(index, item = {}) {
        if(!props.readOnly){
            props.arrayInsert('billingCycleForm', props.field, index, item);
        }
    }

    function remove(index){
        if(!props.readOnly && props.list.length > 1){
            props.arrayRemove('billingCycleForm', props.field, index);
        }
    }

    function renderRows(){

        const list = props.list || [];
        return list.map((item, index) => (
            <tr key={index}>
                <td><Field placeholder="Informe o nome" className="form-control" readOnly={props.readOnly} name={`${props.field}[${index}].name`} component='input'></Field></td>
                <td><Field placeholder="Informe o valor" className="form-control" readOnly={props.readOnly} name={`${props.field}[${index}].value`} component='input'></Field></td>
                <If test={props.showStatus}>
                <td>
                    <Field className="form-control" readOnly={props.readOnly} name={`${props.field}[${index}].status`} component='select'>
                        <option selected value="N/D">Informe o status</option>
                        <option value="PAGO">PAGO</option>
                        <option value="PENDENTE">PENDENTE</option>
                        <option value="AGENDADO">AGENDADO</option>
                    </Field>
                </td>
                </If>
                <td>
                    <div className="flex-buttons">
                        <button onClick={() => add(index + 1)} type="button" className="btn btn-success">
                            <i className="fa fa-plus"></i>
                        </button>

                        <button onClick={() => add(index + 1, item)} type="button" className="btn btn-warning">
                            <i className="fa fa-clone"></i>
                        </button>
                        <button onClick={() => remove(index)} type="button" className="btn btn-danger">
                            <i className="fa fa-trash-o"></i>
                        </button>
                    </div>
                </td>
            </tr>
        ))

        
    }

    return (
        <Grid cols={props.cols}>
            <fieldset>
                <legend>{props.legend}</legend>
                <table className="table">
                     <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Valor</th>
                            <If test={props.showStatus}>
                                <th>Status</th>
                            </If>
                            <th>Ações</th>
                        </tr>
                     </thead>
                     <tbody>
                        {renderRows()}
                     </tbody>
                </table>
            </fieldset>
        </Grid>
    )

}

const mapDispatchToProps = dispatch => bindActionCreators({arrayInsert, arrayRemove}, dispatch);

export default connect(null, mapDispatchToProps)(ItemList);