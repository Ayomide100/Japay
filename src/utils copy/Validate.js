import validator from 'validator';
export const validate =(firstname="", lastname="",username="", phoneNumber="", email="", password="", re_pass="")=>{
    const  error= {
        nameError: "",
        passError: "",
        repassError: "",
        emailError: "",
        userError:"",
        phoneError:"",
        lastError:""
    }
    var errorArr = []
    if(!validator.isLength(firstname,{min: 3, max:15})){ 
            
        error.nameError= "First name must be >= 3 and <= 15"
        errorArr.push(error.nameError)
    }
    if (!validator.isLength(lastname,{min: 3, max:15})) {
        
        error.lastError= "Last name must be >= 3 and <= 15"
        errorArr.push(error.lastError)
    }
    if(!validator.isLength(username,{min: 4, max:15})){
        error.userError= "Username must be >= 4 and <= 15"   
        errorArr.push(error.userError)         
    }
    if(!validator.isMobilePhone(phoneNumber)){
        error.phoneError= "Phone number incorrect"
        errorArr.push(error.phoneError)
    }
    if(!validator.isLength(password,{min: 4, max:15})){
        error.passError= "Password must be >= 5 and <= 15"
        errorArr.push(error.passError)
    }
    if(password !== re_pass){
        error.repassError= "Password must match!!"
        errorArr.push(error.repassError)
    }
    if(!validator.isEmail(email)){
        error.emailError= "Email incorrect"
        errorArr.push(error.emailError)
    }
    return error
}


