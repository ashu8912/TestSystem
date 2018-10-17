import React from 'react';
import {Field,reduxForm} from 'redux-form';
import { Input } from '../../UI/Input/Input';
import { NavLink } from 'react-router-dom';
class RegisterForm extends React.Component{
    onSubmit=(val)=>{
        console.log(val);
    
     }
    
    render(){
       let {handleSubmit}=this.props;
        return(<form className="FormContainer" onSubmit={handleSubmit(props=>this.onSubmit(props))}>
           <h3 className="FormTitle">{this.props.form}</h3>
           <Field name="firstName" elementType="input"
           elementConfig={
            {type:'text',
            placeholder:'Enter Your First Name'
         }
        } component={Input} label="FirstName" required/>
           <Field name="lastName" elementType="input" 
           elementConfig={
            {type:'text',
            placeholder:'Enter Your Last Name'
         }
        } component={Input} label="Last Name" />
           <Field name="email" elementType="input" elementConfig={
               {type:'email',
               placeholder:'Enter email'
            }
           } component={Input} label="Email" required/>
           <Field name="password" elementType="input" elementConfig={
               {type:'password',
               placeholder:'Enter Password'
            }
           } component={Input} label="Password" required/>
           <Field name="confirmPassword" elementType="input"
           elementConfig={
            {type:'password',
            placeholder:'Confirm Password'
         }
        } component={Input} label="Confirm Password" required/>
       
           {/* <Field name="DOB" elementType="input"/> */}
        <button type="submit" className="SubmitButton">Register</button>
    <div className="FormSwitchLink"><NavLink to="/login">login?click here</NavLink></div>
    </form>)
    }
}
function validate(value){
    const errors={};
    if(!/^([a-zA-Z0-9_]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/.test(value.email))
    {
    errors.email="This is not a valid Email";
    }
    if(!value.firstName)
    {
        errors.firstName="First Name is required";
    }
    if(!value.email && !value.password)
    {
errors.email='This field is required';
    }
    console.log(value.password)
    if(value.password && value.password.length<=4)
    {console.log("inside");
        errors.password="Passowrd must be atleast 4 characters long"
    }
    if(value.confirmPassword && value.confirmPassword!==value.password)
    {
        errors.confirmPassword="password didn't match"
    }
    if(!value.confirmPassword)
    {
        errors.confirmPassword="this field is required"
    }
    if(!value.password)
    {
        errors.password="Password is required";
    }
return errors;
}
export default reduxForm({form:'Register Here',validate})(RegisterForm)