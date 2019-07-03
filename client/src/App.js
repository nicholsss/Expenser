import React from "react";
import LoginForm from "./components/LoginForm";
const App = (props) => {
  console.log('state', props)
  return (
    <div>    
      <LoginForm />
    </div>
  );
};




export default App
