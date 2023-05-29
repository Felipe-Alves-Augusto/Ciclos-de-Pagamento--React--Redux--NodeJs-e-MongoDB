import axios from 'axios';
import { toastr } from 'react-redux-toastr';
import {reset as resetForm, initialize} from 'redux-form';
import { showTabs, selectTab } from '../common/tab/tabActions';


const INITIAL_VALUES = {
    credits: [{}],
    debts: [{}]
};

export function create(values){
    const BASE_URL = 'http://localhost:3003/api';

    return dispatch => {
        axios.post(`${BASE_URL}/billingCycles`, values)
        .then(resp => {
            console.log(resp);
            toastr.success('sucesso', resp.data.message);
            dispatch(init())

        })
        .catch(error => {
            console.log(error);
            toastr.error('Erro', error.response.data.message);
        })
    }


}

export function update(values){
    console.log(values._id);
    const BASE_URL = 'http://localhost:3003/api';

    return dispatch => {
        axios.put(`${BASE_URL}/billingCycles/${values._id}`, values)
        .then(resp => {
            console.log(resp);
            toastr.success('sucesso', resp.data.message);
            dispatch(init())

        })
        .catch(error => {
            console.log(error);
            toastr.error('Erro', error.response.data.message);
        })
    }
}

export function deleteCycle(values){
    console.log(values._id);
    const BASE_URL = 'http://localhost:3003/api';

    return dispatch => {
        axios.delete(`${BASE_URL}/billingCycles/${values._id}`, values)
        .then(resp => {
            console.log(resp);
            toastr.success('sucesso', resp.data.message);
            dispatch(init())

        })
        .catch(error => {
            console.log(error);
            toastr.error('Erro', error.response.data.message);
        })
    }
}

export function showUpdate(billingCycle){
    console.log(billingCycle);
    return [
        showTabs('tabUpdate'),
        selectTab('tabUpdate'),
        initialize('billingCycleForm', billingCycle)
    ]
}

export function showDelete(billingCycle){
    console.log(billingCycle);
    return [
        showTabs('tabDelete'),
        selectTab('tabDelete'),
        initialize('billingCycleForm', billingCycle)
    ]
}

export function init(){
    return [
        showTabs('tabList', 'tabCreate'),
        selectTab('tabList'),
        initialize('billingCycleForm', INITIAL_VALUES)

    ]
}   






