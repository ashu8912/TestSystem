import React from 'react';
import {Route,Switch,Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import LoginForm from '../Form/LoginForm/LoginForm';
import RegisterForm from '../Form/RegisterForm/RegisterForm';

const AppRoutes=(props)=>{
    const decideRoutes=()=>{
        let routes;
    if(props.auth.isAdmin)
    {
    routes=<Switch>
        <Route path="/admin"/>
        <Redirect to="/admin"/>
    </Switch>
    }
    else if(props.auth.isSuperAdmin){
     routes=<Switch>
         <Route path="/superAdmin"/>
         <Redirect to="/superAdmin"/>
     </Switch>
    }
    else if(props.auth.isStudent)
    {
      routes=<Switch>
          <Route path="/student"/>
          <Redirect to="/student"/>
      </Switch>
    }
return routes;
    }
    return (
    !props.auth.sessionId?
                <Switch>
                <Route path="/login" component={LoginForm}/>
            <Route path="/register" component={RegisterForm}/>
            <Redirect to="/login"/></Switch>:decideRoutes()
    )
}
const mapStateToProps=(state)=>{
return {
    'auth':state.auth
}
}
export default connect(mapStateToProps)(AppRoutes);