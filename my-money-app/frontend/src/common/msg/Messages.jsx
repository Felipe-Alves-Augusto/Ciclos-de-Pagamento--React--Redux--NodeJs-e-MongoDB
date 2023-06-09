import React from "react";
import ReduxToastr from 'react-redux-toastr';
import '../../../node_modules/react-redux-toastr/lib/css/react-redux-toastr.min.css';

const Messages = (props) => {
    return (
        <ReduxToastr 
        timeOut={4000} 
        newestOnTop={false}
        preventDuplicates={true}
        position="top-right"
        transitionIn="fadeIn"
        transitionOut="fadeOut"
        progressBar
        
        ></ReduxToastr>
    )
}

export default Messages