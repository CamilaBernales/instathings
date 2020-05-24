export default function validateLogIn(values){

    let errors = {}


    if(!values.email){
        errors.email = "Email is required";
    }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)){
        errors.email = "Invalid email";
    }
    if(!values.password){
        errors.password ="Password is required";
    }else if(values.password.length < 6){
        errors.password ='The password must contain at least six characters';
    }

    return errors;

}