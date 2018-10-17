import React from 'react';
import './Input.css';
export const Input=(props)=>{
let inputElement;
console.log(props);
let {meta:{error,touched}}=props;
let classToApply=["Input"];
if(error && touched)
{
    classToApply.push("Invalid");
}
switch(props.elementType)
{
    case 'input':
    inputElement=<input 
    {...props.input}
     className={classToApply.join(' ')} 
    {...props.elementConfig}/>
    break;
    case 'textarea':
    inputElement=<textarea {...props.input} className={classToApply.join(' ')}
    {...props.elementConfig}></textarea>
    break;
    case 'select':
    inputElement=<select className={classToApply.join(' ')} {...props.input}>{
        props.elementConfig.options.map((option,index)=>{
       return <option key={index}>{option.displayValue}</option>
    })}</select>
    break;
    default:
    inputElement=<input/>
}
return (<div className="FormElement"><label className="Label">
    {props.label}{props.required?<span 
    className="RequiredStar">*</span>:null}
    </label>
    {inputElement}
    {props.meta.touched && props.meta.error?
    <span className="ErrorMessage">{props.meta.error}</span>:null}</div>)
}