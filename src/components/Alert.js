import React from 'react'

const Alert = (props) => {
  // const capitalise = (word)=> {
  //   const lower = word.toLowerCase();
  //   return lower.charAt(0).toUpperCase() + lower.slice(1);
  // }
  // console.log(props.alert.type)
  return (
       props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show" role="alert"`}>
            <strong>{props.alert.type}</strong>:{props.alert.msg} 
            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
  )
}

// ${props.alert.type}

export default Alert