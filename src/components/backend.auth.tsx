
type propsTypes = {
    email:string
    password:string
    passwordRemember?:boolean
};

const BackendAuth = (props:propsTypes): boolean => {
        const userEmail = 'steve.jobs@example.com';
        const userPassword = 'password';
        if(userEmail === props.email.trim() && userPassword === props.password)return true;
        return false;
}

export default BackendAuth;