import React from "react";

const Input = (props) => {

    return (
        <input {...props.input} placeholder={props.place} />
    )

}


export default Input;