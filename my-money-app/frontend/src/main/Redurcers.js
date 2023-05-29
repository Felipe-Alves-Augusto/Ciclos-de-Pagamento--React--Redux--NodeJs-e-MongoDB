import { combineReducers } from 'redux';
import dashboardReducer from '../dashboard/dashboardReducer';
import tabReducer from '../common/tab/tabReducer';
import {reducer as formReducer} from 'redux-form';
import {reducer as toastrReducer} from 'react-redux-toastr';

//dados do dashboard
//está retornando o sumary
// aqui vamos implementar o backend
const rootReducer = combineReducers({
    dashboard: dashboardReducer,
    tab: tabReducer,
    form: formReducer,
    toastr: toastrReducer
})

export default rootReducer;