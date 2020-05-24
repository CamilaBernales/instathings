export default function validateLogIn(values){

    let errors = {}


    if(!values.name){
        errors.name = "Name is required";
    }
    if(!values.company){
        errors.company ="Company name is required";
    }
    if(!values.url){
        errors.url ="url is required";
    }
    if(!values.url){
        errors.url ="url is required";
    }else if(!/^(ftp|http|https):\/\/[^ "]+$/.test(values.url)){
        errors.url="Invalid URL";
    }
    if(!values.description){
        errors.description = "Description is required";
    }



    return errors;

}