import React from 'react';
export default function Alert (props){
    const captilize = (word) =>{
        const lower = word;
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
    return(
        <div style={{height:"50px"}}>
            {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                <strong>{captilize(props.alert.type)} : </strong> {captilize(props.alert.msg)}
            </div>}
        </div>
    )
}
