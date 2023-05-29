const INITIAL_STATE = {
     summary: {
        credit: 0,
        debt: 0
    }
}

export default function(state = INITIAL_STATE, action) {
    // if(action.type === 'BILLING_SUMMARY_FETCHED'){
    //     return {
    //         ...state,
    //         summary: action.payload.data
    //     }
    // } else {
    //     return state;
    // }
    switch(action.type){
        case 'BILLING_SUMMARY_FETCHED':
            return {
                ...state,
                summary: action.payload.data
            }
        
        default: 
            return state;
    }
}