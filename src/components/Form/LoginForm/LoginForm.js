import React from 'react';
import {reduxForm} from 'redux-form';
import { Input } from '../../UI/Input/Input';
import {Field} from 'redux-form'
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import * as actions from '../../../store/actions/actionCreators/auth';
class LoginForm extends React.Component
{ 
    onSubmit=(val)=>{
        this.props.onFormSubmit(val,"/users/login");
    
     }
    
    render(){
        console.log(this.props);
    const {handleSubmit}=this.props;
    return (<form className="FormContainer" onSubmit={handleSubmit(props=>this.onSubmit(props))}>
       <h3 className="FormTitle">{this.props.form}</h3>
       <Field name="email" elementType="input" component={Input}
       elementConfig={
    {type:'text',placeholder:"Enter your Email"}} label="Email" required/>
    <Field name="password" elementType="input" component={Input}
     elementConfig={{type:'text',
    placeholder:"Enter password"}} required label="Password"/>
     <button type="submit" className="SubmitButton">
     Submit</button>
     <div className="FormSwitchLink">
     <NavLink to="/register">Not yet registered?click here</NavLink></div>
     </form>)
    
    }
}
function validate(value){
    const errors={};
    if(!/^([a-zA-Z0-9_]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/.test(value.email))
    {
    errors.email="This is not a valid Email";
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
    if(!value.password)
    {
        errors.password="Password is required";
    }
return errors;
}
const mapDispatchToProps=(dispatch)=>{
return {
    'onFormSubmit':(postObject,url)=>{dispatch(actions.auth(postObject,url))}
}
}
const mapStateToProps=(state)=>{
return {
    'auth':state.auth
}
}
export default connect(mapStateToProps,mapDispatchToProps)(reduxForm({form:"LoginForm",
validate
})(LoginForm))
