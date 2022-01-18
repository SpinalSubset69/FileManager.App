import { showToast } from "../util/toast";

function Email(email){    

    if(email.length == 0){
        throw new Error('Must Provide An Email')
    }

    const valid = new RegExp(/^[^@\s]+@[^@\s]+\.[^@\s]+$/);

    if(!valid.test(email)){
        throw new Error('Type A Correct Email')
    }
    
}

function Password(password){
    if (password.length == 0) {
        throw new Error('Must Provide A Password')
      }  
}

function RepeatPassword(password, repeatedPassword){    
    if (repeatedPassword !== password) {
        throw new Error('Password\'s Doesn\'t Match ')
      }      
}

function UserName(username){    
    if (username.length === 0) {
        throw new Error('Must Provide An UserName')
    }      
}


export const validate = {
    Email,
    Password,
    RepeatPassword,
    UserName
}