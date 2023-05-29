import React, { useEffect, useState } from "react";
import axios from 'axios';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { showUpdate, showDelete } from "./BillingCycleActions";


const BillingCyclesList = (props) => {

    const [list, setList] = useState([]);
    const BASE_URL = 'http://localhost:3003/api';

    useEffect(() => {
        axios.get(`${BASE_URL}/billingCycles`).then(result => {
           
            setList(result.data);
        })
        .catch(error => {
            console.log(error);
        })

    }, [list])

        
    return (
    
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Mês</th>
                        <th>Ano</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {list.map(bc => {
                        return (
                            <tr key={bc._id}>
                                <td>{bc.name}</td>
                                <td>{bc.month}</td>
                                <td>{bc.year}</td>
                                <td>
                                    <button className="btn btn-warning btn-edit" onClick={() => props.showUpdate(bc)}>
                                        <i className="fa fa-pencil"></i>
                                    </button>
                                    <button className="btn btn-danger" onClick={() => props.showDelete(bc)}>
                                        <i className="fa fa-trash-o"></i>
                                    </button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )

}

const mapDispatchToProps = dispatch => bindActionCreators({showUpdate, showDelete}, dispatch)

export default connect(null, mapDispatchToProps)(BillingCyclesList);