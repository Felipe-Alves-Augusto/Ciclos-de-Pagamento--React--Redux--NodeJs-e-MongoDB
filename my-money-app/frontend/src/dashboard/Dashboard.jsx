import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getSummary } from './dashboardAction';

import React, { useEffect, useState } from "react";
import ContentHeader from "../common/template/ContentHeader";
import Content from "../common/template/Content";
import ValueBox from "../common/widget/ValueBox";
import axios from 'axios';
import Row from '../common/layout/Row';

const Dashboard = (props) => {
   
    const BASE_URL = 'http://localhost:3003/api';
    const [credit, setCredit] = useState(0);
    const [debt, setDebt] = useState(0);

    useEffect(() => {
        // props.getSummary();
        // console.log('teste função',props.getSummary());
        axios.get(`${BASE_URL}/summary`).then(result => {
            console.log('resultado', result.data);
            if(result.data.length !== 0){
                setCredit(result.data[0].credit);
                setDebt(result.data[0].debt);    
            }
            
        });
        
    }, [])

    // const { credit, debt } = props.summary;
    
    return (
        <div>
            <ContentHeader title="Dashboard" small="Versão 1.0"></ContentHeader>
            <Content>
                <Row>
                    <ValueBox cols="12 4"
                    color="green" icon="bank" value={`R$ ${credit}`} text="Total de Créditos"></ValueBox>

                    <ValueBox cols="12 4"
                    color="red" icon="credit-card" value={`R$ ${debt}`} text="Total de Débitos"></ValueBox>

                    <ValueBox cols="12 4"
                    color="blue" icon="money" value={`R$ ${credit - debt}`} text="Valor Consolidado"></ValueBox>
                </Row>
            </Content>
        </div>
    );
}

//essa função serve para tirar o dado do redux e passar para o componente
// const mapStateToProps = state => ({
//     summary: state.dashboard.summary
// });

//bindActionCreators faz a ligação de todos os actionCreatros criados
// liga com o dispatch, o dispatch e a função que vai disparar o getSummary;
// então com isso o componente vai ter acesso ao getSummary e os dados que retorna
// const mapDispatchToProps = dispatch => bindActionCreators({getSummary}, dispatch)

export default Dashboard;