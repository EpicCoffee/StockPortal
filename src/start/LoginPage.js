import React, { useState, useEffect } from 'react';
import FormComp from '../component/FormComp';
import InputField from '../component/InputField';
import ButtonComp from '../component/ButtonComp';
import Auth from '../routes/Authenticated';

const LoginPage = ({goToRegistation, goToLostPassword, props}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [infoMessage, setInfoMessage] = useState('');
    const [loginCount, setloginCount] =useState(0);
    const [isDisabled, setDisabled] = useState(false);

    useEffect (()=>{
        if(loginCount >3){
            setDisabled(true)
        }
    })
/** insert real password into if-statment and remove the alert */
    const onLoginAction = (event) => {
        event.preventDefault();
       Auth.login( email, password, (res, message) =>{
           if(res) {
            props.history.push('/home');
            return;
           }
           setInfoMessage(message +" "+ (3-loginCount) + " tries left");
           setloginCount(loginCount +1);
       });
       
    };
    

    return (
      <div className = 'StartDiv'>
          <FormComp headlineClass='startHeader' className ='FormDiv' headline ='Login' onSubmitAction = {onLoginAction} isDisabled ={isDisabled} value ='Login'
              inputFields = { 
              <div>
                  <InputField InputClass='startFields' headline='Email: ' type = 'text' name='email' onChangeAction={ value => setEmail(value)}/>
                  <InputField InputClass='startFields' headline='Password: ' type = 'password' name='password' onChangeAction={ value => setPassword(value)}/>
              </div>  
              } 
            />
            {infoMessage && <p>{infoMessage}</p>}
          <br />
          <ButtonComp btnClassName ='startUpButtons' btnName = 'Register Here' onClickFunction ={() => goToRegistation()}/>
          <ButtonComp btnClassName ='startUpButtons' btnName = 'Lost Password' onClickFunction ={() => goToLostPassword()}/>
      </div>
    );
  };

  export default LoginPage;