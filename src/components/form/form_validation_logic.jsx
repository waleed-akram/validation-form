import {message} from 'antd'

function formLogic(username,password) {
  
  if ((username === "" && password === "") || (!username && !password)) {
    // setMessage("Please enter username and password!")
    message.warning({content: "Please enter username and password!", className: "custom-message"})
    return false;
  } else if (password === "" || !password) {
    // setMessage("Please enter password!")
    message.warning({content: "Please enter password!", className: "custom-message"});
    return false;
  } else if (username === "" || !username) {
    // setMessage("Please enter username!")
    message.warning({content: "Please enter password!", className: "custom-message"});
    return;
  }
  if (!(username === 'admin') && !(password === 'admin')) {
    // setMessage("Invalid username and password!")
    message.error({content: "Invalid username and password!", className: "custom-message"});
    return false;
  } else if (!(password === 'admin')) {
    // setMessage("Invalid password !")
    message.error({content: "Invalid username!", className: "custom-message"});
    return false;
  } else if (!(username === 'admin')) {
    // setMessage("Invalid username!")
    message.error({content: "Invalid password!", className: "custom-message"});
    return false;
  }

  // console.log("user logged in") setMessage(`${username}'s Validation
  // Successfull!`); alert(message)
  message.success({content: "Validation Successful!", className: "custom-message"});
  return true;

}

export {formLogic};
