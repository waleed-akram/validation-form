import {useState} from 'react';
import {formLogic} from './form_validation_logic';
import './form.css'

function Form() {

  // const [message,   setMessage] = useState("");
  const [username,
    setUsername] = useState("");
  const [password,
    setPassword] = useState("");
  // const [user ,setUser] = useState({
  //   username: "",
  //   password: ""
  // })

  function handleUsernameChange(e) {
    setUsername(e.target.value);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  function submitForm(e){
    e.preventDefault();
    if(formLogic(username, password)){
      setUsername("");
      setPassword("");
    }
  }

  return (
    <div>
      {/* <p className='message'>{message}</p> */}
      <div className="form-container">
        <form onSubmit={submitForm} className='form'>
          <h2 className='form-heading'>Validation Form</h2>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            placeholder='Enter username'
            onChange={handleUsernameChange}
            name="username"/>
          <label htmlFor='password'>Password</label>
          <input
            type="password"
            id="password"
            maxLength="10"
            value={password}
            onChange={handlePasswordChange}
            size="4"
            name="password"
            placeholder='Enter password'/>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  )
}

export default Form;
