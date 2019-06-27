import React from "react";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import {loginUser} from './reducers/loginReducer'

import { connect } from "react-redux";
const App = (props) => {
  console.log('props',props.user)

  
  if(props.user ===null){
    return<RegisterForm/>
  }
  return (
    <div>    
      <LoginForm />
    </div>
  );
};

const mapStateToProps = state => {
  return { user: state.user};
};
const mapDispatchToProps = {

  loginUser,
 
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);